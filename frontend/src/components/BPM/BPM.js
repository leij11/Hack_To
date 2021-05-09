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
          <a
            className="btn btn-outline-warning"
            href="https://www.healthline.com/health/how-many-times-do-you-blink-a-day"
            target="_blank">
            See target blinks per minute
          </a>
        </Panel>
      }
    </>
  )
}
