import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username : "User1",
    age : 21
  }

  let newArr = [1,2,3,4]
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl">
          Hello world!
      </h1>

     <Card channel = "learn react" btnText = "click me" /> 
     {/* someObj = {myObj} someObj1 = {newArr}  */}

     <Card channel = "learn react with fun" btnText = "visit me" />
     
    </>
  )
}

export default App
