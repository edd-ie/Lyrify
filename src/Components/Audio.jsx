import React, { useEffect, useState} from "react";
import './Audio.css'

export default function AudioPlayer({musicData}) {

    useEffect(() => {
        let progress = document.querySelector("#track-progress");
        let volume = document.querySelector("#track-volume");
        let audio = document.querySelector("#audio");
        audio.onloadedmetadata = function () {
            progress.max = audio.duration;
            progress.value = audio.currentTime;
            audio.volume = volume.value/100;

            if(audio.play){
                setInterval(()=>{
                    progress.value = audio.currentTime;
                },
                500)
            }
        };
    }, []);


    function handlePlay(e){
        console.log('Url:', `${musicData[3]}`);
        let crtl = e.target
        let cover = document.querySelector('#album-cover')
        
        if(crtl.textContent === "play_arrow"){
            crtl.textContent = "pause"
            audio.play();
            cover.classList.add('art')
                
        
        }
        else{
            audio.pause();
            crtl.textContent = "play_arrow"
            cover.classList.remove('art')
        }
    }


    function handleTrack(e){
        audio.currentTime = e.target.value

        let crtl = document.querySelector('#play')
        let cover = document.querySelector('#album-cover')
        
        if(audio.currentTime == 100){
            crtl.textContent = "play_arrow"
            cover.classList.remove('art')
        }
        
    }


    function handleVol(e){
        audio.volume = e.target.value/100;
        let vol = document.querySelector('#showVol')
        setVolume(audio.volume)

        if(e.target.value === 0){
            vol.textContent = "volume_off"
        }else if(e.target.value < 40){
            vol.textContent = "volume_down"
        }
        else{
            vol.textContent = "volume_up"
        }
    }
    
    const [volume, setVolume] = useState(.5)

    function handleMute(e){
        if(e.target.textContent === "volume_up"){
            e.target.textContent = "volume_off"
            audio.volume = 0;
        }
        else{
            e.target.textContent = "volume_up"
            audio.volume = volume;
        }
    }

    function view(e){
        console.log("View",e.target.value) 
    }


    return (
        <div id="AudioPlayer">
            <nav>
                <div className="circle">
                    <span className="material-symbols-sharp menu">
                        menu
                    </span>
                </div>
            </nav>
            
            <img src={musicData[2]}
                alt="album cover" id="album-cover" />

            <h1 id="song-title">{musicData[0]}</h1>
            <p id="song-artist"  value={musicData[1]} onChange={view}>{musicData[1]}</p>

            <audio id="audio">
                <source src={musicData[musicData.length - 1]} type="audio/mpeg" />
            </audio>

            <input type="range" min={0} max={100} defaultValue={0} onChange={handleTrack} id="track-progress" />
            
            <div id="vol">
                <span className="material-symbols-sharp" id="showVol" onClick={handleMute}>
                    volume_up
                </span>
                <input type="range" min={0} max={100} defaultValue={20} onChange={handleVol} id="track-volume" />
            </div>

            <div id="controls">
                <div id="backward">
                    <span className="material-symbols-sharp">
                        fast_rewind
                    </span>
                </div>
                <div id="play" onClick={handlePlay}>
                    <span className="material-symbols-sharp">
                        play_arrow
                    </span>
                </div>
                <div id="forward">
                    <span className="material-symbols-sharp">
                        fast_forward
                    </span>
                </div>
            </div>
        
        </div>
    )
}