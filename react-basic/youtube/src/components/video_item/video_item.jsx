import React from 'react';
import styles from './video_item.module.css';

const VideoItem = props => (
    <li>
        <a href="#" className={styles.item}>
            <div className={styles.img}>
                <img src={props.video.snippet.thumbnails.medium.url} alt=""/>
            </div>
            <strong>{props.video.snippet.title}</strong>
            <p>{props.video.snippet.channelTitle}</p>
        </a>
    </li>
);

export default VideoItem;