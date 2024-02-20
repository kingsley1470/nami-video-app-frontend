// Home.js
import React from 'react';
import VideoThumbnail from './Video/VideoThumbnail';

const videos = [
  {
    id: 1,
    title: 'Video 1',
    thumbnailUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    title: 'Video 2',
    thumbnailUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    title: 'Video 3',
    thumbnailUrl: 'https://via.placeholder.com/150',
  },
];

function Home() {
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Featured Videos</h2>
      <div className="row">
        {videos.map((video) => (
          <div className="col-md-4" key={video.id}>
            <VideoThumbnail
              title={video.title}
              thumbnailUrl={video.thumbnailUrl}
              onClick={() => console.log(`Clicked on video ${video.id}`)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
