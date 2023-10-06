import React from "react";
import Sidebar from "./Sidebar";
import { data } from "./data";

export default function Home() {
  return (
    <>
      <Sidebar products={data.productRequests}></Sidebar>
    </>
  );
}
