import { useState } from 'react'
import './App.css'
import AudioPlayer from './Components/Audio.jsx'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AudioPlayer/> 
    </>
  )
}

export default App
