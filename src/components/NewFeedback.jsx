import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const options = [
  {
    label: "Feature",
    value: "Feature",
  },

  {
    label: "UI",
    value: "UI",
  },

  {
    label: "UX",
    value: "UX",
  },

  {
    label: "Enhancement",
    value: "Enhancement",
  },

  {
    label: "Bug",
    value: "Bug",
  },
];

export default function NewFeedback() {
  const [state, setState] = useState({
    title: "",
    detail: "",
    error: false,
  });

  const handleChange = (e) => {
    setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

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
        <div className="new-card">
          <div className="back-feedback">
            <img src="./assets/shared/icon-arrow-left.svg" alt="" />
            <Link to="/">Go Back</Link>
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
            <select>
              {options.map((option) => (
                <option value={option.value}>{option.label}</option>
              ))}
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
          <div className="card-bottom">
            <Link to="/">Cancel</Link>

            <button onClick={handleSubmit} className="add-save">
              Add Feedback
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
