import React from 'react'
import EyeStatus from '../../components/EyeStatus/EyeStatus'
import BlinkCount from '../../components/BlinkCount/BlinkCount'
import BPM from '../../components/BPM/BPM'


export default function Layout(props) {
  const {
    eyeStatusShow,
    blinkCountShow,
    bpmShow,
    eyeStatus,
    blinkCount,
    bpm
  } = props

  return (
    <div style={{marginLeft: "200px"}} className="container d-flex flex-column justify-content-center align-items-center">
      <section className="w-100">
        <EyeStatus eyeStatusShow={eyeStatusShow} eyeStatus={eyeStatus}/>
        <BlinkCount blinkCountShow={blinkCountShow} blinkCount={blinkCount}/>
        <BPM bpmShow={bpmShow} bpm={bpm}/>
      </section>
    </div>
  )
}
