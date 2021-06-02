import React from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main";
import "./assets/css/app.css";

export default function App() {
  return (
    <React.Fragment>
      <Header />
      <Main />
      <Footer />
    </React.Fragment>
  );
}
