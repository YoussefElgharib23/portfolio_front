import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Navbar from "./Small/Navbar";
import "../assets/css/header.css";
import Svg from "./Globals/Svg";

export default function Header() {
  const [navClass, setNavClass] = useState("_no_background");

  const handleWindowScroll = () => {
    if (window.scrollY === 0) {
      setNavClass("_no_background");
    } else {
      setNavClass("_with_background");
    }
  };

  window.addEventListener("scroll", handleWindowScroll, false);

  return (
    <header>
      <Navbar
        textBrand={"Protfolio"}
        className={"navbar navbar-expand-lg navbar-dark fixed-top " + navClass}
        linkBrand={"#"}
      />
      <div className="content">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h1 className="font-weight-bold">
                Build your next project faster with SB UI Kit Pro
              </h1>
              <p>
                Welcome to SB UI Kit Pro, a toolkit for building beautiful web
                interfaces, created by the development team at Start Bootstrap
              </p>

              <div className="header__links">
                <a href="" className="btn _success _btn">
                  Get Started
                </a>
                <a href="" className="_link">
                  Learn more
                </a>
              </div>
            </Col>
            <Col md={6} className="d-none d-md-block">
              <img src="/images/svg/windows.svg" alt="" />
            </Col>
          </Row>
        </Container>
      </div>
      <Svg color={"white"} className={"_abs"} />
    </header>
  );
}
