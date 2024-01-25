import React from 'react'
import ChildComponents from './ChildComponents'

const ParentComponents = () => {

    const message = "Hello, world!"

  return (
    <div>
        <h1>{message}</h1>
        <ChildComponents message= {message}/>
    </div>
  )
}

export default ParentComponents