import React, { useRef, useState } from "react";
import styled from "styled-components";

import Avatar from "./Avatar";
import { ReactComponent as MoreIcon } from "../assets/icons/Music-dashboard-icons.svg";
import { ReactComponent as CloseIcon } from "../assets/icons/Vector.svg";

import { ChatList } from "../data";

const PersonDiv = styled.div`
  margin-right: 10px;
`;

const PersonName = styled.p`
  display: block;
  font-size: 0.7rem;
  width: 60px;
  color: #797a7c;
  white-space: nowrap;
  overflow: hidden;
  textoverflow: ellipsis;
`;

const OnlistPerson = ({ search, setOpenChat, openChat }) => {
  return search
    ? ChatList.filter((person) =>
        person.name.toLowerCase().includes(search.toLowerCase())
      ).map((person) => (
        <PersonDiv
          style={{
            backgroundColor: openChat === person.id ? "#252c2e" : "transparent",
            cursor: "pointer",
          }}
          key={person.id}
          onClick={() => {
            setOpenChat(person.id);
          }}
        >
          <Avatar image={person.img} online />
          <PersonName>{person.name}</PersonName>
        </PersonDiv>
      ))
    : ChatList.filter((person) => person.online).map((person) => (
        <PersonDiv
          key={person.id}
          style={{
            cursor: "pointer",
            backgroundColor: openChat === person.id ? "#252c2e" : "transparent",
            padding: "5px 10px",
            borderRadius: "10px",
          }}
          onClick={() => {
            setOpenChat(person.id);
          }}
        >
          <Avatar image={person.img} online />
          <PersonName>{person.name}</PersonName>
        </PersonDiv>
      ));
};

const HeaderContainer = styled.div`
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileName = styled.h3`
  font-size: 1.1rem;
  font-family: "Inter";
  font-weight: 500;
`;

const CloseIconStyled = styled(CloseIcon)`
  width: 30px;
  height: 30px;
  margin-left: auto;
  border: 2px solid var(--grey);
  border-radius: 50%;
  padding: 7px;
  cursor: pointer;
  box-sizing: content-box;
`;

const OnlineListDiv = styled.div`
  padding: 15px;
`;

const OnlineListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const OnlineListTitle = styled.h6`
  font-weight: 500;
  font-size: 1.1rem;
`;

const MoreText = styled.p`
  color: #797a7c;
  font-size: 0.8rem;
  cursor: pointer;
  font-weight: 300;
`;

const OnlineListContent = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  overflow-x: scroll;
  flex: 1;
  user-select: none;
`;

const OnlineList = ({ search, setOpenChat, openChat }) => {
  const [openModel, setopenModel] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const ref = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - ref.current.offsetLeft);
    setScrollLeft(ref.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.pageX - ref.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scroll speed
    ref.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };
  return (
    <>
      <OnlineListDiv>
        <OnlineListHeader>
          <OnlineListTitle>Online Now</OnlineListTitle>
          <MoreText onClick={() => setopenModel(true)}>
            More{" "}
            <MoreIcon
              width={15}
              height={15}
              style={{ verticalAlign: "middle" }}
            />
          </MoreText>
        </OnlineListHeader>
        <OnlineListContent
          ref={ref}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          <OnlistPerson
            search={search}
            setOpenChat={setOpenChat}
            openChat={openChat}
          />
        </OnlineListContent>
      </OnlineListDiv>
      {openModel && (
        <Model
          openModel={openModel}
          setopenModel={setopenModel}
          setOpenChat={setOpenChat}
          openChat={openChat}
        />
      )}
    </>
  );
};

export default OnlineList;

//Model

const Model = ({ openModel, setopenModel, setOpenChat, openChat }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: "0",
        left: "0",
        bottom: "0",
        right: "0",
        margin: "auto",
        width: "30%",
        height: "50%",
        backgroundColor: "#161b1c",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
        zIndex: "1000",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <HeaderContainer>
        <ProfileContainer>
          <ProfileName>Online Now</ProfileName>
        </ProfileContainer>
        <CloseIconStyled
          width={30}
          height={30}
          onClick={() => setopenModel(false)}
        />
      </HeaderContainer>
      <div
        style={{
          overflow: "auto",
          alignContent: "flex-start",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {ChatList.filter((person) => person.online).map((person) => (
          <PersonDiv
            key={person.id}
            style={{
              cursor: "pointer",
              backgroundColor:
                openChat === person.id ? "#252c2e" : "transparent",
              padding: "5px 10px",
              borderRadius: "10px",
            }}
            onClick={() => {
              setOpenChat(person.id);
              setopenModel(false);
            }}
          >
            <Avatar image={person.img} online />
            <PersonName>{person.name}</PersonName>
          </PersonDiv>
        ))}
      </div>
    </div>
  );
};
