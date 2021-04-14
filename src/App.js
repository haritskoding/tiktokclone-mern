
import React, { useState, useRef } from "react";
import './App.css';
import Video from './components/Video';

function App() {
  const [playing, setPlaying] = useState(false);

  const videoRef = useRef(null);

  const handleVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false)
    } else {
      videoRef.current.play();
      setPlaying(true)
    }
  }

 

  return (
    <div className="app">
      <div className="app__videos">
        <Video
          url="https://res.cloudinary.com/teguhharits/video/upload/v1618400126/sisk_mg4gph.mp4"
          channel="Siska Kohl"
          description="Siska kohl nasi goreng"
          likes={34000}
          shares={11200}
          messages={45}
          ref={videoRef}
          press={handleVideoPress}
        />

        <Video
          url="https://res.cloudinary.com/teguhharits/video/upload/v1618398935/1_zjuwtt.mp4"
          channel="Novita"
          description="Novita cantik joget"
          likes={1000}
          shares={1100}
          messages={45}
          press={handleVideoPress}
          ref={videoRef}
        />
        <Video
          url="https://res.cloudinary.com/teguhharits/video/upload/v1618399352/3_vxx9x1.mp4"
          channel="Novita"
          description="Novita cantik banget"
          likes={1000}
          shares={110}
          messages={45}
          ref={videoRef}
          press={handleVideoPress}
        />
        <Video
          url="https://res.cloudinary.com/teguhharits/video/upload/v1618399620/nov_ijz8ct.mp4"
          channel="Siska Kohl"
          description="Siska kohl nasi goreng"
          likes={500}
          shares={11200}
          messages={35}
          ref={videoRef}
          press={handleVideoPress}
        />
        <Video
          url="https://res.cloudinary.com/teguhharits/video/upload/v1618399328/WhatsApp_Video_2021-04-14_at_18.17.24_o9pmdx.mp4"
          channel="Annisa"
          description="Annisa sayang kuh"
          likes={200}
          shares={110}
          messages={25}
          ref={videoRef}
          press={handleVideoPress}
        />

      </div>

    </div>
  );
}

export default App;
