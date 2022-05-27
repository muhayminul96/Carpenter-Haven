import React from "react";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
import Contracts from "./Contracts";
import Products from "./Products";
import Reviews from "./Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Products></Products>
      <BusinessSummary></BusinessSummary>
      <Reviews></Reviews>
      <Contracts></Contracts>
    </div>
  );
};

export default Home;
