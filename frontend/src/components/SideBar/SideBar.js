import React from 'react'
import styles from './SideBar.module.css'
import { Button, Form } from 'react-bootstrap'

export default function SideBar() {
  return (
    <div className={styles.SideBar}>
      <div>
        <h1>iStrain</h1>
        <Button> Start </Button>

        <div className="my-3">
          <Form>
            <Form.Check type="checkbox" label="Eye Status" />
            <Form.Check type="checkbox" label="Total Blinks" />
            <Form.Check type="checkbox" label="Blinks Per Minute" />
          </Form>
        </div>
      </div>

      <div>
        <Button> Get Report </Button>
      </div>
    </div>
  )
}
