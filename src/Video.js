import React, { useRef, useState } from 'react'
import './Video.css'
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';

const Video = ({account, description, audio,likes,shares, messages, url}) => {
    const [play, setPlay]= useState(false);
    const videoReff= useRef(null);
    const onVideoclick= ()=>{
        if (play){
            videoReff.current.pause();
            setPlay(false);
        }else{
            videoReff.current.play();
            setPlay(true);


        }
       
    }

    return (
        <div className="video">
           
            <video loop onClick={onVideoclick} ref={videoReff}
            className="video__player" src={url}/>
        <VideoFooter account={account} description={description} audio={audio}/>
        <VideoSidebar likes={likes} shares={shares} messages={messages}/>
        </div>
    )
}

export default Video
