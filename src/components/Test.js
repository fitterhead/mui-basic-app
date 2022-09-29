import React from 'react'
import { useLocation } from 'react-router-dom'

function Test() {


    const location = useLocation()
    console.log("test location", location)
  return (
    <div>Test</div>
  )
}

export default Test