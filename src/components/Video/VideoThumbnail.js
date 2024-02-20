// VideoThumbnail.js
import React from 'react';

function VideoThumbnail({ title, thumbnailUrl, onClick }) {
  return (
    <div className="card" style={{ width: '18rem', cursor: 'pointer' }} onClick={onClick}>
      <img src={thumbnailUrl} className="card-img-top" alt="Video Thumbnail" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
      </div>
    </div>
  );
}

export default VideoThumbnail;

