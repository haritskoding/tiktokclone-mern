import React, { useState } from 'react'
import "./index.css";
import {
    Favorite,
    FavoriteBorder,
    Message,
    Share
} from '@material-ui/icons'

const VideoSidebar = ({ likes, shares, messages }) => {
    const [liked, setLiked] = useState(false)
    return (
        <div className="videoSidebar">
            <div className="videoSidebar__button">
                {liked ? <Favorite
                    className="like"
                    color="red"
                    fontSize="large"
                    onClick={e => setLiked(false)}
                />
                    :
                    <FavoriteBorder

                        fontSize="large"
                        onClick={e => setLiked(true)}
                    />}
                <p>{liked ? parseInt(likes) + 1 : likes}</p>
            </div>
            <div className="videoSidebar__button">
                <Message fontSize="large" />
                <p>{messages}</p>
            </div>
            <div className="videoSidebar__button">
                <Share fontSize="large" />
                <p>{shares}</p>
            </div>
        </div>
    )
}

export default VideoSidebar
