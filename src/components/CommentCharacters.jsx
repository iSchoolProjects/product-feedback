import React, { useState } from 'react';

const max = 255;
export default function NewComment(e) {
  const [chars, setChars] = useState('');
  const updatedChars = ({ target: { value } }) => {
    setChars(value);
  };

  return (
    <>
      <h3>Add Comment</h3>
      <textarea
        maxLength={255}
        rows="4"
        onChange={updatedChars}
        placeholder="Type your comment here"
      ></textarea>
      <div className="comment-count">
        <p>{max - chars.length} characters left</p>
        <button>Post comment</button>
      </div>
    </>
  );
}
