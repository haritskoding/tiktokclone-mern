
import React, { useState, useEffect } from "react";
import './App.css';
import Video from './components/Video';
import axios from "./config/axios"

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("/v2/posts")
      setVideos(res.data);
      fetchData()
    }
    fetchData()
  }, [])

  console.log(videos, 'df')

  return (
    <div className="app">
      <h5 style={{ color: 'white', marginTop: '6px', marginBottom: '13px' }}>
        @copyright Teguh Muhammad harits link backend <a href="https://tiktok-backend-teguh.herokuapp.com/v2/posts">Link</a>
      </h5>
      <div className="app__videos">
        {videos.map(({ _id, url, channel, description, song, likes, shares, messages }) => (
          <Video
            key={_id}
            url={url}
            channel={channel}
            description={description}
            likes={likes}
            song={song}
            shares={likes}
            messages={messages}
          />
        ))}


      </div>
    </div>
  );
}

export default App;
