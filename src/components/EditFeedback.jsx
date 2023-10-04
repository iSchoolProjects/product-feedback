import React from "react";

export default function EditFeedback() {
  return (
    <>
      <div className="page-feedback">
        <div className="card-feedback">
          <div className="back-feedback">
            <img src="./assets/shared/icon-arrow-left.svg" alt="" />
            <button>Go Back</button>
          </div>
          <div className="img-feedback">
            <img src="./assets/shared/icon-edit-feedback.svg" alt="" />
          </div>
          <h2>Editing `Add a dark theme option`</h2>
          <div className="form">
            <h5>Feedback Title</h5>
            <p>Add a short, descriptive headline</p>
            <input
              placeholder="Please add a dark theme option"
              type="text"
              id="name"
              name="name"
            />
          </div>
          <div className="form">
            <h5>Category</h5>
            <p>Choose a category for your feedback</p>
            <select name="Feature" id="Feature">
              <option value="Feature">Feature</option>
              <option value="UL">UL</option>
              <option value="UX">UX</option>
              <option value="Enhancement">Enhancement</option>
              <option value="Bug">Bug</option>
            </select>
          </div>
          <div className="form">
            <h5>Update Status</h5>
            <p>Change feedback state</p>
            <select name="Planned" id=" Planned">
              <option value="Planned">Planned</option>
              <option value="Suggestion">Suggestion</option>
              <option value="In-Progress">In-Progress</option>
              <option value="Live">Live</option>
            </select>
          </div>
          <div className="form">
            <h5>Feedback Detail</h5>
            <p>
              Include any specific comments on what should be
              improved,added,etc.
            </p>
            <input type="text" id="name" name="name" className="detail-input" />
          </div>
          <div className="feedback-btn">
            <button className="delete-btn">Delete</button>

            <button className="cancel-btn">Cancel</button>

            <button className="add-btn">Add Feedback</button>
          </div>
        </div>
      </div>
    </>
  );
}
