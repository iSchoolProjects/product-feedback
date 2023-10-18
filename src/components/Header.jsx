import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Consumer } from "../App";

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
  const { feedbacks, setOrder } = useContext(Consumer);
  const handleSort = (e) => {
    setOrder(e.target.value);
  };

  return (
    <>
      <header>
        <div className="suggestion-left">
          <div className="suggestion-number">
            <img src="/assets/suggestions/icon-suggestions.svg" alt="" />
            <h6>{feedbacks?.length}</h6>
            <h5>Suggestions</h5>
          </div>

          <div className="sort">
            <label for="upvotes">Sort by:</label>
            <select onChange={handleSort} name="upvotes" id="upvotes">
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

// sortfeedbacks prima niz i prima nacin sortiranja,ta 2 treba da se porede

// [1,2,3,4].sort((a,b)=>a-b)
// [{comments:12},{comments:12}].sort((a,b)a.comments-b.comments)
