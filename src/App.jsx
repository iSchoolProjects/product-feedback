import React, { createContext, useState } from "react";
import SuggestionDetails from "./components/SuggestionDetails";
import { Route, Routes } from "react-router";
import Home from "./components/Home";
import { getFeedbacks } from "./api/api";
import EditFeedback from "./components/EditFeedback";
import NewFeedback from "./components/NewFeedback";
import Roadmap from "./components/Roadmap";
import "./App.css";

// function App() {
//   return <SuggestionDetails detail={data.productRequests[0]} />;
// }

export const Consumer = createContext();
function App() {
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

  const sortFeedbacks = (suggestions, order) => {
    if (order === "Least Upvotes")
      return suggestions.sort((a, b) => a.upvotes - b.upvotes);

    if (order === "Most Upvotes")
      return suggestions.sort((a, b) => b.upvotes - a.upvotes);

    if (order === "Least Comments")
      return suggestions.sort((a, b) => a.comments.length - b.comments.length);

    return suggestions.sort((a, b) => b.comments.length - a.comments.length);
  };
  const [order, setOrder] = useState("Most Upvotes");
  return (
    <Consumer.Provider
      value={{
        updateSugestion,
        isLoading,
        getData,
        feedbacks,
        order,
        setOrder,
      }}
    >
      <Routes>
        <Route path="/" index Component={Home} />
        <Route path="/feedback/:id" Component={SuggestionDetails} />
        <Route path="/new-feedback" Component={NewFeedback} />
        <Route path="/edit-feedback/:id" Component={EditFeedback} />

        <Route path="/roadmap" Component={Roadmap} />
      </Routes>
    </Consumer.Provider>
  );
}

export default App;
