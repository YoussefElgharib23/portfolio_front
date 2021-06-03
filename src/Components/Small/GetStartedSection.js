import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Sep from "./Separator";

export default function GetStartedSection() {
  const information = [
    {
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-activity"
        >
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
        </svg>
      ),
      brief: "Work smarter, not harder",
      description:
        "Learn more about how our product can save you time and effort in the long run!",
      className: "_blue",
    },
    {
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-code"
        >
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      ),
      brief: "Built for developers",
      description:
        "Our components, utilities, and layouts are built with developers in mind.",
      className: "_secondary",
    },
  ];
  return (
    <section className={"_info_card_container"}>
      <Container>
        <Informations items={information} />
        <div className="mt-4">
          <Row className={"align-items-center justify-content-center"}>
            <Col lg={6}>
              <h5 className={"fontWeight-bolder"}>Ready to get started?</h5>
              <p className={"_paragraph_explain"}>
                Get in touch or create an account.
              </p>
            </Col>
            <Col
              lg={6}
              className={"d-flex justify-content-end align-items-start"}
            >
              <Button link={"#"} text={"Contact Sales"} className={"_blue"} />
              <Button
                link={"#"}
                text={"Create an account"}
                className={"_light ml-3 "}
              />
            </Col>
          </Row>
        </div>
      </Container>
      <Sep />
    </section>
  );
}

const Button = ({ link, text, className }) => {
  return (
    <a href={link} className={className + " _btn rounded-lg shadow-sm px-3"}>
      {text}
    </a>
  );
};

const Informations = ({ items }) => {
  return (
    <React.Fragment>
      <Row>
        {items.map((item, index) => (
          <Information key={index} {...item} />
        ))}
      </Row>
    </React.Fragment>
  );
};

const Information = ({ className, svg, brief, description }) => {
  return (
    <Col lg={6}>
      <div
        className={
          "information-card py-4 px-3 d-flex align-items-center rounded-lg shadow-sm mb-3 mb-lg-0"
        }
      >
        <div
          className={className + " svg_container rounded-circle mr-4"}
          style={{ color: "white" }}
        >
          {svg}
        </div>
        <div>
          <h6 className={"fontWeight-bolder " + className}>{brief}</h6>
          <p>{description}</p>
        </div>
      </div>
    </Col>
  );
};
