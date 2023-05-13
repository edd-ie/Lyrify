import React, {useState} from "react";
import './Lyrics.css';

export default function Lyrics({searchText}) {

    let inner = searchText 

    return(
        <div dangerouslySetInnerHTML={{ __html: `${inner}` }} id="lyrics">
        </div>
    )
}