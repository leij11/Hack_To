import React from 'react'
import './Panel.module.css'

export default function Panel({ children }) {
  return (
    <div className="col-lg-4 col-6 border p-3 Panel">
      { children }
      s
    </div>
  )
}
