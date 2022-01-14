import React from "react";

import { Link } from "react-router-dom";

import "./index.scss";

import telegram_img from "assets/icons/telegram_gray.svg";
import twiter_img from "assets/icons/twitter_gray.svg";
import medium_img from "assets/icons/medium_gray.svg";
import logo_img from "assets/images/logo.png";

const Footer = (props) => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row footer_items">
          <div className="col-md-4 col-6 footer_items__item">
            <div className="row">
              <div className="col-md-8 offset-md-1 col">
                <img src={logo_img} alt="logo" />
                <div className="mt-4">
                  Sandwich Network is the definite hub to start your
                  decentralized cryptocurrency journey. Join us!
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-6 footer_items__item">
            <div className="footer_items__item__title">Products</div>
            <Link to="#">SandwichBeta</Link>
            <Link to="#">SandwichSAFU</Link>
            <Link to="#">SandwichTools</Link>
            <Link to="#">SandwichSwap</Link>
          </div>
          <div className="col-md-3 col-6 footer_items__item">
            <div className="footer_items__item__title">Support</div>
            <Link to="#">Tutorials</Link>
            <Link to="#">Documentation</Link>
            <Link to="#">Customer support</Link>
          </div>
          <div className="col-md-2 col-6 footer_items__item">
            <div className="footer_items__item__title">Social</div>
            <Link to="#"><img src={telegram_img} alt="" /> Telegram</Link>
            <Link to="#"><img src={twiter_img} alt="" /> Twitter</Link>
            <Link to="#"><img src={medium_img} alt="" /> Medium</Link>
          </div>
        </div>
        <div className="copyright">
          <span>Copyright © 2021 Sandwich Network. All rights reserved.</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
