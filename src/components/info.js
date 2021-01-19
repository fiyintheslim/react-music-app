import React, {Component} from "react";

const Info= (props)=>{
    return(
        <div className="info">
            <img style={{animationName: props.spin}} src={props.info.cover} />
            <h1>{props.info.name}</h1>
            <h3>{props.info.artist}</h3>
        </div>
    )
}
export default Info;