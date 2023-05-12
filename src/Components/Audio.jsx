import React from "react";
import './Audio.css'

export default function AudioPlayer() {
    return (
        <div id="AudioPlayer">
            <nav>
                <div id="circle">
                    <span class="material-symbols-sharp arrow-back">
                        arrow_back_ios
                    </span>
                    <span class="material-symbols-sharp menu">
                        menu
                    </span>

                </div>
            </nav>
            
            <img src="https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/250x250-000000-80-0-0.jpg"
                alt="album cover" id="album-cover" />

            <h1 id="song-title">Lose yourself</h1>
            <p id="song-artist">Eminem</p>

            <audio controls>
                <source src="https://cdns-preview-1.dzcdn.net/stream/c-13039fed16a173733f227b0bec631034-12.mp3" type="audio/mpeg" />
            </audio>
            <input type="range" min="0" max="100" id="track-progress"/>
        </div>
    )
}