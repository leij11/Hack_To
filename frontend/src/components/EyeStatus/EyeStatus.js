import React from 'react'
import Panel from '../../layout/Panel/Panel'
import { Button } from 'react-bootstrap';

export default function EyeStatus({ eyeStatusShow, eyeStatus }) {
  return (
    <>
      { eyeStatusShow &&
        <Panel>
          <h1> Eye Status: </h1>
          <span aria-label="Very Bad" role="img"> 😩</span>
          <p> { eyeStatus } </p>
          <Button> See a doctor </Button>
        </Panel>
      }
    </>
  )
}
