import Suggestion from './Suggestion';
import React from 'react';

export default function SuggestionsList({ list }) {
  return (
    <>
      {list.map((item) => (
        <Suggestion cardDetails={item} />
      ))}
    </>
  );
}
