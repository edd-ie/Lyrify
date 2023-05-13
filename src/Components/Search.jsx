import React, {useState, useEffect} from "react";
import './Search.css'

export default function Search({setSearchMusic, setSearchLyrics}){

    function searchLyrics(title){
        let url = `https://genius-song-lyrics1.p.rapidapi.com/search/?q=${title}&per_page=1&page=1&text_format=plain`;
        const verification = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '13de1fc542msh7788697a86f0033p13d60fjsn52ab5af57921',
                'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
            }
        }  
        fetch(url, verification)
        .then(response => response.json())
        .then(data => {
            let id = data.hits[0].result.api_path.split('/')[2]

            let lyricsUrl = `https://genius-song-lyrics1.p.rapidapi.com/song/lyrics/?id=${id}&text_format=html`
            
            fetch(lyricsUrl, verification)
            .then(response => response.json())
            .then(dataLyrics => {
                let display = dataLyrics.lyrics.lyrics.body.html
                setSearchLyrics(`${display}`)
            })
        })
    }

    function searchMusic(title) {
        let searchName = title.split(',').join(' ')
        console.log("file: Search.jsx:33 -> setSearchMusic -> input:", searchName);

        let url = `https://shazam.p.rapidapi.com/search?term=${searchName}&locale=en-US&offset=0&limit=1`;
        const parameters = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '13de1fc542msh7788697a86f0033p13d60fjsn52ab5af57921',
                'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
            }
        };

        let details = []
        fetch(url, parameters)
        .then(response => response.json())
        .then(data => {
            let music = data.tracks.hits[0].track;
            
            let song = music.title;
            let artist = music.subtitle;
            let image = music.images.coverarthq;
            let track = music.hub.actions[1].uri;

            details = [song, artist, image, track]
            console.log("file: Search.jsx:56 -> searchMusic -> details:", details);

            setSearchMusic(details)
            return details;
        })
    }

    function handleSearch(e){
        e.preventDefault();
        let form = e.target
        let input = form[0].value
        console.log("file: Search.jsx:63 -> handleSearch -> input:", input);

        searchLyrics(input)
        searchMusic(input)
        

        form.reset()
    }

    return(
        <>
            <form  onSubmit={handleSearch} id="search-form">
                <input type="text" name="search" placeholder="Title, Artist" id="search" required/>
                <input type="submit" value="Search" id="search-button" required/>
            </form>
        </>
    )
}