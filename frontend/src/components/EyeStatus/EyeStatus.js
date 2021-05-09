import React, { useState,useEffect } from "react";
import Panel from '../../layout/Panel/Panel';
import { Button } from 'react-bootstrap';
import axios from 'axios';

export default function EyeStatus({ eyeStatusShow,eyeStatus }) {

  return (
    <>
      { eyeStatusShow &&
        <Panel>
          <h1> Eye Status: </h1>
          {eyeStatus=='bad' &&
          <div>
            <span aria-label="Bad" role="img"> 😣</span>
            <h2>{eyeStatus}</h2>
            <Button variant="outline-warning"> See a doctor </Button>
          </div>
          }
          {eyeStatus=='good' &&
          <div>
            <span aria-label="Good" role="img"> 👁</span>
            <h2>{eyeStatus}</h2>
            <Button variant="outline-success"> Congrats ! Healthy Eyes  </Button>
          </div>
          }
        </Panel>
      }
    </>
  )
}
