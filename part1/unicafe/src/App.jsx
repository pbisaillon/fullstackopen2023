import { useState } from 'react'

const Header1 = ({ title }) => <h1>{title}</h1>

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const Statistics = ({ good, neutral, bad }) => {
  if ((good + neutral + bad) > 0) {
    return (<div>
      <div>good {good}</div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>
      <div>Total {good + neutral + bad}</div>
      <div>Avg {(good - bad) / (good + neutral + bad)}</div>
      <div>Positive {100.0 * good / (good + neutral + bad)}%</div>
    </div>
    )
  }

  return (<div>No feedback given</div>)
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const incrementGood = () => {
    setGood(good + 1)
  }

  const incrementNeutral = () => {
    setNeutral(neutral + 1)
  }

  const incrementBad = () => {
    setBad(bad + 1)
  }


  return (
    <div>
      <Header1 title='give feedback' />
      <Button handleClick={incrementGood} text='good' />
      <Button handleClick={incrementNeutral} text='neutral' />
      <Button handleClick={incrementBad} text='bad' />
      <Header1 title='statistics' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App