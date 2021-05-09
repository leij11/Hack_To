import React from 'react'
import Panel from '../../layout/Panel/Panel'
import { Button } from 'react-bootstrap';

export default function BlinkCount({ blinkCountShow, blinkCount }) {
  return (
    <>
      { blinkCountShow &&
        <Panel>
          <h1> Total Blinks: </h1>
          <h2> {blinkCount} </h2>
          <a
            className="btn btn-outline-warning"
            href="https://www.healthline.com/health/how-many-times-do-you-blink-a-day"
            target="_blank">
            See target total blinks
          </a>
        </Panel>
      }
    </>
  )
}
