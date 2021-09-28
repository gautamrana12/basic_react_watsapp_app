import React, {useEffect, useState} from "react";
import reactDom from "react-dom";

const Data=(props)=>{

    let imgGirl = "https://cdn4.iconfinder.com/data/icons/avatar-users/512/Avatar_Users2_14-512.png";
    let imgBoy = "https://cdn2.iconfinder.com/data/icons/avatars-60/5985/29-Software_Assistant-256.png";

    //to remove empty block
     useEffect(()=>{
        let aa = document.querySelectorAll('.conversion p');
        aa.forEach((value,index)=>{
            console.log(`length value is ${value.innerText.length}`);
            if((value.innerText.length=="10") || (value.innerText.length=="11") || (value.innerText.length=="")){
                value.parentNode.remove();
            }
        })
    })


    return(
        <React.Fragment>
            <div className="girlarea common_chat">
                <img alt="girlpic" src={imgGirl} style={{width:'7%'}}/>
                <p className="girl">{props.girl}<span>{props.time}</span></p>
            </div>
            <div className="boyarea common_chat">
                <p className="boy">{props.boy}<span>{props.time}</span></p>
                <img alt="boypic" src={imgBoy} style={{width:'7%'}}/>
            </div>
        </React.Fragment>
    )
}

export default Data;