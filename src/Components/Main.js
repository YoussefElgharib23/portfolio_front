import React from "react";
import "../assets/css/main.css";
import GetStartedSection from "./Small/GetStartedSection";
import QuestionSection from "./Small/QuestionSection";
import ReviewSection from "./Small/ReviewSection";
import SecondSection from "./Small/SecondSection";
import ThirdSection from "./Small/ThirdSection";
import TopSection from "./Small/TopSection";

export default function Main() {
  return (
    <main className="main">
      <TopSection className={""} />
      <SecondSection className={""} />
      <ThirdSection className={"_pricing_section "} />
      <QuestionSection className={" _after_pricing_section"} />
      <ReviewSection />
      <GetStartedSection />
    </main>
  );
}
