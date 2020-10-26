import React from 'react'
import './App.css'

const App = () => {
  /* States */
  const [count, setCount] = React.useState(0)

  /* Methods */
  const handleCounterIncrement = () => {
    setCount(count + 1)
  }

  const handleCounterDecrement = () => {
    setCount(count - 1)
  }

  return (
    <div data-test="component-app">
      <h1 data-test="counter-display">
        This counter is currently
        <span data-test="counter">{count}</span>
      </h1>
      <button onClick={handleCounterIncrement} data-test="increment-button">
        Increment
      </button>

      <button onClick={handleCounterDecrement} data-test="decrement-button">
        Decrement
      </button>
    </div>
  )
}

export default App
