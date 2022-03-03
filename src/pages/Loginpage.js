import React from "react";
// import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import loginPic from "../pics/login-pic.svg";

const Loginpage = () => {
  return (
    <StyledLoginpage>
      <div>
        <img src={loginPic} alt="login image" />
        <h1>Github Search</h1>
        <button>Login</button>
      </div>
    </StyledLoginpage>
  );
};

const StyledLoginpage = styled.section`
  height: 100vh;
  width: 100vw;
  background: rgba(0, 255, 255, 0.1);
  h1 {
    font-size: 3rem;
  }
`;

export default Loginpage;
