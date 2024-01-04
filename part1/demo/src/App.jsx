import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Hello = (props) => {
  return (
    <div>
      <p> Hello {props.name} {props.lastname}</p>
    </div>
  )
}

const Time = () => {  
  const now = new Date()

  return (
    <div>
      {now.toString()}
    </div>
  )
}

const App = () => {

  

  return (
    <div>
      <Hello name ='George' lastname='Clooney' />
      <p>It is <Time /> </p>
    </div>
  )
}

export default App
