from flask import Flask, jsonify
from flask_cors import CORS
from multiprocessing import Process, Value
import threading
from opencv import Blink

# Server default is 127.0.0.1:5000
app = Flask(__name__)
CORS(app)

blink = Blink()
bpm = Value('d', 0.0)

def make_response(res, error_code):
    res = jsonify(res)
    res.headers.add('Access-Control-Allow-Origin', '*')
    res.headers.add('Access-Control-Allow-Credentials', 'true')
    res.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    res.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST')
    return res, error_code

@app.route('/')
def index():
    return 'Index Page'



@app.route('/get_status', methods=['GET', 'POST'])
def get_status():
    res = {
        'eye_status': blink.get_condition(),
        'bpm': blink.get_bpm(),
        'total_bpm': blink.get_total_bpm(),
    }
    return make_response({'res': res}, 200)

@app.route('/shutdown_camera', methods=['GET'])
def shutdown_camera():
    blink.shutdown()
    res = {
        'status': 'ok',
    }
    return make_response({'res': res}, 200)


if __name__ == "__main__":
    p = threading.Thread(target=blink.run, args=(bpm,))
    p.start()
    app.run(host='127.0.0.1',port='5000', debug=False, use_reloader=False)
    p.join()
