import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import { data } from './components/data';

function App() {
  return <Sidebar products={data.productRequests} />;
}

export default App;
