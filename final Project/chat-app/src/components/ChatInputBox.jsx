import React, { useState } from "react";
import styled from "styled-components";
import EmojiPicker from "emoji-picker-react";

import { ReactComponent as SendIcon } from "../assets/icons/white send.svg";
import { ReactComponent as AttachIcon } from "../assets/icons/attachment 2.svg";
import { ReactComponent as EmojiIcon } from "../assets/icons/Group 3465380.svg";
import { ReactComponent as MicIcon } from "../assets/icons/Group 3465393.svg";

const Container = styled.div`
  height: 100px;
  border: 1px solid var(--grey);
`;

const InnerContainer = styled.div`
  display: flex;
  height: 100px;
  justify-content: space-around;
  align-items: center;
  padding: 15px;
  background-color: var(--black2);
`;

const StyledAttachIcon = styled(AttachIcon)`
  cursor: pointer;
  width: 37px;
  height: 37px;
`;

const InputContainer = styled.div`
  width: 85%;
  position: relative;
  @media (max-width: 1280px) {
    width: 75%;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  border-radius: 20px;
  border: none;
  outline: none;
  padding: 20px;
  background-color: var(--grey);
  color: white;
  font-family: Inter;
  font-size: 1rem;
  font-weight: 300;
  text-indent: 10px;
  cursor: pointer;
  text-align: left;
`;

const StyledEmojiIcon = styled(EmojiIcon)`
  cursor: pointer;
  width: 25px;
  height: 25px;
  position: absolute;
  z-index: 10;
  right: 20px;
  top: 0;
  bottom: 0;
  margin: auto;
  background-color: #2b3147;
  border-radius: 50%;
  padding: 10px;
  box-sizing: content-box;
  border: none;
`;

const StyledSendIcon = styled(SendIcon)`
  cursor: pointer;
  rotate: 90deg;
  width: 35px;
  height: 35px;
`;

const StyledMicIcon = styled(MicIcon)`
  cursor: pointer;
  width: 37px;
  height: 37px;
`;

const handleSubmit = ({ message, setMessage, setChatHistory, chatHistory }) => {
  if (!message) return;
  if (message) {
    let newMeassageObject = {
      type: "msg",
      message: message,
      incoming: false,
      outgoing: true,
      time: "9:36",
      read: true,
      reactions: [],
    };
    setChatHistory([...chatHistory, newMeassageObject]);
    setMessage("");
  }
};

const ChatInputBox = ({ profile, chatHistory, setChatHistory }) => {
  console.log(chatHistory);
  const [message, setMessage] = useState("");
  const [openEmoji, setOpenEmoji] = useState(false);
  return (
    <>
      <EmojiPicker
        open={openEmoji}
        emojiStyle="google"
        onEmojiClick={(emojiData, event) => {
          setMessage(message + emojiData.emoji);
        }}
        onClick={() => {
          if (openEmoji) {
            setOpenEmoji(false);
          }
        }}
        style={{ bottom: "100px", right: "50px", position: "absolute" }}
      />
      <Container
        onClick={() => {
          if (openEmoji) setOpenEmoji(false);
        }}
      >
        <InnerContainer>
          <div
            style={{ cursor: "pointer" }}
            onClick={() => document.getElementById("file").click()}
          >
            <input
              type="file"
              name="file"
              id="file"
              style={{ display: "none" }}
            />
            <StyledAttachIcon />
          </div>
          <InputContainer>
            <StyledInput
              placeholder={`Message to ${profile.name}`}
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
            <div onClick={() => setOpenEmoji(!openEmoji)}>
              <StyledEmojiIcon />
            </div>
          </InputContainer>
          {message.length > 0 ? (
            <div
              onClick={() => {
                handleSubmit({
                  message,
                  setMessage,
                  setChatHistory,
                  chatHistory,
                });
              }}
            >
              <StyledSendIcon />
            </div>
          ) : (
            <StyledMicIcon />
          )}
        </InnerContainer>
      </Container>
    </>
  );
};

export default ChatInputBox;
