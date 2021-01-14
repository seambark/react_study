import { useEffect, useState } from 'react';
import './app.css';
import VideoList from './components/video_list/video_list';
import Header from './components/header';

function App(){
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDsDCGUfD7P5_-qCwcYyABwvSjNLJKF22w", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  },[]);
  return (
    <>
      <Header />
      <VideoList videos={videos} />
    </>
  );
}

export default App;
