import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { inspectRecursively } from './comps'

const obj = {
  prop1: {
    prop2: 1,
    prop3: {
      prop4: 2
    }
  },
  prop5: "1"
}


function App() {
  const [count, setCount] = useState(0)

  console.log(inspectRecursively(obj))
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
