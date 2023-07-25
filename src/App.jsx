import { useState } from 'react'
import './App.css'
import Form from './components/form'
import ConditionalForm from './components/shop'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Form/>
      {/* <ConditionalForm/> */}
    </>
  )
}

export default App
