import React from "react";
import { Container } from "react-bootstrap";

const NavItem = ({ link, text }) => {
  return (
    <li className="nav-item">
      <a className="nav-link" href={link}>
        {text}
      </a>
    </li>
  );
};

const NavItems = ({ items }) => {
  return (
    <ul className="navbar-nav ml-auto">
      {items.map((item, index) => (
        <NavItem key={index} {...item} />
      ))}
    </ul>
  );
};

const Toggler = () => {
  return (
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
  );
};

const NavBrand = ({ link, text }) => {
  return (
    <a className="navbar-brand font-weight-bold" href={link}>
      {text}
    </a>
  );
};

export default function Navbar({ textBrand, linkBrand, className }) {
  const items = [
    {
      text: "Home",
      link: "#",
    },
  ];

  return (
    <nav className={className}>
      <Container>
        <NavBrand link={linkBrand} text={textBrand} />
        <Toggler />
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <NavItems items={items} />
        </div>
      </Container>
    </nav>
  );
}
