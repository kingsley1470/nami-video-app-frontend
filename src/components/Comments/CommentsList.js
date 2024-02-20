// CommentsList.js
import React from 'react';
import Comments from './Comments';

function CommentsList({ comments }) {
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Comments</h2>
      {comments.map((comment) => (
        <Comment
          key={comment._id}
          author={comment.author}
          content={comment.content}
          createdAt={comment.createdAt}
        />
      ))}
    </div>
  );
}

export default CommentsList;
