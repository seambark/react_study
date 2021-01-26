import React from 'react';
import styles from './video_detail.module.css';

const VideoDetail = ({video, video: {snippet}}) => (
    <section className={styles.detail}>
        <iframe
            type="text/html"
            title="youtube video player"
            className={styles.video}
            width="100%"
            height="500px"
            src={`https://www.youtube.com/embed/${video.id}`}
            frameBorder="0"
            allowFullScreen
         ></iframe>
        <h2>{snippet.title}</h2>
        <h3>{snippet.channelTitle}</h3>
        <pre>{snippet.description}</pre>
    </section>
);

export default VideoDetail;