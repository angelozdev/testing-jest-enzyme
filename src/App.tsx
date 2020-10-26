import React from 'react'
import './App.css'

const App = () => {
  const [count, setCount] = React.useState(0)
  return (
    <div data-test="component-app">
      <h1 data-test="counter-display">
        This counter is currently
        <span data-test="counter">{count}</span>
      </h1>
      <button data-test="increment-button">Increment</button>
    </div>
  )
}

export default App
