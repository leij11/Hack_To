import React, { useState, useEffect } from "react";
import EyeStatus from '../../components/EyeStatus/EyeStatus'
import BlinkCount from '../../components/BlinkCount/BlinkCount'
import BPM from '../../components/BPM/BPM'
import Recommand from '../../components/Recommand/Recommand'
import axios from 'axios';

export default function Layout(props) {
  const {
    eyeStatusShow,
    blinkCountShow,
    bpmShow,
  } = props

  const [eyeInfo, setEyeInfo] = useState([])

  useEffect(() => {

    const interval = setInterval(() => {
      console.log("send")
      let source = axios.CancelToken.source();
      axios
        .get(`http://127.0.0.1:5000/get_status`, {
          cancelToken: source.token,
          headers: { 'Content-Type': 'application/json' },
        })
        .then(response => {
          const eyeInfo = response.data.res
          setEyeInfo(eyeInfo);
        })
        .catch(error => {
          if (!axios.isCancel(error)) {
            setEyeInfo();
          }
          console.log(error)
        })

    }, 1000);
  }, []);

  let eyeStatus = "bad"
  let bpm = "2"
  let blinkCount='3'
  if (eyeInfo) {
    eyeStatus = eyeInfo['eye_status']
    bpm = eyeInfo['bpm']
    blinkCount=eyeInfo['total_bpm']
  }
  //console.log(eyeInfo)
  return (
    <div style={{ marginLeft: "200px" }} className="d-flex flex-row justify-content-center">
      <section className="w-100">
        <EyeStatus eyeStatusShow={eyeStatusShow} eyeStatus={eyeStatus}/>
        <BlinkCount blinkCountShow={blinkCountShow} blinkCount={blinkCount}/>
        <BPM bpmShow={bpmShow} bpm={bpm}/>
      </section>
      <Recommand />
    </div>
  )
}
