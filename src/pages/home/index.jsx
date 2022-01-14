import React from "react";

import './index.scss'

const TopSection = React.lazy(() => import('components/home/top-section'));
const Tools = React.lazy(() => import('components/home/tools'));
const Network = React.lazy(() => import('components/home/network'));
const Token = React.lazy(() => import('components/home/token'));
const HowToBuy = React.lazy(() => import('components/home/how-to-buy'));
const Partners = React.lazy(() => import('components/home/partners'));
const DecentralizedEcosystem = React.lazy(() => import('components/home/decentralized-ecosystem'));
const Join = React.lazy(() => import('components/home/join'));

const Home = (props) => {
  return (
    <div className="home-page">
      <TopSection/>
      <Tools/>
      <Network/>
      <Token/>
      <HowToBuy/>
      <Partners/>
      <DecentralizedEcosystem/>
      <Join/>
    </div>
  );
};

export default Home;
