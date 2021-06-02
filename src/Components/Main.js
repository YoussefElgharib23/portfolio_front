import React from "react";
import "../assets/css/main.css";
import SecondSection from "./Small/SecondSection";
import TopSection from "./Small/TopSection";

export default function Main() {
  return (
    <main className="main">
      <TopSection />
      <SecondSection />
    </main>
  );
}
