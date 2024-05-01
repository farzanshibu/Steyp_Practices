import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import ProfileImage from "../assets/images/Profile (1).jpg";
import { ReactComponent as Logo } from "../assets/icons/chat (1).svg";
import { ReactComponent as Chat } from "../assets/icons/chats.svg";
import { ReactComponent as AddProfileImage } from "../assets/icons/icons.svg";
import MediaQuery from "react-responsive";
import Avatar from "./Avatar";
import { PATH_DASHBOARD } from "../routes/path";
import { Nav_Buttons } from "../data/index";

const AddProfile = () => (
  <StyledAddProfile>
    <AddProfileImage width={25} height={25} />
  </StyledAddProfile>
);

const NavBar = () => (
  <StyledNav>
    <LogoContainer>
      <LogoLink to={PATH_DASHBOARD.general.app}>
        <LogoWrapper>
          <Logo width={30} height={30} />
        </LogoWrapper>
      </LogoLink>
    </LogoContainer>
    <NavList>
      <NavItem>
        <NavButtonLink to={PATH_DASHBOARD.general.app}>
          <Chat width={50} height={50} />
        </NavButtonLink>
      </NavItem>
      <MediaQuery minWidth={771}>
        {Nav_Buttons.map((item) => (
          <NavItem key={item.index}>
            <NavButtonLink to={PATH_DASHBOARD.general.commingsoon}>
              {item.icon}
            </NavButtonLink>
          </NavItem>
        ))}
      </MediaQuery>
    </NavList>
    <BottomSection>
      <MediaQuery minWidth={771}>
        <Link to={PATH_DASHBOARD.general.commingsoon}>
          <AddProfile />
        </Link>
      </MediaQuery>
      <Link to={PATH_DASHBOARD.general.app}>
        <Avatar image={ProfileImage} />
      </Link>
    </BottomSection>
  </StyledNav>
);

export default NavBar;

const StyledAddProfile = styled.div`
  margin: auto;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #797a7c;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const StyledNav = styled.nav`
  border-right: 1px solid var(--grey);
  height: 100dvh;
  width: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1280px) {
    height: 100px;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const LogoContainer = styled.div`
  width: 100px;
  height: 100px;
`;

const LogoLink = styled(Link)`
  width: 100px;
  height: 100px;
  display: flex;
`;

const LogoWrapper = styled.h1`
  background-color: #fff;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  border: 2px solid var(--blue);
`;

const NavList = styled.ul`
  list-style: none;
  @media (max-width: 1280px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 30px;
    align-items: center;
  }
`;

const NavItem = styled.li`
  margin-bottom: 15px;

  @media (max-width: 1280px) {
    margin-bottom: 0;
  }
`;

const NavButtonLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
`;

const BottomSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 15px;
  padding-bottom: 30px;

  @media (max-width: 1280px) {
    flex-direction: row;
    gap: 10px;
    padding-bottom: 0;
    padding-right: 30px;
  }
`;
