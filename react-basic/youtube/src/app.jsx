import { useEffect, useState } from 'react';
import './app.css';
import VideoList from './components/video_list/video_list';
import Header from './components/header/header';
import VideoDescription from './components/video_description/video_description';

function App({youtube}) {
  const [videos, setVideos] = useState([]);
  const search = query => {
    youtube
    .search(query)
    .then(videos => setVideos(videos));
  };

  useEffect(() => {
    youtube
    .mostPopular()
    .then(videos => setVideos(videos));
  },[]);
  return (
    <>
      <Header onSearch={search}/>
      <div className="content">
        <VideoDescription />
        <VideoList videos={videos} />
      </div>
    </>
  );
}

export default App;
