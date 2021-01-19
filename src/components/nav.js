import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMusic} from "@fortawesome/free-solid-svg-icons";


function Nav(props){

    return(
        <nav>
            <h1>MUSIC PLAYER</h1>
            <h2 onClick={()=>props.switch()}><FontAwesomeIcon icon={faMusic } /><span>Library</span></h2>
        </nav>
    )
}
export default Nav;