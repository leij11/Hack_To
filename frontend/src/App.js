import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from 'react'

import Layout from './layout/Layout/Layout'
import SideBar from './components/SideBar/SideBar'

function App() {
  const [eyeStatusShow, setEyeStatusShow] = useState(true)
  const [blinkCountShow, setBlinkCountShow] = useState(true)
  const [bpmShow, setBpmShow] = useState(true)

  const [eyeStatus, setEyeStatus] = useState("very bad")
  const [blinkCount, setBlinkCount] = useState(123)
  const [bpm, setBpm] = useState(11)

  return (
    <>
      <SideBar
        eyeStatusShow={eyeStatusShow}
        blinkCountShow={blinkCountShow}
        bpmShow={bpmShow}
        setEyeStatusShow={setEyeStatusShow}
        setBlinkCountShow={setBlinkCountShow}
        setBpmShow={setBpmShow}
      />
      <Layout
        eyeStatusShow={eyeStatusShow}
        blinkCountShow={blinkCountShow}
        bpmShow={bpmShow}
        eyeStatus={eyeStatus}
        blinkCount={blinkCount}
        bpm={bpm}
      />
    </>
  );
}

export default App;
