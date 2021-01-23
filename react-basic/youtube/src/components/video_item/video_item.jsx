import React, { memo } from 'react';
import styles from './video_item.module.css';

const VideoItem = memo(
    ({ video, video:{snippet}, onVideoClick, display }) => {
        const displayType = display === 'list' ? styles.list : styles.grid;
        return (
        <li className={`${displayType}`}>
            <a href="#" className={styles.item} onClick={() => onVideoClick(video)}>
                <div className={styles.img}>
                    <img src={snippet.thumbnails.medium.url} alt=""/>
                </div>
                <div className={styles.txt}>
                    <strong>{snippet.title}</strong>
                    <p>{snippet.channelTitle}</p>
                </div>
            </a>
        </li>
    )}
);

export default VideoItem;