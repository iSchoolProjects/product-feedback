import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router";
import NewComment from "./CommentCharacters";
import CommentsHolder from "./CommentsHolder";
import { createReply, getFeedback, upvoteFeedback } from "../api/api";
import { Consumer } from "../App";
import { createComment } from "../api/api";
import { NavLink } from "react-router-dom";
export default function SuggestionDetails() {
  const { updateSugestion } = useContext(Consumer);
  const [detail, setDetail] = useState({});

  const navigate = useNavigate();
  const { id } = useParams();
  const [isReplyOpen, setIsReplyOpen] = useState();

  const postComment = async (comment) => {
    if (id) {
      const newComment = await createComment(id, comment);
      setDetail(newComment);
    }
  };
  const postReply = async (parent, comment) => {
    if (id) {
      const reply = await createReply(id, parent, comment);
      setDetail(reply);
    }
  };

  const handleClick = (currentReply) => {
    setIsReplyOpen(currentReply);
  };
  const getData = async () => {
    const result = await getFeedback(id);
    setDetail(result);
  };
  useEffect(() => {
    getData();
    // const detail = data.productRequests.find((item) => item.id === +id);
    // if (!detail && id) navigate("/");
    setDetail(detail ?? {});
  }, [id]);

  const handleUpvote = async (e) => {
    e.stopPropagation();
    const data = await upvoteFeedback(id);
    setDetail(data);
    updateSugestion(data);
  };
  const handleBack = (e) => {
    e.preventDefault();
    navigate(-1);
  };
  return (
    <>
      <div className="details-section">
        <div className="navigation-feedback">
          <div className="navigation">
            <img src="../assets/shared/icon-arrow-left.svg" alt="" />
            <a onClick={handleBack}>Go Back</a>
          </div>
          <button>
            <NavLink to={`/edit-feedback/${id}`}>Edit Feedback</NavLink>
          </button>
        </div>
        <div className="suggestion">
          <div className="left-side" onClick={handleUpvote}>
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
              postReply={postReply}
            />
          ))}
        </div>
        <div className="add-comment-holder">
          <NewComment id={id} postComment={postComment} />
        </div>
      </div>
    </>
  );
}
