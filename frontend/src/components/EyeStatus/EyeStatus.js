import React, { useState,useEffect } from "react";
import Panel from '../../layout/Panel/Panel';
import { Button } from 'react-bootstrap';
import axios from 'axios';

export default function EyeStatus({ eyeStatusShow }) {
  const [eyeInfo,setEyeInfo]= useState([])

  useEffect(() => {
    const getInfo = () => {
        let source=axios.CancelToken.source();
        axios
        .get(`http://127.0.0.1:5000/get_status`, {
            cancelToken: source.token,
            headers: { 'Content-Type': 'application/json' },
        })
        .then(response => {
            const eyeInfo = response.data.res
            setEyeInfo(eyeInfo);
        })
        .catch(error => {
            if (!axios.isCancel(error)) {
                setEyeInfo();
            }
            console.log(error)
        })
    
      }
    getInfo();
  }, []);

  return (
    <>
      { eyeStatusShow &&
        <Panel>
          <h1> Eye Status: </h1>
          <span aria-label="Very Bad" role="img"> 😩</span>
          <p> { eyeInfo['eye_status'] } </p>
          <Button> See a doctor </Button>
        </Panel>
      }
    </>
  )
}
