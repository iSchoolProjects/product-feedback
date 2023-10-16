import React from "react";

export default function Buttons({ filters, pills, handleClick, label }) {
  return (
    <div className="buttons">
      {pills.map((pill) => (
        <>
          <label
            active={(
              filters.includes(pill) ||
              (pill === "All" && filters.length === 0)
            ).toString()}
            htmlFor={pill}
            onClick={() => handleClick(pill)}
          >
            {pill}{" "}
          </label>
          <input type="checkbox" label={label} name="maja" id={pill} />
        </>
      ))}
    </div>
  );
}
