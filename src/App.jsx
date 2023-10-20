import React, { createContext, useState } from 'react';
import SuggestionDetails from './components/SuggestionDetails';
import Home from './components/Home';
import { getFeedbacks } from './api/api';
import EditFeedback from './components/EditFeedback';
import NewFeedback from './components/NewFeedback';
import Roadmap from './components/Roadmap';
import { Route, Routes, useNavigate } from 'react-router';
import ErrorMessage from './components/ErrorMessage';

export const Consumer = createContext();
function App() {
  const [baseFeedbacks, setBaseFeedbacks] = useState({ productRequests: [] });
  const [feedbacks, setFeedback] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const getData = async () => {
    setIsLoading(true);
    const results = await getFeedbacks();
    setBaseFeedbacks(results);
    setFeedback(results.productRequests);
    setIsLoading(false);
  };
  const updateSugestion = (sugestion) => {
    const update = baseFeedbacks.productRequests.map((product) => {
      if (product.id === sugestion.id) return sugestion;
      return product;
    });
    setBaseFeedbacks((prev) => ({ ...prev, productRequests: update }));
    setFeedback(update);
  };

  const filterSuggestion = (filters) => {
    if (!filters.length) return setFeedback(baseFeedbacks.productRequests);
    const filter = baseFeedbacks.productRequests.filter((product) => {
      return filters.includes(product.category);
    });
    console.log(filters);
    setFeedback(filter);
  };

  const sortFeedbacks = (suggestions, order) => {
    if (order === 'Least Upvotes')
      return suggestions.sort((a, b) => a.upvotes - b.upvotes);

    if (order === 'Most Upvotes')
      return suggestions.sort((a, b) => b.upvotes - a.upvotes);

    if (order === 'Least Comments')
      return suggestions.sort((a, b) => a.comments.length - b.comments.length);

    return suggestions.sort((a, b) => b.comments.length - a.comments.length);
  };
  const [order, setOrder] = useState('Most Upvotes');
  return (
    <Consumer.Provider
      value={{
        updateSugestion,
        isLoading,
        getData,
        feedbacks,
        order,
        setOrder,
        filterSuggestion,
      }}
    >
      <Routes>
        <Route path="/" index Component={Home} />
        <Route path="/feedback/:id" Component={SuggestionDetails} />
        <Route path="/new-feedback" Component={NewFeedback} />
        <Route path="/edit-feedback/:id" Component={EditFeedback} />
        <Route path="/roadmap" Component={Roadmap} />
        <Route path="/error" Component={ErrorMessage} />
      </Routes>
    </Consumer.Provider>
  );
}

export default App;
