import React from "react";
import LibSong from "./libSong"

const Lib=(props)=>{


    return(
        <div className={`lib-cont ${props.stat.library?"switch":""}`} >
            <h1>
                LIBRARY
            </h1>
            
                {props.songs.map(e=>{
                    return(
                   <LibSong song={e} songs={props.songs} key={e.id} selection={props.selection} stat={props.stat} />
                    )
                })}
            
        </div>
    )
}

export default Lib;