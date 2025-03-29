import { useState } from 'react'

const Statistics = (props) => {
  return (
    <>
      <h2>Statistics</h2>
      {props.all > 0 ?
        <>
          <p>Good: {props.good}</p>
          <p>Neutral: {props.neutral}</p>
          <p>Bad: {props.bad}</p>
          <p>All: {props.all}</p>
          <p>Average: {props.average}</p>
          <p>Positive: {props.positive}%</p>
        </>
        :
        <p>No feedback given</p>
      }
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleGood = () => {
    const newGood = good + 1
    setGood(newGood)

    const newAll = all + 1
    setAll(newAll)

    const newAverage = (newGood - bad) / newAll
    setAverage(newAverage)

    const newPositive = newGood / newAll * 100
    setPositive(newPositive)
  }

  const handleNeutral = () => {
    const newNeutral = neutral + 1
    setNeutral(newNeutral)

    const newAll = all + 1
    setAll(newAll)

    const newAverage = (good - bad) / newAll
    setAverage(newAverage)

    const newPositive = good / newAll * 100
    setPositive(newPositive)
  }

  const handleBad = () => {
    const newBad = bad + 1
    setBad(newBad)

    const newAll = all + 1
    setAll(newAll)

    const newAverage = (good - newBad) / newAll
    setAverage(newAverage)

    const newPositive = good / newAll * 100
    setPositive(newPositive)
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={handleGood}>Good</button>
      <button onClick={handleNeutral}>Neutral</button>
      <button onClick={handleBad}>Bad</button>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positive={positive}
      />
    </div>
  )
}

export default App