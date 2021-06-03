import React from "react";
import "../assets/css/main.css";
import Footer from "./Footer";
import GetStartedSection from "./Small/GetStartedSection";
import QuestionSection from "./Small/QuestionSection";
import ReviewSection from "./Small/ReviewSection";
import SecondSection from "./Small/SecondSection";
import Separator from "./Small/Separator";
import ThirdSection from "./Small/ThirdSection";
import TopSection from "./Small/TopSection";

export default function Main() {
  return (
    <main className="main">
      <TopSection />
      <SecondSection />
      <ThirdSection />
      <QuestionSection />
      <ReviewSection />
      <GetStartedSection />
    </main>
  );
}
