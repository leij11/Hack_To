import React from 'react'
import { Button } from 'react-bootstrap'

export default function SideBarButton({ showStatus, children, onClick }) {
  return (
    <Button style={{ width: 150, marginTop: 5 }}
      variant={showStatus ? "success" : "danger"}
      onClick={() => onClick}
    > { children} </Button>
  )
}
