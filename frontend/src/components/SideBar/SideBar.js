import React from 'react'
import styles from './SideBar.module.css'
import { Button, Form } from 'react-bootstrap'
import SideBarButton from './SideBarButton/SideBarButton'

export default function SideBar(props) {
  const {
    eyeStatusShow,
    blinkCountShow,
    bpmShow,
    setEyeStatus,
    setBlinkCount,
    setBpm
  } = props
  
  return (
    <div className={styles.SideBar}>
      <div>
        <h1>iStrain</h1>
        <Button style={{width:150}}> Start </Button>

        <div className="my-3">
          <SideBarButton showStatus={eyeStatusShow} onClick={console.log("asd")}> Eye Status </SideBarButton>
          <SideBarButton showStatus={blinkCountShow}> Total Blinks </SideBarButton>
          <SideBarButton showStatus={bpmShow}> Blinks per minute </SideBarButton>
        </div>
      </div>

      <div>
        <Button style={{width:150}}> Get Report </Button>
      </div>
    </div>
  )
}
