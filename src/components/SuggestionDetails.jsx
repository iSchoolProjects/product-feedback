import React, { useState } from 'react';
import { data } from '../data';
import NewComment from './CommentCharacters';
import CommentsHolder from './CommentsHolder';

export default function SuggestionDetails({
  detail = data.productRequests[1],
}) {
  const [isReplyOpen, setIsReplyOpen] = useState();

  const handleClick = (currentReply) => {
    setIsReplyOpen(currentReply);
  };
  return (
    <>
      <div className="details-section">
        <div className="navigation-feedback">
          <div className="navigation">
            <img src="../assets/shared/icon-arrow-left.svg" alt="" />
            <a href="#">Go Back</a>
          </div>
          <button>Edit Feedback</button>
        </div>
        <div className="suggestion">
          <div className="left-side">
            <div className="click-num">
              <img src="../assets/shared/icon-arrow-up.svg" alt="" />
              <h5> {detail.upvotes}</h5>
            </div>
            <div className="text">
              <h3>{detail.title}</h3>
              <p>{detail.description}</p>
              <button>{detail.category}</button>
            </div>
          </div>
          <div className="right-side">
            <img src="../assets/shared/icon-comments.svg" alt="" />
            <h4>{detail.comments?.length}</h4>
          </div>
        </div>
        <div className="comments-holder">
          <h3>{detail.comments?.length} Comments</h3>
          {detail.comments.map((comment) => (
            <CommentsHolder
              comment={comment}
              handleClick={handleClick}
              isReplyOpen={isReplyOpen}
            />
          ))}
        </div>
        <div className="add-comment-holder">
          <NewComment></NewComment>
        </div>
      </div>
    </>
  );
}
