import React from "react";
import { UserContext } from "../context/Context";
// import styled from "styled-components";
import { GoRepo, GoGist } from "react-icons/go";
import { FiUsers, FiUserPlus } from "react-icons/fi";

const Stats = () => {
  // get the user object from the context and individual props from the user object
  const { staticUser } = React.useContext(UserContext);
  const { public_repos, followers, public_gists, following } = staticUser;

  // items array which we'll map into the Stat section
  // id, icon, label (title), and value (prop to display)
  const items = [
    {
      id: 1,
      icon: <GoRepo></GoRepo>,
      label: "repos",
      value: public_repos,
    },
    {
      id: 2,
      icon: <FiUsers></FiUsers>,
      label: "followers",
      value: followers,
    },
    {
      id: 3,
      icon: <FiUserPlus></FiUserPlus>,
      label: "following",
      value: following,
    },
    {
      id: 4,
      icon: <GoGist></GoGist>,
      label: "gists",
      value: public_gists,
    },
  ];

  return (
    <div style={{ display: "flex" }}>
      {/* map the items array */}
      {items.map((item) => {
        // extract item properties to display
        const icon = item.icon;
        const label = item.label;
        const value = item.value;

        return (
          // single item
          <div key={item.id} className="statItem">
            <span className="color">{icon}</span>
            <div>
              <h3>{value}</h3>
              <p>{label}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Stats;
