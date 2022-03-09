import React, { useState, useEffect } from "react";
import StaticUser from "../data/StaticUser";
import StaticRepos from "../data/StasticRepos";
import StaticFollowers from "../data/StaticFollowers";
// import axios from "axios";

//  API root url
const mainURL = "https://api.github.com";
// context
const UserContext = React.createContext();

// provider component
const UserProvider = ({ children }) => {
  // basic states
  const [staticUser, setStaticUser] = useState(StaticUser);
  const [staticRepos, setStaticRepos] = useState(StaticRepos);
  const [staticFollowers, setStaticFollowers] = useState(StaticFollowers);

  return (
    <UserContext.Provider
      value={{
        // we pass our basic states through the context provider
        staticUser,
        staticRepos,
        staticFollowers,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
