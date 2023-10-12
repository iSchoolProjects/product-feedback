import React from "react";
import SuggestionDetails from "./components/SuggestionDetails";
import { Route, Routes } from "react-router";
import Home from "./components/Home";
import { Consumer } from "./App";

export function App() {
  const [feedbacks, setFeedbacks] = useState({ productRequests: [] });
  const [isLoading, setIsLoading] = useState(false);
  const getData = async () => {
    setIsLoading(true);
    const results = await getFeedbacks();
    setFeedbacks(results);
    setIsLoading(false);
  };
  const updateSugestion = async (sugestion) => {
    const update = feedbacks.productRequests.map((product) => {
      if (product.id === sugestion.id) return sugestion;
      return product;
    });
    setFeedbacks((prev) => ({ ...prev, productRequests: update }));
  };
  return (
    <Consumer.Provider
      value={{
        updateSugestion,
        isLoading,
        getData,
        feedbacks,
      }}
    >
      <Routes>
        <Route path="/" index Component={Home} />
        <Route path="/feedback/:id" Component={SuggestionDetails} />
        <Route path="/new-feedback" Component={() => <h1>NewFeedback</h1>} />
        <Route
          path="/edit-feedback/:id"
          Component={() => <h1>EditFeedback</h1>}
        />
        <Route path="/roadmap" Component={() => <h1>Roadmap</h1>} />
      </Routes>
    </Consumer.Provider>
  );
}
