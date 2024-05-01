import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import OnlineList from "./OnlineList";
import ChatCards from "./ChatList";
import Avatar from "./Avatar";
import MediaQuery from "react-responsive";

import { ReactComponent as MoreIcon } from "../assets/icons/Option.svg";
import { ReactComponent as SearchIcon } from "../assets/icons/Music-dashboard-icons-1.svg";
import { PATH_DASHBOARD } from "../routes/path";

const HeaderContainer = styled.div`
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 22px;
  border: 1px solid var(--grey);
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileDetails = styled.div`
  margin-left: 10px;
  text-align: left;
`;

const ProfileName = styled.h3`
  font-size: 1.1rem;
  font-family: "Inter";
  font-weight: 500;
`;

const AccountText = styled.p`
  color: lightgray;
  font-size: 0.8rem;
  text-align: left;
`;

const MoreIconStyled = styled(MoreIcon)`
  margin-left: auto;
  border: 2px solid var(--grey);
  border-radius: 50%;
  padding: 7px;
  cursor: pointer;
  box-sizing: content-box;
`;

const ChatSessionContainer = styled.div`
  height: 100vh;
  flex: 0 1 25%;
  display: flex;
  flex-direction: column;
  @media (max-width: 1280px) {
    height: calc(100vh - 100px);
    flex: 0.75;
  }
`;

const SearchContainer = styled.div`
  padding: 15px;
  display: flex;
  align-items: center;
  position: relative;
`;

const SearchIconStyled = styled(SearchIcon)`
  position: absolute;
  margin-left: 10px;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 50px;
  padding: 10px;
  font-size: 0.9rem;
  font-family: "Inter";
  text-align: left;
  padding-left: 50px;
  font-weight: 300;
  border-radius: 15px;
  background-color: var(--grey);
  border: none;
`;

const Header = () => {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <ProfileContainer>
        <Avatar image="https://picsum.photos/200" />
        <ProfileDetails>
          <ProfileName>Profile Name</ProfileName>
          <AccountText>My Account</AccountText>
        </ProfileDetails>
      </ProfileContainer>
      <MoreIconStyled
        width={30}
        height={30}
        onClick={() => navigate(PATH_DASHBOARD.general.commingsoon)}
      />
    </HeaderContainer>
  );
};

const ChatSession = ({ setOpenChat, openChat }) => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <ChatSessionContainer>
      <Header />
      <SearchContainer>
        <SearchIconStyled />
        <SearchInput
          type="text"
          name="search"
          id="search"
          placeholder="Search or Start new chat"
          value={search}
          onChange={handleSearch}
        />
      </SearchContainer>
      <MediaQuery minWidth={1080}>
        <OnlineList
          search={search}
          setOpenChat={setOpenChat}
          openChat={openChat}
        />
      </MediaQuery>
      <ChatCards
        search={search}
        setOpenChat={setOpenChat}
        openChat={openChat}
      />
    </ChatSessionContainer>
  );
};

export default ChatSession;
