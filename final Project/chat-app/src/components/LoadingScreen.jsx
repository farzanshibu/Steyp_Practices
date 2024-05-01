import React from "react";
import styled from "styled-components";

function LoadingScreen() {
  return <LoadingScreenStyled> Loading... </LoadingScreenStyled>;
}

export default LoadingScreen;

//styled components
const LoadingScreenStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 3rem;
  color: #222;
`;
