import React, { useState, useEffect } from "react";
import StaticUser from "../data/StaticUser";
import StaticRepos from "../data/StaticRepos";
import StaticFollowers from "../data/StaticFollowers";
// import axios from "axios";

//  API's root url
const mainURL = "https://api.github.com";
// create context
const UserContext = React.createContext();

// provider component
const UserProvider = ({ children }) => {
  // application's basic states
  const [staticUser, setStaticUser] = useState(StaticUser);
  const [staticRepos, setStaticRepos] = useState(StaticRepos);
  const [staticFollowers, setStaticFollowers] = useState(StaticFollowers);

  return (
    <UserContext.Provider
      value={{
        // we pass our basic states and setState functions through the context provider
        staticUser,
        setStaticUser,
        staticRepos,
        setStaticRepos,
        staticFollowers,
        setStaticFollowers,
      }}
    >
      {/* we'll wrap the router in UserContext.Provider, and {children} represents our application */}
      {children}
    </UserContext.Provider>
  );
};

// export the provider and cotext
export { UserProvider, UserContext };
