import React from "react";
import { UserContext } from "../context/Context";
// import styled from "styled-components";

// displays user's followers
const UserFollowers = () => {
  const { staticFollowers } = React.useContext(UserContext);

  return (
    <div>
      <h2>Followers</h2>
      {staticFollowers.map((follower, index) => {
        const { avatar_url: image, html_url, login } = follower;
        return (
          <div key={index}>
            <img src={image} alt={login} />
            <div>
              <h4>{login}</h4>
              <a href={html_url}>{html_url}</a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UserFollowers;
