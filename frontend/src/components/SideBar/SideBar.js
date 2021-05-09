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

          <Button style={{ width: 150 }}> Get Report </Button>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title> What is iBlink? </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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
