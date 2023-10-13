import React from "react";
import { Route, Routes } from "react-router";
import EditFeedback from "./components/EditFeedback";
import NewFeedback from "./components/NewFeedback";
import SuggestionsList from "./components/SuggestionsList";
import SuggestionDetails from "./components/SuggestionDetails";

import "./App.css";
import Home from "./components/Home";

// function App() {
//   return <SuggestionDetails detail={data.productRequests[0]} />;
// }

function App() {
  return (
    <Routes>
      <Route path="/new-feedback" Component={NewFeedback} />
      <Route path="/edit-feedback/:id" Component={EditFeedback} />
      <Route path="/" index Component={Home} />
      <Route path="/feedback/:id" Component={SuggestionDetails} />

      <Route path="/roadmap" Component={() => <h1>Roadmap</h1>} />
    </Routes>
  );
}

export default App;
