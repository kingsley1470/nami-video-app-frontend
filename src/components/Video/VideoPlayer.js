// VideoPlayer.js
import React from 'react';

function VideoPlayer({ videoUrl }) {
  return (
    <div className="embed-responsive embed-responsive-16by9">
      <iframe className="embed-responsive-item" src={videoUrl} title="Video Player" allowFullScreen></iframe>
    </div>
  );
}

export default VideoPlayer;
