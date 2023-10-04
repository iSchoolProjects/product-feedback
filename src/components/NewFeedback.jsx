import React, { useState } from "react";

export default function NewFeedback() {
  const [state, setState] = useState({
    title: "",
    detail: "",
    error: false,
  });

  const handleChange = (e) => {
    setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = () => {};

  const handleSubmit = () => {
    if (!state.title.length || !state.detail.length) {
      setState((prev) => ({ ...prev, error: true }));
    } else {
      setState((prev) => ({ ...prev, error: false }));
    }
  };

  return (
    <>
      <div className="page-feedback">
        <div className="card-feedback">
          <div className="back-feedback">
            <img src="./assets/shared/icon-arrow-left.svg" alt="" />
            <button>Go Back</button>
          </div>
          <div className="img-feedback">
            <img src="./assets/shared/icon-new-feedback.svg" alt="" />
          </div>
          <h2>Create New Feedback</h2>
          <div className="form">
            <h5>Feedback Title</h5>
            <p>Add a short, descriptive headline</p>
            <input onChange={handleChange} type="text" id="name" name="title" />
          </div>
          <div className="form">
            <h5>Category</h5>
            <p>Choose a category for your feedback</p>
            <select onClick={handleClick} name="Feature" id="Feature">
              <option value="Feature">Feature</option>
              <option value="UL">UL</option>
              <option value="UX">UX</option>
              <option value="Enhancement">Enhancement</option>
              <option value="Bug">Bug</option>
            </select>
          </div>
          <div className="form">
            <h5>Feedback Detail</h5>
            <p>
              Include any specific comments on what should be
              improved,added,etc.
            </p>
            <input
              onChange={handleChange}
              type="text"
              id="name"
              name="detail"
              className="detail-input"
            />
            {state.error && <h4>Can't be empty</h4>}
          </div>
          <div className="feedback-btn">
            <button className="cancel-btn">Cancel</button>
            <button onClick={handleSubmit} className="add-btn">
              Add Feedback
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
