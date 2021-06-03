import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function ThirdSection(props) {
  return (
    <section {...props}>
      <Container>
        <div className="text-center mb-4">
          <h4 className="font-weight-bolder">Pricing Table</h4>
          <p> Here's an example of a pricing table.</p>
        </div>
        <PricingTemplate />
      </Container>
    </section>
  );
}

const PricingTemplate = () => {
  const items = [
    {
      type: "free",
      price: "0",
      options: [
        {
          optionName: "1 user",
          isActive: true,
        },
        {
          optionName: "Community support",
          isActive: true,
        },
        {
          optionName: "Style customizer",
          isActive: false,
        },
        {
          optionName: "Custom components",
          isActive: false,
        },
        {
          optionName: "Expanded utilities",
          isActive: false,
        },
        {
          optionName: "Third-party integration",
          isActive: false,
        },
        {
          optionName: "Layout options",
          isActive: false,
        },
      ],
    },
    {
      type: "Premium",
      price: "19",
      options: [
        {
          optionName: "Up to 15 users",
          isActive: true,
        },
        {
          optionName: "Email and live chat support",
          isActive: true,
        },
        {
          optionName: "Style customizer",
          isActive: true,
        },
        {
          optionName: "Custom components",
          isActive: true,
        },
        {
          optionName: "Expanded utilities",
          isActive: true,
        },
        {
          optionName: "Third-party integration",
          isActive: true,
        },
        {
          optionName: "Layout options",
          isActive: true,
        },
      ],
    },
    {
      type: "Enterprise",
      price: "119",
      options: [
        {
          optionName: "Up to 15 users",
          isActive: true,
        },
        {
          optionName: "Email and live chat support",
          isActive: true,
        },
        {
          optionName: "Style customizer",
          isActive: true,
        },
        {
          optionName: "Custom components",
          isActive: true,
        },
        {
          optionName: "Expanded utilities",
          isActive: true,
        },
        {
          optionName: "Third-party integration",
          isActive: true,
        },
        {
          optionName: "Layout options",
          isActive: true,
        },
      ],
    },
  ];

  return <PricingItems items={items} />;
};

const PricingItems = ({ items }) => {
  return (
    <React.Fragment>
      <Row>
        {items.map((item, index) => (
          <PricingItem key={index} {...item} />
        ))}
      </Row>
    </React.Fragment>
  );
};

const PricingItem = ({ type, price, options }) => {
  return (
    <Col lg={4} className="mb-4 mb-lg-0">
      <div className={"pricing-card shadow-lg rounded-lg p-4"}>
        <div className={" d-flex flex-column align-items-center"}>
          <span className="badge badge-pill badge-light mb-2">{type}</span>
          <div className="pricing-space">
            <sup>$</sup>
            <span className="ml-3 mx-2 font-weight-bold">{price}</span>
            <span className={"pricing-period"}>/mo</span>
          </div>
        </div>
        <OptionItems items={options} />
      </div>
    </Col>
  );
};

const OptionItems = ({ items }) => {
  return (
    <React.Fragment>
      {items.map((item, index) => (
        <OptionItem key={index} {...item} />
      ))}
    </React.Fragment>
  );
};

const OptionItem = ({ isActive, optionName }) => {
  return (
    <li className={isActive ? "pricing-option is_active" : "pricing-option"}>
      <i
        className={
          isActive
            ? "far fa-check-circle _i_success mr-2"
            : "far fa-times-circle mr-2"
        }
      ></i>
      {optionName}
    </li>
  );
};
