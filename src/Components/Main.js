import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../assets/css/main.css";
import Svg from "./Globals/Svg";

export default function Main() {
  const items = [
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
          className="feather feather-layers"
        >
          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
          <polyline points="2 17 12 22 22 17"></polyline>
          <polyline points="2 12 12 17 22 12"></polyline>
        </svg>
      ),
      title: "Built for developers",
      description:
        "Our customizable, block-based build system makes creating your next project fast and easy!",
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
          className="feather feather-smartphone"
        >
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
          <line x1="12" y1="18" x2="12.01" y2="18"></line>
        </svg>
      ),
      title: "Modern responsive design",
      description:
        "Featuring carefully crafted, mobile-first components, your end product will function beautifully on any device!",
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
      title: "Complete documentation",
      description:
        "All of the layouts, page sections, components, and utilities are fully covered in this products docs.",
    },
  ];

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
    <main className="main">
      <section>
        <Container>
          <Row>
            {items.map(({ title, description, svg }, index) => (
              <CardItem
                key={index}
                title={title}
                description={description}
                svg={svg}
              />
            ))}
          </Row>
        </Container>
        <Svg color={"#f2f6fc"} className={"_abs"} />
      </section>
      <section>
        <Container>
          <Row className="align-items-center">
            <Col
              lg={6}
              className="content-skewed content-skewed-right mt-4 mt-md-0 p-4"
            >
              <img
                src="/images/png/landing-portfolio.png"
                className="content-skewed-item img-fluid shadow-lg rounded-lg"
                alt=""
              />
            </Col>
            <Col lg={6}>
              <div className="mt-5 mt-md-0">
                <h5 className="font-weight-bold">Here's What You Get</h5>
                <p className="_paragraph_explain">
                  When you purchase this UI Kit, you get access to a robust
                  suite of powerful tools and components to help you build your
                  next landing page quickly and easily
                </p>
              </div>
              <Items items={littleCards} />
            </Col>
          </Row>
        </Container>
        <Svg color={"white"} className={"_abs"} />
      </section>
    </main>
  );
}

const CardItem = ({ title, description, svg }) => {
  return (
    <Col lg={4} className="card_container mb-3 mb-md-0">
      <div className="svg_container rounded-circle">{svg}</div>
      <h5>{title}</h5>
      <p>{description}</p>
    </Col>
  );
};

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
