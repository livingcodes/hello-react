import { useState } from 'react'
import Hello from './Hello'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1)
  }

  return (
    <>
      <Hello name="Tweedle Dee" />
      <br />
      <Hello name="Tweedle Dum" />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + TypeScript</h1>
      <div className="card">
        <Btn count={count} hndClick={handleClick} />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Btn count={count} hndClick={handleClick} />
    </>
  )
}

type BtnProps = {
  count: number
  hndClick: () => void
}
function Btn({ count, hndClick }: BtnProps) {
  return (
    <button className="btn" onClick={hndClick}>
      count is {count}
    </button>
  )
}

export default App
