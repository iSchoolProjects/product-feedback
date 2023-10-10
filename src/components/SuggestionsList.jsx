import Suggestion from "./Suggestion";
import React from "react";

export default function SuggestionsList({ list, updateSugestion }) {
  return (
    <>
      {list.map((item) => (
        <Suggestion cardDetails={item} updateSugestion={updateSugestion} />
      ))}
    </>
  );
}
