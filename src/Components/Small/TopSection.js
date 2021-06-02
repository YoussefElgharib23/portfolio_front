import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Svg from "../Globals/Svg";

export default function TopSection() {
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

  return (
    <div>
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
    </div>
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
