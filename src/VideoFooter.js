import React from 'react';
import './VideoFootter.css';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from 'react-ticker'


const VideoFooter = ({account, description, audio}) => {
    return (
        <div className="videoFootter">
           
            <div className="videoFootter__text">
    <h3>@{account}</h3>
    <p>{description}</p>
            <div className="videoFootter__ticker">
            <MusicNoteIcon className="videoFootter__icon"/>
            <Ticker mode="smooth">
                {({index})=>
                    (
                        <>
                       <p>{audio}</p>
                        </>
                    )
                }
            </Ticker>
            </div>
           
            </div>
            <img className="videoFootter__record" src="https://static.thenounproject.com/png/934821-200.png"
 alt=""/>
        </div>
    )
}

export default VideoFooter
