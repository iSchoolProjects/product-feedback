import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deleteFeedback, editFeedback, getFeedback } from "../api/api";

const options = [
  {
    label: "Feature",
    value: "feature",
  },

  {
    label: "UI",
    value: "ui",
  },

  {
    label: "UX",
    value: "ux",
  },

  {
    label: "Enhancement",
    value: "enhancement",
  },

  {
    label: "Bug",
    value: "bug",
  },
];

const select = [
  {
    label: "Suggestion",
    value: "suggestion",
  },

  {
    label: "Planned",
    value: "planned",
  },

  {
    label: "In-Progress",
    value: "in-Progress",
  },

  {
    label: "Live",
    value: "live",
  },
];

export default function EditFeedback() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [state, setState] = useState({
    title: "",
    description: "",
    category: "",
    status: "",
  });
  const handleBack = (e) => {
    e.preventDefault();
    navigate(-1);
  };
  const handleChange = (e) => {
    setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const getData = async () => {
    const result = await getFeedback(id);
    setState(result);
  };
  useEffect(() => {
    // if (!state.title.length || !state.detail.length) {
    //   setState((prev) => ({ ...prev, disabled: true }));
    // } else {
    //   setState((prev) => ({ ...prev, disabled: false }));
    // }
    getData();
  }, [id]);

  const handleDelete = async () => {
    const result = await deleteFeedback(id);
    setState(result);
    navigate("/");
  };

  const handleSubmit = async () => {
    await editFeedback(id, state);
    navigate("/feedback/" + id);
  };
  console.log(state);
  return (
    <>
      <div className="page-feedback">
        <div className="edit-card">
          <div className="back-feedback">
            <img src="/assets/shared/icon-arrow-left.svg" alt="" />
            <a onClick={handleBack}>Go Back</a>
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
              value={state.title}
            />
          </div>
          <div className="form">
            <h5>Category</h5>
            <p>Choose a category for your feedback</p>
            <select
              value={state.category}
              name="category"
              onChange={handleChange}
            >
              {options.map((option) => (
                <option value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
          <div className="form">
            <h5>Update Status</h5>
            <p>Change feedback state</p>
            <select value={state.status} name="status" onChange={handleChange}>
              {select.map((select) => (
                <option value={select.value}>{select.label}</option>
              ))}
            </select>
          </div>
          <div className="form">
            <h5>Feedback Detail</h5>
            <p>
              Include any specific comments on what should be
              improved,added,etc.
            </p>

            <textarea
              onChange={handleChange}
              placeholder="It would help people with light sensitivities and who prefer dark mode."
              type="text"
              id="name"
              name="description"
              className="detail-input"
              cols={10}
              rows={5}
              value={state.description}
            />
          </div>
          <div className="edit-bottom">
            <button onClick={handleDelete} className="delete-btn">
              Delete
            </button>
            <div className="edit-button ">
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
