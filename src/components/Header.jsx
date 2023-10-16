import React from "react";
import { Link } from "react-router-dom";

const options = [
  {
    label: "Most Upvotes",
    value: "Most Upvotes",
  },

  {
    label: "Least Upvotes",
    value: "Least Upvotes",
  },

  {
    label: "Most Comments",
    value: "Most Comments",
  },

  {
    label: "Least Comments",
    value: "Least Comments",
  },
];

export default function Header() {
  const handleChange = (e) => {};

  return (
    <>
      <header>
        <div className="suggestion-left">
          <div className="suggestion-number">
            <img src="/assets/suggestions/icon-suggestions.svg" alt="" />
            <h6>0</h6>
            <h5>Suggestions</h5>
          </div>

          <div className="sort">
            <label for="upvotes">Sort by:</label>
            <select onChange={handleChange} name="upvotes" id="upvotes">
              {options.map((option) => (
                <option value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
        </div>

        <Link to="/new-feedback">
          <img src="/assets/shared/icon-plus.svg" alt="" />
          Add Feddback
        </Link>
      </header>
    </>
  );
}
