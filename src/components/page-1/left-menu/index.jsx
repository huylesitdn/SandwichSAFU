import React from "react";
import { ListGroup } from "react-bootstrap";
import "./index.scss";

import { ReactComponent as ApplyForLaunch } from 'assets/icons/left-menu/Apply-for-Launch.svg';
import { ReactComponent as FundedProjects } from 'assets/icons/left-menu/Funded-Projects.svg';
import { ReactComponent as SandwichBeta } from 'assets/icons/left-menu/SandwichBeta.svg';
import { ReactComponent as SandwichTools } from 'assets/icons/left-menu/SandwichTools.svg';
import { ReactComponent as SupportMore1 } from 'assets/icons/left-menu/Support-More-1.svg';
import { ReactComponent as SupportMore } from 'assets/icons/left-menu/Support-More.svg';
import { ReactComponent as UpcomingProjects } from 'assets/icons/left-menu/Upcoming-Projects.svg';

const LeftMenu = (props) => {
  return (
    <section className="left-menu-section">
      <ListGroup variant="flush">
        <ListGroup.Item action href="#UpcomingProjects" className="active">
          <UpcomingProjects /> <span>Upcoming Projects</span>
        </ListGroup.Item>
        <ListGroup.Item action href="#FundedProjects">
          <FundedProjects /> <span>Funded Projects</span>
        </ListGroup.Item>
        <ListGroup.Item action href="#ApplyForLaunch">
          <ApplyForLaunch /> <span>Apply for Launch</span>
        </ListGroup.Item>
        <ListGroup.Item action href="#SandwichBeta">
          <SandwichBeta /> <span>SandwichBeta</span>
        </ListGroup.Item>
        <ListGroup.Item action href="#SandwichTools">
          <SandwichTools /> <span>SandwichTools</span>
        </ListGroup.Item>
        <ListGroup.Item action href="#Support & More">
          <SupportMore /> <span>Support & More</span> <SupportMore1 />
        </ListGroup.Item>
      </ListGroup>
    </section>
  );
};

export default LeftMenu;
