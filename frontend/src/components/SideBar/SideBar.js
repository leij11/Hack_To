import React, { useState } from 'react'


import styles from './SideBar.module.css'
import { Button, Modal } from 'react-bootstrap'
import SideBarButton from './SideBarButton/SideBarButton'

export default function SideBar(props) {
  const {
    eyeStatusShow,
    blinkCountShow,
    bpmShow,
    eyeStatusShowHandler,
    blinkCountShowHandler,
    bpmShowHandler
  } = props


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className={styles.SideBar}>
        <div>
          <h1>iBlink</h1>
          <Button style={{ width: 150 }}> Start </Button>

          <div className="my-3">
            <SideBarButton showStatus={eyeStatusShow} onClick={eyeStatusShowHandler}> Eye Status </SideBarButton>
            <SideBarButton showStatus={blinkCountShow} onClick={blinkCountShowHandler}> Total Blinks </SideBarButton>
            <SideBarButton showStatus={bpmShow} onClick={bpmShowHandler}> Blinks Per Minute </SideBarButton>
          </div>
        </div>

        <div>
          <Button
            style={{ width: 150, marginBottom: 10 }}
            onClick={handleShow}
          >
            About
        </Button>

        <a
          style={{ width: 150 }}
          className="btn btn-primary"
          href="report.pdf" target="_blank">
          Get Report
        </a>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title> What is iBlink? </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          With COVID, we can’t seem to take our eyes off the screen for even second without missing an online doctor’s appointment, friday night among us with friends, or after 5 long years, our own convocation ceremony! And the list goes on!
          Within 6 months from the start of COVID, search trends for “dry eye syndrome” has doubled. I know I’m guilty. So, we built iBlink



        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}
