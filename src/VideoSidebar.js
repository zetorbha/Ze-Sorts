import React, { useState } from 'react';
import './VideoSidebar.css';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MessageIcon from '@material-ui/icons/Message';
import ShareIcon from '@material-ui/icons/Share';

const VideoSidebar = ({likes, shares, messages}) => {
    const [liked, setLiked]= useState(false);
    // const clicked= ()=>{
    //     if (!liked){
    //         setLiked(true)
    //     }else{
    //         setLiked(false)

    //     }
    // }
    
    return (
        <div className="sidebar">
            <div className="sidebar__options" >
           {liked? (<FavoriteIcon fontSize="large" onClick={(e)=>setLiked(false) } />) :(<FavoriteBorderIcon fontSize="large" onClick={(e)=>setLiked(true)} />)} 
    <p>{liked? likes+1:likes}</p>
             </div>
             <div className="sidebar__options">
             <MessageIcon fontSize="large"/>
             <p>{messages}</p>
             </div>
             <div className="sidebar__options">
             <ShareIcon fontSize="large"/>
    <p>{shares}</p>
             </div>




            
          
          
        </div>
    )
}

export default VideoSidebar
