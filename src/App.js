import React from "react";
import { Container } from "react-bootstrap";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main";
import "./assets/css/app.css";

export default function App() {
  return (
    <React.Fragment>
      <Header />
      <Container>
        <Main />
        <Footer />
      </Container>
    </React.Fragment>
  );
}
