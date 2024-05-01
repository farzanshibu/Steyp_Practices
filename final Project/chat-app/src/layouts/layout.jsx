import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import styled from "styled-components";

const Responsive = styled.div`
  height: 100vh;
  display: flex;
  flexdirection: row;

  @media (max-width: 1280px) {
    flex-direction: column-reverse;
  }
`;

const ChatLayout = () => {
  return (
    <Responsive>
      <NavBar />
      <Outlet />
    </Responsive>
  );
};

export default ChatLayout;
