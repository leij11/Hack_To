import React from 'react'
import Panel from '../../layout/Panel/Panel'
import { Button } from 'react-bootstrap';

export default function EyeStatus({ eyeStatusShow, eyeStatus }) {
  return (
    <>
      { eyeStatusShow &&
        <Panel>
          <h1> Eye Status: </h1>
          <p> { eyeStatus } </p>
          <Button> See a doctor </Button>
        </Panel>
      }
    </>
  )
}
