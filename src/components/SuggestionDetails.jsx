import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import { data } from './data';
import NewComment from './CommentCharacters';
import CommentsHolder from './CommentsHolder';

export default function SuggestionDetails() {
  const [detail, setDetail] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();
  const [isReplyOpen, setIsReplyOpen] = useState();

  const handleClick = (currentReply) => {
    setIsReplyOpen(currentReply);
  };

  useEffect(() => {
    const detail = data.productRequests.find((item) => item.id === +id);
    if (!detail && id) navigate('/');
    setDetail(detail ?? {});
  }, [id]);
  console.log(id);
  return (
    <>
      <div className="details-section">
        <div className="navigation-feedback">
          <div className="navigation">
            <img src="../assets/shared/icon-arrow-left.svg" alt="" />
            <a onClick={() => navigate('/')} href="#">
              Go Back
            </a>
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
          {detail.comments?.map((comment) => (
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
