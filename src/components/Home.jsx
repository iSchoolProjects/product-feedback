import React, { useContext, useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import SuggestionsList from "./SuggestionsList";
import { getFeedbacks } from "../api/api";
import { Consumer } from "../App";

export default function Home() {
  const { getData, isLoading, feedbacks } = useContext(Consumer);
  //uzmi sve sugestije i nadji nasu prema idu i zamijeni novom
  useEffect(() => {
    getData();
  }, []);
  if (isLoading) return null;
  return (
    <>
      <Sidebar products={feedbacks.productRequests}></Sidebar>
      <div>
        <SuggestionsList />
      </div>
    </>
  );
}
