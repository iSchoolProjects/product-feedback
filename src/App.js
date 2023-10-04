import React from "react";
import { Route, Routes } from "react-router";

function App() {
  return (
    <Routes>
      <Route path="/" index Component={() => <h1>Homepage</h1>} />
      <Route path="/feedback/:id" Component={() => <h1>FeedbackDetails</h1>} />
      <Route path="/new-feedback" Component={() => <h1>NewFeedback</h1>} />
      <Route
        path="/edit-feedback/:id"
        Component={() => <h1>EditFeedback</h1>}
      />
      <Route path="/roadmap" Component={() => <h1>Roadmap</h1>} />
    </Routes>
  );
}

export default App;

//useRoutes ?
