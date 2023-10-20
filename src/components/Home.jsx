import React, { useContext, useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import SuggestionsList from "./SuggestionsList";

import Header from "./Header";

import { getFeedbacks } from "../api/api";
import { Consumer } from "../App";

export default function Home() {
  const { getData, isLoading, feedbacks, filterSuggestion } =
    useContext(Consumer);
  //uzmi sve sugestije i nadji nasu prema idu i zamijeni novom
  useEffect(() => {
    getData();
  }, []);
  if (isLoading) return null;
  return (
    <>
      <Sidebar
        products={feedbacks}
        filterSuggestion={filterSuggestion}
      ></Sidebar>
      <div>
        <Header isHome></Header>
        <SuggestionsList></SuggestionsList>
      </div>
    </>
  );
}
