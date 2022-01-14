import React from "react";
import {
  Navbar,
  Nav,
  Button,
} from "react-bootstrap";

import './index.scss';

import logo_img from 'assets/images/logo.png'
// import telegram_img from "assets/icons/telegram.svg";
// import twiter_img from "assets/icons/twiter.svg";
// import youtube_img from "assets/icons/youtube.svg";
// import facebook_img from "assets/icons/facebook.svg";
// import linktr_img from "assets/icons/linktr.jpeg";

const Header = (props) => {
  return (
    <div className="header">
      <Navbar expand="lg" variant="dark">
        <Navbar.Brand href="#home"><img src={logo_img} alt="logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-links">
            <Nav.Link href="">SandwichBeta</Nav.Link>
            <Nav.Link href="">
              SandwichSAFU
              <div>Comming soon</div>
            </Nav.Link>
            <Nav.Link href="">
              SandwichTools
              <div>Comming soon</div>
            </Nav.Link>
            <Nav.Link href="">
              SandwichSwap
              <div>Comming soon</div>
            </Nav.Link>
          </Nav>
          <Nav className="nav-icon">
            <Button variant="primary">Connect Wallet</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
