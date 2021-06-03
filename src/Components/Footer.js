import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./../assets/css/footer.css";
import Separator from "./Small/Separator";

export default function Footer() {
  return (
    <footer>
      <Container>
        <FooterBrand />
      </Container>
    </footer>
  );
}

const FooterBrand = () => {
  const iconsLinks = [
    {
      icon: <i className="fab fa-instagram fa-lg"></i>,
      link: "#",
    },
    {
      icon: <i className="fab fa-facebook-f fa-lg"></i>,
      link: "#",
    },
    {
      icon: <i className="fab fa-github fa-lg"></i>,
      link: "#",
    },
    {
      icon: <i className="fab fa-twitter fa-lg"></i>,
      link: "#",
    },
  ];

  const navItems = [
    {
      title: "product",
      links: [
        {
          link: "#",
          text: "Landing",
        },
        {
          link: "#",
          text: "Pages",
        },
        {
          link: "#",
          text: "Sections",
        },
        {
          link: "#",
          text: "Documentation",
        },
        {
          link: "#",
          text: "Changelog",
        },
      ],
    },
    {
      title: "Technical",
      links: [
        {
          link: "#",
          text: "Documentation",
        },
        {
          link: "#",
          text: "Changelog",
        },
        {
          link: "#",
          text: "Theme Customizer",
        },
        {
          link: "#",
          text: "UI Kit",
        },
      ],
    },
    {
      title: "Includes",
      links: [
        {
          link: "#",
          text: "Utilities",
        },
        {
          link: "#",
          text: "Components",
        },
        {
          link: "#",
          text: "Layouts",
        },
        {
          link: "#",
          text: "Code Samples",
        },
        {
          link: "#",
          text: "Products",
        },
        {
          link: "#",
          text: "Affiliates",
        },
        {
          link: "#",
          text: "Updates",
        },
      ],
    },
    {
      title: "Legal",
      links: [
        {
          link: "#",
          text: "Privacy Policy",
        },
        {
          link: "#",
          text: "Terms and Conditions",
        },
        {
          link: "#",
          text: "License",
        },
      ],
    },
  ];

  return (
    <div>
      <Container>
        <Row>
          <Col lg={3}>
            <h5 className="font-wieght-bolder">SB UI Kit Pro</h5>
            <p>Design made easy</p>
            <FooterBrandIcons items={iconsLinks} />
          </Col>
          <Col className={"mt-4 mt-lg-0"}>
            <FooterNavItems items={navItems} />
          </Col>
        </Row>
      </Container>
      <Separator />
      <Container>
        <CopyRight />
      </Container>
    </div>
  );
};

const CopyRight = () => {
  return (
    <div
      className={
        "d-flex justify-content-center justify-content-sm-between flex-column flex-sm-row text-center"
      }
    >
      <small>Copyright © Your Website 2021</small>
      <small>Privacy Policy · Terms & Conditions</small>
    </div>
  );
};

const FooterBrandIcons = ({ items }) => {
  return (
    <div className={"d-flex w-100 mt-2"}>
      {items.map((item, index) => (
        <SingleIcon key={index} {...item} />
      ))}
    </div>
  );
};

const SingleIcon = ({ icon, link }) => {
  return (
    <a href={link} className={"mr-2"}>
      {icon}
    </a>
  );
};

const FooterNavItems = ({ items }) => {
  return (
    <Row>
      {items.map((item, index) => (
        <FooterNavItem key={index} {...item} />
      ))}
    </Row>
  );
};

const FooterNavItem = ({ title, links }) => {
  return (
    <Col md={3} sm={6} className={"mb-3 mb-lg-0"}>
      <h6>{title.toUpperCase()}</h6>
      <ul>
        {links.map(({ text, link }, index) => (
          <li key={index}>
            <a href={link}>{text}</a>
          </li>
        ))}
      </ul>
    </Col>
  );
};
