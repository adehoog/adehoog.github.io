import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './styles.scss'
// Import Bootstrap styles
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-primary">Vite + React</h1>
      <button className="btn btn-success">Click Me</button>
    </>
  )
}

export default App
