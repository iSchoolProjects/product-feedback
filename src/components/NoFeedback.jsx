import React from 'react';
import { useNavigate } from 'react-router';

export default function NoFeedback() {
  const navigate = useNavigate();
  return (
    <>
      <div className="no-feedback-holder">
        <img src="./assets/suggestions/illustration-empty.svg" alt="" />
        <div className="text">
          <h3>There is no feedback yet.</h3>
          <p>
            Got a suggestion? Found a bug that needs to be squashed? We love
            hearing about new ideas to improve our app.
          </p>
          <button onClick={() => navigate('/new-feedback')}>
            <img src="./assets/shared/icon-plus.svg" alt="" />
            Add Feedback
          </button>
        </div>
      </div>
    </>
  );
}
