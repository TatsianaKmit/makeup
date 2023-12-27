import React from 'react'
import { Link } from 'react-router-dom'


export default function PageNotFound() {
  return (
    <div>
      <p>This page doesn't exist. Go <Link to="/">home</Link> page.</p>
    </div>
  )
}
