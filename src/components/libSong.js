import React from "react";

function LibSong(props){
    return(
    <div className={`ind-song ${props.song.active ? "selected" : ""}`} onClick={()=>props.selection(props.song.id, props.songs)} >
            <img src={props.song.cover} alt={props.song.artist}/>
            <div className="song-desc">
                <h3> {props.song.name}</h3>
                <h4> {props.song.artist}</h4>
            </div>
            
        </div>
    )
}
export default LibSong;