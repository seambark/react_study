import React from 'react';
import styles from './video_description.module.css';

const VideoDescription = props => (
    <div className="description">
        <p>비디오</p>
       {/* <p>{props.video.snippet.channelId}</p>
       <p>{props.video.snippet.description}</p> */}
    </div>
);

export default VideoDescription;