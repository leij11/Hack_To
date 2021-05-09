import React from 'react'
import Panel from '../../layout/Panel/Panel'
import { Button } from 'react-bootstrap';

export default function BMP({ bpmShow, bpm }) {
  return (
    <>
      { bpmShow &&
        <Panel>
          <h1> Blinks Per Minute: </h1>
          <h2> { bpm } </h2>
          <Button> Wa </Button>
        </Panel>
      }
    </>
  )
}
