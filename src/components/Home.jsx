import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import SuggestionsList from "./SuggestionsList";
import { getFeedbacks } from "../api/api";

export default function Home() {
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
  //uzmi sve sugestije i nadji nasu prema idu i zamijeni novom
  useEffect(() => {
    getData();
  }, []);
  if (isLoading) return null;
  return (
    <>
      <Sidebar products={feedbacks.productRequests}></Sidebar>
      <div>
        <SuggestionsList
          list={feedbacks.productRequests}
          updateSugestion={updateSugestion}
        ></SuggestionsList>
      </div>
    </>
  );
}
