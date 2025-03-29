import { useState } from 'react'

const Button = ({ handle, text }) => {
  return (
    <>
      <button onClick={handle}>{text}</button>
    </>
  )
}

const StatisticLine = ({ text, statistic, percent }) => {
  return (
    <p>{text}: {statistic}{percent ? '%' : ''}</p>
  )
}

const Statistics = ({ good, neutral, bad, all, average, positive }) => {
  return (
    <>
      <h2>Statistics</h2>
      {all > 0 ?
        <>
          <StatisticLine text={'Good'} statistic={good} />
          <StatisticLine text={'Neutral'} statistic={neutral} />
          <StatisticLine text={'Bad'} statistic={bad} />
          <StatisticLine text={'All'} statistic={all} />
          <StatisticLine text={'Average'} statistic={average} />
          <StatisticLine text={'Positive'} statistic={positive} percent={true} />
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
      <Button handle={handleGood} text={'Good'} />
      <Button handle={handleNeutral} text={'Neutral'} />
      <Button handle={handleBad} text={'Bad'} />
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