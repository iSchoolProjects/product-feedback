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

const select = [
  {
    label: "Suggestion",
    value: "Suggestion",
  },

  {
    label: "Planned",
    value: "Planned",
  },

  {
    label: "In-Progress",
    value: "In-Progress",
  },

  {
    label: "Live",
    value: "Live",
  },
];

export default function EditFeedback() {
  const [state, setState] = useState({
    title: "",
    detail: "",
    disabled: true,
  });

  const handleChange = (e) => {
    setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    if (!state.title.length || !state.detail.length) {
      setState((prev) => ({ ...prev, disabled: true }));
    } else {
      setState((prev) => ({ ...prev, disabled: false }));
    }
  }, [state.detail, state.title]);

  const handleDelete = () => {};

  const handleSubmit = () => {};

  return (
    <>
      <div className="page-feedback">
        <div className="edit-card">
          <div className="back-feedback">
            <img src="/assets/shared/icon-arrow-left.svg" alt="" />
            <Link to="/feedback/:id">Go Back</Link>
          </div>
          <div className="img-feedback">
            <img src="/assets/shared/icon-edit-feedback.svg" alt="" />
          </div>
          <h2>Editing `Add a dark theme option`</h2>
          <div className="form">
            <h5>Feedback Title</h5>
            <p>Add a short, descriptive headline</p>
            <input
              onChange={handleChange}
              placeholder="Please add a dark theme option"
              type="text"
              id="name"
              name="title"
            />
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
            <h5>Update Status</h5>
            <p>Change feedback state</p>
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
              placeholder="It would help people with light sensitivities and who prefer dark mode."
              type="text"
              id="name"
              name="detail"
              className="detail-input"
            />
          </div>
          <div className="edit-bottom">
            <button onClick={handleDelete} className="delete-btn">
              Delete
            </button>
            <div className="edit-button ">
              <button className="cancel">Cancel</button>

              <button
                onClick={handleSubmit}
                disabled={state.disabled}
                className="add-save"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
