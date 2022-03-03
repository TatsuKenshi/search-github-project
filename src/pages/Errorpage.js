import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Errorpage = () => {
  return (
    <StyledErrorpage>
      {/* <div> */}
      <h1>404</h1>
      <h3>The Page Doesn't Exist</h3>
      <Link to="/">
        {/* eventually, we'll kick the user to the login page, but for now we're sending them to the homepage */}
        <button>Login</button>
      </Link>
      {/* </div> */}
    </StyledErrorpage>
  );
};

const StyledErrorpage = styled.section`
  height: 100vh;
  width: 100vw;
  background: rgba(0, 255, 255, 0.1);
  h1 {
    font-size: 5rem;
  }
`;

export default Errorpage;
