import React, {Component} from "react";
//components
import Control from "./components/control";
import Info from "./components/info";
import Lib from "./components/library";
import Nav from "./components/nav"
import sendData from "./data";
//styling
import "./styles/app.scss";

//sign
import {faPlay} from "@fortawesome/free-solid-svg-icons";
import {faPause} from "@fortawesome/free-solid-svg-icons";



class App extends Component{
  constructor(props){
    super(props);
    this.state={
      current: sendData()[0],
      data:sendData(),
      isPlaying: false,
      library:false,
      sign:faPlay,
      rotate:"",
      time:{
        spent:0,
        duration:0      }
    };
    this.myRef=React.createRef()
  }
  
componentDidMount(){
  let dat=sendData();
this.setState({
  current:dat[0],
  data:dat
})

  
  
}



playPauseHandler= (r)=>{
  
  if(!this.state.isPlaying){
  r.current.play();
  this.setState({
    sign:faPause,
    rotate:"spin"
  })
  
  }else{
    r.current.pause()
    this.setState({
      sign:faPlay,
      rotate:""
    })
  }
  this.setState((prevstate, prevprops)=>{
    return(
      {
        isPlaying:!prevstate.isPlaying
      }
    )
  })
  
}

timeHandler=(a)=>{
  this.setState({
    time:{
    duration:a.current.duration,
    spent:a.current.currentTime,
    }
  })
}

slider=(e, b)=>{

this.setState({
  time:{
  ...this.state.time,
spent:e.target.value,
    
  }

})
this.myRef.current.currentTime=e.target.value
}

selectSong=(a, b)=>{
  
  const select=b.filter(e=>{
    return(
      a === e.id
    )
  });
  select[0].active=true;
  const reste=b.map(e=>{
    if(e.id !== a){
     return{
       ...e,
       active:false
     } 
    }else{
      return{
        ...e,
        active:true
      } 
    }
    
  })
  
  this.setState({
    current:select[0],
    isPlaying:true,
    sign:faPause,
    rotate:"spin",
    data:reste
  })
  
 
      this.myRef.current.autoplay=true;
    
  }

skip = (direction)=>{

  let currentNo=this.state.data.findIndex(e => e.id===this.state.current.id);
  if(direction==="forward"){
    let newer=(currentNo + 1)%(this.state.data.length);
    this.setState((state, props)=>{
      
      return {current:state.data[newer]};
    })
    
    
  }else if(direction==="backward"){
    if(currentNo===0){
      this.setState((state, props)=>{
        return{current:state.data[state.data.length-1]}
      })
    }else{
      this.setState((state, props)=>{
        return{current:state.data[currentNo - 1]}
      })
    }

  }
if(this.state.isPlaying===true){
  this.myRef.current.autoplay=true;
}else{
  this.myRef.current.autoplay=false;
}
//this.selectSong(this.state.current.id, this.state.data)
console.log(this.myRef)
  
}

library=()=>{
this.setState((state, props)=>{
return({
  library:!state.library
})
})
}

  render(){
  return (
    <div className="contain">
      <Lib songs={this.state.data} selection={this.selectSong} stat={this.state} lib={this.state.library}/>
      <div className="App">
        <Nav switch={this.library}/>
        <Info info={this.state.current} spin={this.state.rotate}/>
        <Control timeHandler={this.timeHandler} stat={this.state} control={this.playPauseHandler} song={this.state.current} slide={this.slider} refer={this.myRef} skip={this.skip}/>
        <audio onTimeUpdate={()=>this.timeHandler(this.myRef)} ref={this.myRef} src={this.state.current.audio}></audio>
      </div>
      
    </div>
  );
  }
}

export default App;
