import React from "react";
import { Container } from "reactstrap";

import "./header.css";

const navLinks = [
  {
    name: "Home",
    url: "#home",
  },
  {
    name: "About",
    url: "#about",
  },
  {
    name: "Work",
    url: "#work",
  },
  {
    name: "Services",
    url: "#services",
  },
  {
    name: "Contact",
    url: "#contact",
  },
];
const header = () => {
  return (
    <header className="header ">
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo">
            <h5>Gladson</h5>
          </div>

          <div className="nav__menu">
            <ul className="nav__list">
              {navLinks.map((item, index) => (
                <li className="nav__item" key={index}>
                  <a href={item.url}>{item.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="nav__right d-flex align-items-center gap-3">
            <button className="btn">Connect Me</button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default header;
