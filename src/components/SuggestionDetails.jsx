import React from 'react';

export default function SuggestionDetails({ detail }) {
  return (
    <>
      <div className="details-section">
        <div className="navigation-feedback">
          <div className="navigation">
            <img src="./assets/shared/icon-arrow-left.svg" alt="" />
            <a href="#">Go Back</a>
          </div>
          <button>Edit Feedback</button>
        </div>
        <div className="suggestion">
          <div className="left-side">
            <div className="click-num">
              <img src="./assets/shared/icon-arrow-up.svg" alt="" />
              <h5> {detail.upvotes}</h5>
            </div>
            <div className="text">
              <h3>{detail.title}</h3>
              <p>{detail.description}</p>
              <button>{detail.category}</button>
            </div>
          </div>
          <div className="right-side">
            <img src="./assets/shared/icon-comments.svg" alt="" />
            <h4>{detail.comments?.length}</h4>
          </div>
        </div>
        <div className="comments">
          <h3>Comments</h3>
        </div>
      </div>
    </>
  );
}
