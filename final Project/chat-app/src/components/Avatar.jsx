import React from "react";
import styled from "styled-components";

const Avatar = ({ image, online, style }) => (
  <AvatarWrapper>
    <UserAvatar src={image} alt="User Avatar" style={style} />
    {online && <OnlineIndicator />}
  </AvatarWrapper>
);

export default Avatar;
const AvatarWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const UserAvatar = styled.img`
  width: 50px;
  height: 50px;
  pointer-events: none;

  border-radius: 50%;
`;

const OnlineIndicator = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  width: 13px;
  height: 13px;
  background-color: var(--blue);
  border-radius: 50%;
  box-sizing: content-box;
  border: 3px solid var(--black);
`;
