import React, {useEffect, useState } from "react";
import './Chat.css';
import Data from "./Data";

import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import IconButton from '@material-ui/core/IconButton';
import VideocamIcon from '@material-ui/icons/Videocam';
import CallIcon from '@material-ui/icons/Call';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import MoodIcon from '@material-ui/icons/Mood';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';




const Chat=()=>{

  let imgGirl = "https://cdn4.iconfinder.com/data/icons/avatar-users/512/Avatar_Users2_14-512.png";

 

  //created object to store value
  const [chat, setChat] = useState({
    girl:'',
    boy:'',
    time:''
  });
  const callChat=(e)=>{
    let {value,name} = e.target;
    let time = new Date().toLocaleTimeString();
    setChat(()=>{
      return {
        [name]:value,
        time:time
      }
    })
  }

  //created array to store value
  const [talk, storeChat] = useState([]);
  const mitaliTalk=()=>{
    storeChat((oldvalue)=>{
      return [...oldvalue, chat];
    });

    setChat(()=>{
      return {
        girl:'',
        boy:''
      }
    })
  }
  
  
 
  return(
    <React.Fragment>
    <div className="whatsapp_container">
      <div className="girl_area items"> 
        <h1>Mitali Godkar</h1>
        <input type="text" name="girl" placeholder="Message" value={chat.girl} onChange={callChat}/>
        <IconButton  color="primary" onClick={mitaliTalk} aria-label="delete">
          <SendIcon/>
        </IconButton>

      

      </div>

      <div className="conversion items">
        <div className="receiver">
          <ArrowBackIcon/>
          <img alt="girlpic" src={imgGirl} style={{width:'7%',margin:'0px 10px 0px 0px'}}/>
          <p>Mitali Godkar<span>online</span></p>
          <VideocamIcon/>
          <CallIcon/>
          <MoreVertIcon/>
         

          
        </div>

        <div className="chat_area">
          <div className="direction">
          {
            talk.map((value,index)=>{
              return(
                <Data 
                  key={index}
                  girl={value.girl}
                  boy={value.boy}
                  time={value.time}
                />
              )
            })
          }

          </div>
        </div>

        <div className="boy_area items">
          <div className="chat_group">
            <MoodIcon/>
            <input type="text" name="boy" placeholder="Message" value={chat.boy} onChange={callChat}/>
            <AttachFileIcon/>
            <PhotoCameraIcon/>
          </div>
          {/* <SendIcon onClick={mitaliTalk} /> */}
          <IconButton onClick={mitaliTalk} aria-label="delete" >
            <SendIcon/>
          </IconButton>

        </div>  
      </div>

    </div>


    </React.Fragment>
  )
}

export default Chat;
