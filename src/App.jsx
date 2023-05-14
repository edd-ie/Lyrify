import { useState } from 'react'
import './App.css'
import AudioPlayer from './Components/Audio.jsx'
import Lyrics from './Components/Lyrics'
import Search from './Components/Search'





function App() {
  const [lyrics, setLyrics] = useState('<br></br><h2>Search for Song...</h2>')
  const [music, setSearchMusic] = useState([ "Royalty","Egzod, Maestro Chives & Neoni", 
    "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/6c/4e/0e/6c4e0e05-182d-4374-0921-3e48226f5670/cover.jpg/400x400cc.jpg"
    ,"https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview114/v4/35/0e/07/350e078c-5836-3e24-7db4-60aec20ed37a/mzaf_10805109299337419920.plus.aac.ep.m4a"
  ])
  


  return (
    <>
      <Search setSearchMusic={setSearchMusic} setSearchLyrics={setLyrics}/>
      <AudioPlayer musicData={music}/> 
      <Lyrics searchText={lyrics}/>
    </>
  )
}

export default App
