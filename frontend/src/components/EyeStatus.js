import React from 'react'
import Panel from '../layout/Panel'
import { Button } from 'react-bootstrap';

export default function EyeStatus() {
  return (
    <Panel>
      <h1> Eye Status: </h1>
      <p> very bad </p>
      <Button> See a doctor </Button>
    </Panel>
  )
}
