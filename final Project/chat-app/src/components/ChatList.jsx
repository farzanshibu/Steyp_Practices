import React from "react";
import styled from "styled-components";
import Avatar from "./Avatar";
import { ChatList } from "../data";
import { ReactComponent as BlueDots } from "../assets/icons/Blue dots.svg";
import { ReactComponent as GrayDots } from "../assets/icons/grey dots.svg";

const Container = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: auto;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

const ProfileDetails = styled.div`
  margin-left: 10px;
  text-align: left;
  flex: 1;
`;

const ProfileName = styled.h3`
  font-size: 1.1rem;
  font-family: "Inter";
  font-weight: 500;
  text-align: left;
`;

const AccountText = styled.p`
  color: lightgray;
  font-size: 0.8rem;
  text-align: left;
  padding-top: 5px;
`;

const OnlineListHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
`;

const OnlineListTitle = styled.h6`
  font-weight: 500;
  font-size: 1.1rem;
`;

const Badge = styled.span`
  display: inline-block;
  padding: 0.2em 0.6em;
  font-size: 0.75em;
  line-height: 1;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 10px;
  background-color: var(--blue);
`;

const ChatCardContainer = styled.div`
  overflow-y: auto;
  height: 100%;
`;
const TimeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
  align-self: flex-start;
`;

const TimeText = styled.p`
  color: lightgray;
  font-size: 0.7rem;
`;

const ChatCard = ({ person }) => (
  <HeaderContainer>
    <ProfileContainer>
      <Avatar image={person.img} online={person.online} />
      <ProfileDetails>
        <ProfileName>{person.name}</ProfileName>
        <AccountText>{person.msg}</AccountText>
      </ProfileDetails>
    </ProfileContainer>
    <TimeWrapper>
      {person.unread > 0 ? (
        <BlueDots width={20} height={20} />
      ) : (
        <GrayDots width={20} height={20} />
      )}
      <TimeText>{person.time}</TimeText>
    </TimeWrapper>
  </HeaderContainer>
);

const NewMessageCount = () =>
  ChatList.filter((person) => person.unread > 0).length;

const ChatCards = ({ search, setOpenChat, openChat }) => {
  return (
    <Container>
      <OnlineListHeader>
        <OnlineListTitle>Message</OnlineListTitle>
        <Badge>{NewMessageCount()}</Badge>
      </OnlineListHeader>
      <ChatCardContainer>
        {search &&
          ChatList.filter((person) =>
            person.name.toLowerCase().includes(search.toLowerCase())
          ).map((person) => <ChatCard key={person.id} person={person} />)}
        {ChatList.map((person) => (
          <div
            key={person.id}
            onClick={() => setOpenChat(person.id)}
            style={{
              cursor: "pointer",
              borderRadius: "10px",
              padding: "0 10px",
              backgroundColor:
                openChat === person.id ? "#252c2e" : "transparent",
            }}
          >
            <ChatCard key={person.id} person={person} />
          </div>
        ))}
      </ChatCardContainer>
    </Container>
  );
};

export default ChatCards;
