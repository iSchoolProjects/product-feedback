import logo from './logo.svg';
import './App.css';
import SuggestionsList from './components/SuggestionsList';
import React from 'react';
import { data } from './data';
import SuggestionDetails from './components/SuggestionDetails';

function App() {
  return <SuggestionDetails detail={data.productRequests[0]} />;
}

export default App;
