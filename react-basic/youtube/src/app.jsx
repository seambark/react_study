import { useCallback, useEffect, useState } from 'react';
import Header from './components/header/header';
import VideoList from './components/video_list/video_list';
import VideoDetail from './components/video_detail/video_detail';
import styles from './app.module.css';

function App({youtube}) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = video => {
    setSelectedVideo(video);
  };

  const search = useCallback(query => {
    setSelectedVideo(null);
    youtube
    .search(query)
    .then(videos => setVideos(videos));
  },[youtube]);

  useEffect(() => {
    youtube
    .mostPopular()
    .then(videos => setVideos(videos));
  },[youtube]);
  return (
    <>
      <Header onSearch={search}/>
      <section className={styles.content}>
        {selectedVideo && 
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
          </div>
        }
        <div className={styles.list}>
          <VideoList videos={videos} onVideoClick={selectVideo} display={selectedVideo? 'list' : 'grid'}/>
        </div>
      </section>
    </>
  );
}

export default App;
