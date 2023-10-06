import React from 'react';
import Sidebar from './Sidebar';
import { data } from './data';
import SuggestionsList from './SuggestionsList';

export default function Home() {
  return (
    <>
      <Sidebar products={data.productRequests}></Sidebar>
      <div style={{ width: '50%' }}>
        <SuggestionsList></SuggestionsList>
      </div>
    </>
  );
}
