import React, {useState, useEffect} from 'react';
import './App.css';
import Video from './Video';
import db from './firebase'

function App() {
  const [video, setVideo]= useState([]);

  useEffect(()=>{
    db.collection('sorts').onSnapshot(snapshot =>setVideo(snapshot.docs.map(doc =>doc.data())))
  },[])

  const videos = video.map(({account, description, audio, likes, shares, messages, url}) => (
<Video  audio={audio} account={account} description={description} likes={likes} shares={shares} messages={messages} 
        url={url}/>
  ));
 
  return (
    <div className="app">
      <div className="app__videos">
        {videos}
       
      </div>
    </div>
  );
}

export default App;
