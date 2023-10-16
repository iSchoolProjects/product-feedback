import { Consumer } from '../App';
import Suggestion from './Suggestion';
import React, { useContext } from 'react';

export default function SuggestionsList() {
  const { feedbacks } = useContext(Consumer);
  return (
    <>
      {feedbacks.map((item) => (
        <Suggestion cardDetails={item} />
      ))}
    </>
  );
}
