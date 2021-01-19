import React, {useRef} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlay} from "@fortawesome/free-solid-svg-icons";
import {faPpause} from "@fortawesome/free-solid-svg-icons";
import {faBackward} from "@fortawesome/free-solid-svg-icons";
import {faForward} from "@fortawesome/free-solid-svg-icons";


const Control=(props)=>{
    const refe=props.refer;
    
function format(time){
    return(
        Math.floor(time/60)+":"+("0"+Math.floor(time%60)).slice(-2)
    )
}

    return(
        <div className="music-controller">
            <div className="controls">
                <FontAwesomeIcon className="rewind" size="2x" icon={faBackward} onClick={()=>props.skip("backward")}/>
                <FontAwesomeIcon onClick={()=>props.control(refe)} className="play" size="3x" icon={props.stat.sign} />
                <FontAwesomeIcon className="forward" size="2x" icon={faForward} onClick={()=>props.skip("forward")}/>
            </div>
            <div className="time-slider">
                <p>{format(props.stat.time.spent)}</p>
                <input onChange={(e)=>props.slide(e)} min={0} max={props.stat.time.duration} value={props.stat.time.spent} type="range" />
                <p>{ format(props.stat.time.duration)}</p>
            </div>
           

        </div>
    )
}

export default Control;