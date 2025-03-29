import { useState } from 'react'

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
      <h2>statistics</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>All: {all}</p>
      <p>Average: {average}</p>
      <p>Positive: {positive}%</p>
    </div>
  )
}

export default App