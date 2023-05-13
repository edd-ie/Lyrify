import { useState } from 'react'
import './App.css'
import AudioPlayer from './Components/Audio.jsx'
import Lyrics from './Components/Lyrics'
import Search from './Components/Search'





function App() {
  const [lyrics, setLyrics] = useState('<br></br><h2>Search for Song...</h2>')
  const [music, setSearchMusic] = useState(['Centuries','Fallout boy',
          "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/ea/5f/87/ea5f87ea-4bc3-0e01-456c-37401a4268f2/14UMGIM60337.rgb.jpg/400x400cc.jpg",
          "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/b7/44/09/b744098b-6d80-57ac-f374-a8e584dfe73b/mzaf_2410606556091558238.plus.aac.ep.m4"])
  


  return (
    <>
      <Search setSearchMusic={setSearchMusic} setSearchLyrics={setLyrics}/>
      <AudioPlayer musicData={music} /> 
      <Lyrics searchText={lyrics}/>
    </>
  )
}

export default App
