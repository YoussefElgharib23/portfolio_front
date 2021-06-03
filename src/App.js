import React from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main";
import "./assets/css/app.css";

export default function App() {
  document.addEventListener("DOMContentLoaded", function () {
    var element = document.querySelectorAll("._observe");

    if (element) {
      element.forEach((ele) => {
        var position = ele.getBoundingClientRect();
        if (position.top < window.innerHeight && position.bottom >= 0) {
          ele.classList.add("_show");
        }
      });
    }
  });

  window.addEventListener("scroll", function () {
    var element = document.querySelectorAll("._observe");

    if (element) {
      element.forEach((ele) => {
        var position = ele.getBoundingClientRect();
        if (position.top < window.innerHeight && position.bottom >= 0) {
          ele.classList.add("_show");
        }
      });
    }
  });

  return (
    <React.Fragment>
      <Header />
      <Main />
      <Footer />
    </React.Fragment>
  );
}
