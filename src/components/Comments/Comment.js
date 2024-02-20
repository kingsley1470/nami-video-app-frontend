// Comment.js
import React from 'react';

function Comment({ author, content, createdAt }) {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{author}</h5>
        <p className="card-text">{content}</p>
        <p className="card-text"><small className="text-muted">Posted on {new Date(createdAt).toLocaleString()}</small></p>
      </div>
    </div>
  );
}

export default Comment;
