import React from "react";
import { UserContext } from "../context/Context";
// import styled from "styled-components";
// import { MdBusiness, MdLocationOn, MdLink } from "react-icons/md";

// user profile - used to be Card component

const UserInfo = () => {
  const data = React.useContext(UserContext);
  return <div>UserInfo {data}</div>;
};

export default UserInfo;
