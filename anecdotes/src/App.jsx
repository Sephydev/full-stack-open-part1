import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning.',
    'If builders built buildings the way programmers wrote programs, then the first woodpecker that came along would destroy civilization.',
    'I think it\'s a new feature. Don\'t tell anyone it was an accident.',
    'Theory is when you know something, but it doesn\'t work. Practice is when something works, but you don\'t know why. Programmers combine theory and practice: Nothing works and they don\'t know why.',
    'The goal of Computer Science is to build something that will last until we\'ve finished building it.',
    'The most likely way for the world to be destroyed, most experts agree, is by accident. That\'s where we come in; we\'re computer professionals. We cause accidents.',
    'Rule of Optimization: Rule 1: don\'t do it. Rule 2 (for experts only): Don\'t do it yet.',
    'If the automobile had followed the same development cycle as the computer, a Rolls-Royce would today cost $100, get a million miles per gallon, and explode once a year, killing everyone inside.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Uint8Array(8))

  const handleSelected = () => {
    const newSelected = Math.floor(Math.random() * anecdotes.length)
    setSelected(newSelected)
  }

  const handleVotes = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)
  }

  return (
    <div>
      {anecdotes[selected]}
      <p>has {votes[selected]} vote</p>
      <button onClick={handleVotes}>Vote</button>
      <button onClick={handleSelected}>next anecdote</button>
    </div>
  )
}

export default App