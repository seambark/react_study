import React from 'react';
import VideoItem from '../video_item/video_item';
import styles from './video_list.module.css';

const VideoList = ({ videos, onVideoClick, display }) => (
    <section className={styles.video_list}>
        <ul className={styles.list}>
            {videos.map(video => (
                <VideoItem
                    key={video.id}
                    video={video}
                    onVideoClick={onVideoClick}
                    display={display}
                />
            ))}
        </ul>
    </section>
);

export default VideoList;