import React, { useState, useRef } from 'react'
import "./Video.css"
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';

const Video = ({ url, channel, description, song, likes, shares, messages }) => {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);
    console.log(videoRef, 'reff')
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
        <div className="video">
            <VideoSidebar likes={likes} shares={shares} messages={messages} />
            <video
                className="video__player"
                ref={videoRef}
                onClick={handleVideoPress}
                src={url}
            />

            <VideoFooter
                channel={channel}
                description={description}
                song={song}
            />

        </div>
    )
}

export default Video
