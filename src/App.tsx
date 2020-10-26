import React from 'react'
import './App.css'

function App() {
  return (
    <div data-test="component-app">
      <h1 data-test="counter-display">This counter is current</h1>
      <button data-test="increment-button">Increment</button>
    </div>
  )
}

export default App
