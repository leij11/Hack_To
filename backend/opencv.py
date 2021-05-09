import cv2
import dlib
import numpy as np
from scipy.spatial import distance

import time

def calculate_EAR(eye):
    A = distance.euclidean(eye[1], eye[5])
    B = distance.euclidean(eye[2], eye[4])
    C = distance.euclidean(eye[0], eye[3])
    ear_aspect_ratio = (A+B)/(2.0*C)
    return ear_aspect_ratio


class Blink:
    def __init__(self):
        self.start_time = time.time()
        self.bpm = 0
        self.cur_bpm = 0
        self.eye_closed = False
        self.blink_queue = []
        self.good_condition = True

    def get_bpm(self):
        return self.bpm

    def run(self, bpm):
        # Capture video and set up dlib.
        cap = cv2.VideoCapture(0)
        hog_face_detector = dlib.get_frontal_face_detector()
        dlib_facelandmark = dlib.shape_predictor("data_files/shape_predictor_68_face_landmarks.dat")


        while True:
            # Determine blinks per min
            cur_time = time.time()
            blink_queue = [x for x in self.blink_queue if cur_time - x < 60]
            self.bpm = len(self.blink_queue)
            bpm = self.bpm
            #if cur_time - start_time >= 60:
            #    blinks_pm = cur_bpm
            #    cur_bpm = 0
            #    start_time = cur_time

            _, frame = cap.read()
            gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

            faces = hog_face_detector(gray)
            for face in faces:
                face_landmarks = dlib_facelandmark(gray, face)
                leftEye = []
                rightEye = []

                for n in range(36,42):
                    x = face_landmarks.part(n).x
                    y = face_landmarks.part(n).y
                    leftEye.append((x,y))
                    next_point = n+1
                    if n == 41:
                        next_point = 36
                    x2 = face_landmarks.part(next_point).x
                    y2 = face_landmarks.part(next_point).y
                    cv2.line(frame,(x,y),(x2,y2),(0,255,0),1)
                
                for n in range(42,48):
                    x = face_landmarks.part(n).x
                    y = face_landmarks.part(n).y
                    rightEye.append((x,y))
                    next_point = n+1
                    if n == 47:
                        next_point = 42
                    x2 = face_landmarks.part(next_point).x
                    y2 = face_landmarks.part(next_point).y
                    cv2.line(frame,(x,y),(x2,y2),(0,255,0),1)

                #print(leftEye)
                #print(rightEye)
                left_ear = calculate_EAR(leftEye)
                right_ear = calculate_EAR(rightEye)

                # EAR = EYE ASPECT RATIO
                EAR = (left_ear+right_ear)/2
                EAR = round(EAR,2)
                # Default threshold for drowsiness
                if EAR < 0.26:
                    cv2.putText(frame,"DROWSY",(20,100), cv2.FONT_HERSHEY_SIMPLEX,2,(0,0,255),4)
                    cv2.putText(frame,"Are you Sleepy?",(20,400), cv2.FONT_HERSHEY_SIMPLEX,2,(0,0,255),4)
                    #print("Drowsy")
                # Threshold for blinking
                if EAR < 0.2 and not self.eye_closed:
                    self.cur_bpm += 1
                    self.blink_queue.append(time.time())
                    self.eye_closed = True
                elif EAR >= 0.2:
                    self.eye_closed = False
                #print(EAR)

            # Display GUI frame
            cv2.putText(frame,f'BPM: {self.bpm}',(60,150), cv2.FONT_HERSHEY_SIMPLEX,1,(0,0,255),4)
            cv2.imshow("Are you Sleepy", frame)

            key = cv2.waitKey(1)
            if key == 27:
                break

        cap.release()
        cv2.destroyAllWindows()

