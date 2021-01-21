import React from 'react';
import VideoItem from '../video_item/video_item';
import styles from './video_list.module.css';

const VideoList = props => (
    <div className="list_box">
        <ul className={styles.video_list}>
            {props.videos.map(video => (
                <VideoItem key={video.id} video={video} />
            ))}
        </ul>
    </div>
);

export default VideoList;