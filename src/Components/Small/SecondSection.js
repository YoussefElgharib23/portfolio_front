import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Separator from "./Separator";

export default function SecondSection(props) {
  const littleCards = [
    [
      {
        title: "Landing Pages",
        paragraph:
          "We've crafted landing page examples for many popular business and product types.",
        text: "Learn More",
        link: "#",
      },
      {
        title: "Page Examples",
        paragraph:
          "Use our pre-built page examples to quickly create inner pages to your website.",
        text: "Learn More",
        link: "#",
      },
    ],
    [
      {
        title: "Layouts",
        paragraph:
          "Our flex box based layout options make your site beautifully responsive and adaptable to any device.",
        text: "Learn More",
        link: "#",
      },
      {
        title: "Modular Sections",
        paragraph:
          "All of the sections on each page are modular, so you can drop them into an existing page, or start with a new one!",
        text: "Learn More",
        link: "#",
      },
    ],
  ];

  return (
    <section {...props}>
      <Container>
        <Row className="align-items-center">
          <Col
            lg={6}
            className="_observe _to_right content-skewed content-skewed-right p-4"
          >
            <img
              src="/images/png/landing-portfolio.png"
              className="content-skewed-item img-fluid shadow-lg rounded-lg"
              alt=""
            />
          </Col>
          <Col
            lg={6}
            className={"_observe _to_left"}
            style={{ transitionDuration: "1.4s" }}
          >
            <div className="mt-5 mt-lg-0">
              <h5 className="font-weight-bold">Here's What You Get</h5>
              <p className="_paragraph_explain">
                When you purchase this UI Kit, you get access to a robust suite
                of powerful tools and components to help you build your next
                landing page quickly and easily
              </p>
            </div>
            <Items items={littleCards} />
          </Col>
        </Row>
      </Container>
      <Separator />
    </section>
  );
}

const Items = ({ items }) => {
  return (
    <React.Fragment>
      {items.map((item, index) => {
        return (
          <div className="d-flex mb-3" key={index}>
            {item.map((subItem, index) => (
              <Card {...subItem} key={index} />
            ))}
          </div>
        );
      })}
    </React.Fragment>
  );
};

const Card = ({ title, paragraph, link, text }) => {
  return (
    <Col md={6} className="pl-0">
      <div className={"_card"}>
        <h6 className="font-weight-bolder">{title}</h6>
        <p className="small">{paragraph}</p>
        <a href={link}>{text}</a>
      </div>
    </Col>
  );
};
