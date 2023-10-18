import React, { createContext, useState } from "react";
import SuggestionDetails from "./components/SuggestionDetails";
import { Route, Routes, useNavigate } from "react-router";
import Home from "./components/Home";
import { getFeedbacks } from "./api/api";
import EditFeedback from "./components/EditFeedback";
import NewFeedback from "./components/NewFeedback";
import "./App.css";
import ErrorMessage from "./components/ErrorMessage";

// function App() {
//   return <SuggestionDetails detail={data.productRequests[0]} />;
// }

export const Consumer = createContext();
function App() {
  const [feedbacks, setFeedbacks] = useState({ productRequests: [] });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const getData = async () => {
    setIsLoading(true);
    const results = await getFeedbacks(() => navigate("/error"));
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
        <Route path="/new-feedback" Component={NewFeedback} />
        <Route path="/edit-feedback/:id" Component={EditFeedback} />
        <Route path="/roadmap" Component={() => <h1>Roadmap</h1>} />
        <Route path="/error" Component={ErrorMessage} />
      </Routes>
    </Consumer.Provider>
  );
}

export default App;
