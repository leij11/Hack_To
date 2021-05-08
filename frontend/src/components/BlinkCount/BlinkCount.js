import React from 'react'
import Panel from '../../layout/Panel/Panel'
import { Button } from 'react-bootstrap';

export default function BlinkCount({ blinkCountShow, blinkCount }) {
  return (
    <>
      { blinkCountShow &&
        <Panel>
          <h1> Total Blinks: </h1>
          <p> { blinkCount } </p>
          <Button> Woah </Button>
        </Panel>
      }
    </>
  )
}
