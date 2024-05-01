import React, { useState } from "react";
import MessageBox from "./MessageBox";
import ChatInputBox from "./ChatInputBox";
import styled from "styled-components";
import Avatar from "./Avatar";
import { ReactComponent as MoreIcon } from "../assets/icons/Option.svg";
import { ReactComponent as PhoneCallIcon } from "../assets/icons/Property 1=phone.svg";
import { ReactComponent as VideoCallIcon } from "../assets/icons/Property 1=video-camera.svg";
import { useNavigate } from "react-router-dom";
import { PATH_DASHBOARD } from "../routes/path";
import { ReactComponent as CloseIcon } from "../assets/icons/Vector.svg";
import MediaQuery, { useMediaQuery } from "react-responsive";

import { ChatList, Chat_History } from "../data/index";

const CloseIconStyled = styled(CloseIcon)`
  width: 30px;
  height: 30px;
  margin-left: auto;
  border: 2px solid var(--grey);
  border-radius: 50%;
  padding: 7px;
  cursor: pointer;
  box-sizing: content-box;
  margin-left: 15px;
`;

const HeaderContainer = styled.div`
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border: 1px solid var(--grey);
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
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
  font-family: "Inter";
  padding-top: 5px;
`;
const AccountOnlineText = styled.p`
  color: var(--blue);
  font-size: 0.8rem;
  text-align: left;
  font-family: "Inter";
  padding-top: 5px;
  font-weight: 500;
`;
const MoreIconStyled = styled(MoreIcon)`
  margin-left: auto;
  border: 2px solid var(--grey);
  border-radius: 50%;
  padding: 7px;
  cursor: pointer;
  box-sizing: content-box;
`;
const PhoneCallIconStyled = styled(PhoneCallIcon)`
  margin-left: auto;
  border: 2px solid var(--grey);
  border-radius: 50%;
  padding: 7px;
  cursor: pointer;
  box-sizing: content-box;
  margin-right: 15px;
`;
const VideoCallIconStyled = styled(VideoCallIcon)`
  margin-left: auto;
  border: 2px solid var(--grey);
  border-radius: 50%;
  padding: 7px;
  cursor: pointer;
  box-sizing: content-box;
  margin-right: 15px;
`;

const Header = ({ setOpenProfile, openProfile, profile, setOpenChat }) => {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <ProfileContainer onClick={() => setOpenProfile(!openProfile)}>
        <Avatar image={profile.img} online={profile.online} />
        <ProfileDetails>
          <ProfileName>{profile.name}</ProfileName>
          {profile.online ? (
            <AccountOnlineText>Online ...</AccountOnlineText>
          ) : (
            <AccountText>Offline</AccountText>
          )}
        </ProfileDetails>
      </ProfileContainer>
      <div>
        <PhoneCallIconStyled
          width={30}
          height={30}
          onClick={() => navigate(PATH_DASHBOARD.general.commingsoon)}
          title="Phone Call"
        />

        <VideoCallIconStyled
          width={30}
          height={30}
          onClick={() => navigate(PATH_DASHBOARD.general.commingsoon)}
          title="Video Call"
        />

        <MoreIconStyled
          width={30}
          height={30}
          onClick={() => navigate(PATH_DASHBOARD.general.commingsoon)}
          title="More"
        />
        <MediaQuery maxWidth={1080}>
          <CloseIconStyled
            width={30}
            height={30}
            onClick={() => setOpenChat(undefined)}
          />
        </MediaQuery>
      </div>
    </HeaderContainer>
  );
};
const ChatBox = ({ setOpenProfile, openProfile, openChat, setOpenChat }) => {
  const isDesktop = useMediaQuery({ query: "(max-width: 1280px)" });
  const isTab = useMediaQuery({ query: "(max-width: 770px)" });
  const [chatHistory, setChatHistory] = useState(Chat_History);
  const profile = ChatList.find((person) => person.id === openChat);
  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        border: "1px solid var(--grey)",
        // height: "89vh",

        width: isTab ? "auto" : "50vw",
      }}
    >
      {typeof openChat == "undefined" ? (
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Select a chat to start messaging
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Header
            setOpenProfile={setOpenProfile}
            openProfile={openProfile}
            profile={profile}
            setOpenChat={setOpenChat}
          />
          <div
            style={{
              height: isDesktop ? "calc(100vh - 300px)" : "calc(100vh - 200px)",
              width: "100%",
            }}
          >
            <MessageBox messages={chatHistory} />
          </div>

          <ChatInputBox
            profile={profile}
            chatHistory={chatHistory}
            setChatHistory={setChatHistory}
          />
        </div>
      )}
    </div>
  );
};

export default ChatBox;
