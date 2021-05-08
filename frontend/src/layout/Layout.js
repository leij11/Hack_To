import React from 'react'
import EyeStatus from '../components/EyeStatus'

import styles from './Layout.module.css'
import { Container } from 'react-bootstrap'

export default function Layout() {
  return (
    <Container >
      <div className="d-flex flex-row">
        <EyeStatus />
        <EyeStatus />
        <EyeStatus />

      </div>
    </Container>
  )
}
