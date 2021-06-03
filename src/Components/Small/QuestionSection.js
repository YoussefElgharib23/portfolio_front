import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Svg from "./../Globals/Svg";

export default function QuestionSection() {
  const questionItems = [
    {
      question: "What is SB UI Kit Pro?",
      response:
        "SB UI Kit Pro is a fully coded, responsive, Bootstrap based UI toolkit for developers.",
    },
    {
      question: "Do I get free updates?",
      response:
        "All of Start Bootstrap's premium products will come with updates for feature additions, bugfixes, and other small updates.",
    },
    {
      question: "What can I build with SB UI Kit Pro?",
      response:
        "Build anything you want to using this UI kit! It is flexible, multipurpose, and full of tools for you to use during development.",
    },
    {
      question: "What frameworks does it integrate with?",
      response:
        "Our HTML based pro products are build with framework integration in mind. The compiled code is HTML and CSS, which is able to integrate with any framework.",
    },
  ];
  return (
    <section className={"_after_pricing_section"}>
      <Svg className={"_abs _after_pricing"} top={"-24px"} color={"#212832"} />
      <Container>
        <Questions questionItems={questionItems} />
        <Row>
          <Col lg={8} className={"mx-auto"}>
            <div className="text-center my-5">
              <h4 className={"font-weight-bold"}>
                Save time with SB UI Kit Pro
              </h4>
              <p className={"_response"}>
                Start Bootstrap's premium UI Kit beautifully and intuitively
                extends the Bootstrap framework making it easy to build your
                next project!
              </p>

              <div className="pt-3">
                <a href="" className={"_btn _success rounded-lg"}>
                  Buy now
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Svg className={"_abs"} color={"#f2f6fc"} />
    </section>
  );
}

const Questions = ({ questionItems }) => {
  return (
    <React.Fragment>
      <Row>
        {questionItems.map((item, index) => (
          <Question {...item} key={index} />
        ))}
      </Row>
    </React.Fragment>
  );
};

const Question = ({ question, response }) => {
  return (
    <Col lg={6} className={"d-flex align-items-start mb-4 mb-md-0"}>
      <div className="_icon_space mr-4">
        <i class="fas fa-question-circle _i_success fa-3x"></i>
      </div>
      <div className={"_content"}>
        <h6 className="font-weight-bold">{question}</h6>
        <p className={"_response"}>{response}</p>
      </div>
    </Col>
  );
};
