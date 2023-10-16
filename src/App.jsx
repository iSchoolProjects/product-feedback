import React, { createContext, useState } from 'react';
import SuggestionDetails from './components/SuggestionDetails';
import { Route, Routes } from 'react-router';
import Home from './components/Home';
import { getFeedbacks } from './api/api';
import EditFeedback from './components/EditFeedback';
import NewFeedback from './components/NewFeedback';
import './App.css';

// function App() {
//   return <SuggestionDetails detail={data.productRequests[0]} />;
// }

export const Consumer = createContext();
function App() {
  const [baseFeedbacks, setBaseFeedbacks] = useState({ productRequests: [] });
  const [feedbacks, setFeedback] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
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
  return (
    <Consumer.Provider
      value={{
        updateSugestion,
        isLoading,
        getData,
        feedbacks,
        filterSuggestion,
      }}
    >
      <Routes>
        <Route path="/" index Component={Home} />
        <Route path="/feedback/:id" Component={SuggestionDetails} />
        <Route path="/new-feedback" Component={NewFeedback} />
        <Route path="/edit-feedback/:id" Component={EditFeedback} />

        <Route path="/roadmap" Component={() => <h1>Roadmap</h1>} />
      </Routes>
    </Consumer.Provider>
  );
}

export default App;
