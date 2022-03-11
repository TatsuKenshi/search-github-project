import React from "react";
import { UserContext } from "../context/Context";
// import styled from "styled-components";
import { MdBusiness, MdLocationOn, MdLink } from "react-icons/md";

const UserInfo = () => {
  const { staticUser } = React.useContext(UserContext);
  const {
    avatar_url,
    html_url,
    name,
    company,
    blog,
    bio,
    location,
    twitter_username,
  } = staticUser;

  return (
    <div>
      <h3>User Info</h3>
      <div>
        {/* img div */}
        <img src={avatar_url} alt={name} />
      </div>
      <div>
        <div>
          {/* info div */}
          <h4>{name}</h4>
          <p>@{twitter_username || "not_provided"}</p>
        </div>
        <div>
          {/* info div 2 */}
          <a href={html_url}>Follow</a>
          <p>{bio || "No bio available"}</p>
          <div>
            <p>
              <MdBusiness></MdBusiness> {company || "No Company"}
            </p>
            <p>
              <MdLocationOn></MdLocationOn> {location || "No Location"}
            </p>
            <a href={`https://${blog}`}>
              <MdLink></MdLink>
              {blog || "No site provided"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
