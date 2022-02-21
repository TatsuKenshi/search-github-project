import React from "react";
// import loadinggif from "../pics/loadinggif.gif";
// import { GithubContext } from "../context/context";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import Stats from "../components/Stats";
import User from "../components/User";
import ChartSection from "../components/ChartSection";

// contains the navbar, search, stats, user info section, chart section

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Search />
      <Stats />
      <User />
      <ChartSection />
    </div>
  );
};

export default Homepage;
