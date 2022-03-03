import React, { useState, useEffect } from "react";
import StaticUser from "../data/StaticUser";
import StaticRepos from "../data/StasticRepos";
import StaticFollowers from "../data/StaticFollowers";
import axios from "axios";

//  API root url
const mainURL = "https://api.github.com";
// context
const UserContext = React.createContext();

// provider component
const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={"hello"}>{children}</UserContext.Provider>
  );
};

export { UserProvider, UserContext };
