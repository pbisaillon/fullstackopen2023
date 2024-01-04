import { useState } from 'react'


const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  )
}

const Content = (props) => {
  console.log(props.parts)
  return (
    <div>
    <Part part={props.parts[0].part} exercises={props.parts[0].exercises} />
    <Part part={props.parts[1].part} exercises={props.parts[1].exercises} />
    <Part part={props.parts[2].part} exercises={props.parts[2].exercises} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const parts = [{part: 'Fundamentals of React', exercises: 10},
  {part: 'Using props to pass data', exercises: 10},
  {part: 'State of a component', exercises: 14}
]
  return (
    <div>
      <Header course = {course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App