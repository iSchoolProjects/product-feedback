import React from 'react';
import { useNavigate } from 'react-router';

export default function Suggestion({ cardDetails = {} }) {
  const navigate = useNavigate();
  console.log(cardDetails);
  return (
    <>
      <section onClick={() => navigate('/feedback/' + cardDetails.id)}>
        <div className="suggestion suggestion-width">
          <div className="left-side">
            <div className="click-num">
              <img src="./assets/shared/icon-arrow-up.svg" alt="" />
              <h5> {cardDetails.upvotes}</h5>
            </div>
            <div className="text">
              <h3>{cardDetails.title}</h3>
              <p>{cardDetails.description}</p>
              <button>{cardDetails.category}</button>
            </div>
          </div>
          <div className="right-side">
            <img src="./assets/shared/icon-comments.svg" alt="" />
            <h4>{cardDetails.comments?.length}</h4>
          </div>
        </div>
      </section>
    </>
  );
}