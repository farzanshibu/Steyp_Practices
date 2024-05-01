import React from "react";
import styled from "styled-components";

const CommingSoon = () => {
  return (
    <CommingSoonStyled>Feature will be Implemented Soon</CommingSoonStyled>
  );
};

export default CommingSoon;

//styled components

const CommingSoonStyled = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 3rem;
  color: #f0f0f0;
`;
