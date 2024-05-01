import React from "react";
import styled from "styled-components";

const Page404 = () => {
  return (
    <Page404Styled>
      Page You are Looking Missing
    </Page404Styled>
  );
};

export default Page404;

//styled components
const Page404Styled = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 3rem;
  color: #f0f0f0;
`;
