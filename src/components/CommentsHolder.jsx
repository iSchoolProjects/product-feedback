import React, { useState } from "react";

export default function CommentsHolder({
  comment,
  handleClick,
  isReplyOpen,
  parentId,
  postReply,
}) {
  const [reply, setReply] = useState("");
  const handleClicks = () => {
    if (reply.trim().length) {
      postReply(parentId || comment.id, reply);
      setReply("");
      handleClick();
    }
  };
  const updatedReply = ({ target: { value } }) => {
    setReply(value);
  };
  const generateId = [comment.id, parentId]
    .filter((ids) => ids !== undefined)
    .join(",");
  console.log(comment.id, parentId);
  return (
    <>
      <div className="comments">
        <div className="main-comment">
          <div className="user-reply">
            <div className="user-details">
              <img src={comment?.user?.image.slice(1)} alt="" />
              <div className="username">
                <h4>{comment?.user?.name}</h4>
                <p>{comment?.user?.username}</p>
              </div>
            </div>
            <button onClick={() => handleClick(generateId)}>Reply</button>
          </div>
          <p className="content">{comment?.content}</p>
          {isReplyOpen && isReplyOpen === generateId && (
            <div className="reply-box">
              <textarea
                maxLength={255}
                rows="4"
                placeholder="Type your comment here"
                onChange={updatedReply}
                value={reply}
              ></textarea>
              <button onClick={() => handleClicks()}>Post reply</button>
            </div>
          )}
        </div>
        {comment.replies?.map((reply, i) => (
          <CommentsHolder
            comment={{ ...reply, id: i }}
            handleClick={handleClick}
            isReplyOpen={isReplyOpen}
            parentId={comment.id}
            postReply={postReply}
          />
        ))}
      </div>
    </>
  );
}
