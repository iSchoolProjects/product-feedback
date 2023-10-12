import React from "react";
import { Route, Routes } from "react-router";
import EditFeedback from "./components/EditFeedback";
import NewFeedback from "./components/NewFeedback";

function App() {
  return (
    <Routes>
      <Route path="/" index Component={() => <h1>Homepage</h1>} />
      <Route path="/feedback/:id" Component={() => <h1>FeedbackDetails</h1>} />
      <Route path="/new-feedback" Component={NewFeedback} />
      <Route path="/edit-feedback/:id" Component={EditFeedback} />
      <Route path="/roadmap" Component={() => <h1>Roadmap</h1>} />
    </Routes>
  );
}

export default App;

//useRoutes ?
