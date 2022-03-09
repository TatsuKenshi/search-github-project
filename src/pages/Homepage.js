import React from "react";
// import loadinggif from "../pics/loadinggif.gif";
// import { GithubContext } from "../context/context";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import Stats from "../components/Stats";
import UserSection from "../components/UserSection";
import ChartSection from "../components/ChartSection";

// contains the navbar, search, stats, user info section, chart section

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Search />
      <Stats />
      <UserSection />
      <ChartSection />
    </div>
  );
};

export default Homepage;
