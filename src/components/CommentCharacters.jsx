import React, { useState } from "react";
const max = 255;
export default function NewComment({ postComment }) {
  const [chars, setChars] = useState("");

  const updatedChars = ({ target: { value } }) => {
    setChars(value);
  };

  const handleClick = () => {
    postComment(chars);
    setChars("");
  };

  return (
    <>
      <h3>Add Comment</h3>
      <textarea
        maxLength={255}
        rows="4"
        onChange={updatedChars}
        placeholder="Type your comment here"
        value={chars}
      ></textarea>
      <div className="comment-count">
        <p>{max - chars.length} characters left</p>
        <button onClick={handleClick}>Post comment</button>
      </div>
    </>
  );
}
