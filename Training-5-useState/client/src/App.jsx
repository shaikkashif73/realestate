import './App.css'
import { useState } from 'react';


function App() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  }

  return (
    <>
      <h1>Counter : {counter}</h1>
      <button onClick={incrementCounter} >Increment</button>
    </>
  )
}
export default App