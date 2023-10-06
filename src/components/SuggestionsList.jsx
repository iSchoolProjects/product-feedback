import { data } from './data';
import Suggestion from './Suggestion';
import React from 'react';

export default function SuggestionsList({ list = data.productRequests }) {
  return (
    <>
      {list.map((item) => (
        <Suggestion cardDetails={item} />
      ))}
    </>
  );
}
