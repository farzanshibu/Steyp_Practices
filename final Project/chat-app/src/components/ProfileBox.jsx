import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as CloseIcon } from "../assets/icons/Vector.svg";
import { ReactComponent as DocumentIcon } from "../assets/icons/Component 96.svg";
import { useMediaQuery } from "react-responsive";
import { ChatList, Chat_History } from "../data/index";
import Avatar from "./Avatar";

const HeaderContainer = styled.div`
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border: 1px solid var(--grey);
  margin-bottom: 10px;
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

const AccountOnlineText = styled.p`
  color: var(--blue);
  font-size: 0.8rem;
  text-align: center;
  font-family: "Inter";
  padding-top: 5px;
  font-weight: 500;
`;

const OnlineListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
`;

const OnlineListTitle = styled.h6`
  font-weight: 500;
  font-size: 1.1rem;
`;

const MessageContainerOther = styled.div`
  padding: 5px 10px;
  background-color: #1e2628;
  border-radius: 5px;
  margin-bottom: 5px;
  flex: 1;
  margin: 10px 15px;
`;

const MessageTextOther = styled.p`
  color: black;
  margin: 0;
  font-size: 0.8rem;
  text-align: left;
  font-weight: 500;
`;

const Header = ({ setOpenProfile, title }) => (
  <HeaderContainer>
    <ProfileContainer>
      <ProfileName>{title}</ProfileName>
    </ProfileContainer>
    <CloseIconStyled
      width={30}
      height={30}
      onClick={() => setOpenProfile(false)}
    />
  </HeaderContainer>
);

const GalleryContainer = ({ openGallery, setOpenGallery }) => {
  const images = Chat_History.filter((person) => person.subtype === "img");
  console.log(openGallery);
  return (
    <div>
      <OnlineListHeader>
        <OnlineListTitle>
          Photo
          <span
            style={{
              color: "#797a7c",
              fontSize: "0.7rem",
              fontWeight: "300",
              marginLeft: "10px",
            }}
          >
            14 pictures
          </span>
        </OnlineListTitle>
        {!openGallery ? (
          <AccountOnlineText
            style={{ cursor: "pointer", textDecoration: "underline" }}
            onClick={() => setOpenGallery(true)}
          >
            View All
          </AccountOnlineText>
        ) : null}
      </OnlineListHeader>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          padding: "20px",
          gap: "20px",
        }}
      >
        {!openGallery && images.length > 3 ? (
          <>
            {images.slice(0, 3).map((image, index) => (
              <img
                key={index}
                style={{
                  width: "100%",
                  borderRadius: "15px",
                  aspectRatio: "16/9",
                }}
                src={image.img}
                alt="sample1"
              />
            ))}
            <div
              style={{
                width: "100%",
                borderRadius: "15px",
                backgroundColor: "#242c2e",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ProfileName>{images.length - 3}</ProfileName>
            </div>
          </>
        ) : (
          images.map((image, index) => (
            <img
              key={index}
              style={{
                width: "100%",
                borderRadius: "15px",
                aspectRatio: "16/9",
              }}
              src={image.img}
              alt="sample1"
            />
          ))
        )}
      </div>
    </div>
  );
};

const DocumentMessage = ({ document }) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "5px",
        flexDirection: "column",
        flex: 1,
        padding: "5px 10px",
      }}
    >
      <MessageContainerOther>
        <div style={{ display: "flex", gap: "5px", flexDirection: "column" }}>
          <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
            <DocumentIcon width={20} height={20} />
            <MessageTextOther
              style={{ fontWeight: 500, fontSize: "0.8rem", color: "white" }}
            >
              {document.filename}
            </MessageTextOther>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <p
              style={{
                fontSize: "0.8rem",
                color: "gray",
                textAlign: "right",
                paddingTop: "5px",
                textTransform: "uppercase",
              }}
            >
              {document.fileformat}
            </p>
            <p
              style={{
                fontSize: "0.8rem",
                color: "gray",
                textAlign: "right",
                paddingTop: "5px",
              }}
            >
              {document.filesize}
            </p>
          </div>
        </div>
      </MessageContainerOther>
      <p
        style={{
          display: "block",
          fontSize: "0.9rem",
          color: "gray",
          textAlign: "right",
        }}
      >
        {document.time}
      </p>
    </div>
  );
};

const FileContainer = ({ openFiles, setOpenFiles }) => {
  const documentChats = Chat_History.filter(
    (person) => person.subtype === "doc"
  );
  return (
    <div>
      <OnlineListHeader>
        <OnlineListTitle>
          Files
          <span
            style={{
              color: "#797a7c",
              fontSize: "0.7rem",
              fontWeight: "300",
              marginLeft: "10px",
            }}
          >
            12 files
          </span>
        </OnlineListTitle>
        {!openFiles ? (
          <AccountOnlineText
            style={{ cursor: "pointer", textDecoration: "underline" }}
            onClick={() => setOpenFiles(true)}
          >
            View All
          </AccountOnlineText>
        ) : null}
      </OnlineListHeader>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(1, 1fr)",
          padding: "20px",
          gap: "20px",
        }}
      >
        {!openFiles
          ? documentChats.slice(0, 2).map((document, index) => (
              <div
                key={index}
                style={{
                  width: "100%",
                  borderRadius: "15px",
                  backgroundColor: "#242c2e",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <DocumentMessage document={document} />
              </div>
            ))
          : documentChats.map((document, index) => (
              <div
                key={index}
                style={{
                  width: "100%",
                  borderRadius: "15px",
                  backgroundColor: "#242c2e",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <DocumentMessage document={document} />
              </div>
            ))}
      </div>
    </div>
  );
};

const ProfileBox = ({ setOpenProfile, openProfile, openChat }) => {
  const [openGallery, setOpenGallery] = useState(false);
  const [openFiles, setOpenFiles] = useState(false);
  const profile = ChatList.find((person) => person.id === openChat);
  if (openProfile && openGallery) {
    return (
      <Gallery
        setOpenGallery={setOpenGallery}
        openGallery={openGallery}
        profile={profile}
      />
    );
  } else if (openProfile && openFiles) {
    return <Files setOpenFiles={setOpenFiles} openFiles={openFiles} />;
  } else {
    return (
      <Profile
        setOpenProfile={setOpenProfile}
        profile={profile}
        setOpenGallery={setOpenGallery}
        openGallery={openGallery}
        setOpenFiles={setOpenFiles}
        openFiles={openFiles}
      />
    );
  }
};

const Profile = ({
  setOpenProfile,
  profile,
  openGallery,
  openFiles,
  setOpenGallery,
  setOpenFiles,
}) => {
  const isDesktop = useMediaQuery({ query: "(max-width: 1280px)" });
  return (
    <div
      style={{
        flex: "1",
        border: "1px solid var(--grey)",
        height: isDesktop ? "calc(100vh - 100px)" : "100%",
        overflow: "auto",
      }}
    >
      <Header setOpenProfile={setOpenProfile} title="Contact Details" />
      <Avatar image={profile.img} style={{ width: "150px", height: "150px" }} />
      <ProfileName style={{ marginTop: "20px" }}>{profile.name}</ProfileName>
      <AccountOnlineText style={{ marginTop: "10px" }}>
        {profile.online ? "Online" : "Offline"}
      </AccountOnlineText>
      <GalleryContainer
        openGallery={openGallery}
        setOpenGallery={setOpenGallery}
      />
      <FileContainer openFiles={openFiles} setOpenFiles={setOpenFiles} />
    </div>
  );
};

const Gallery = ({ setOpenGallery, openGallery }) => {
  return (
    <div
      style={{
        flex: "0 0 20%",

        height: "100%",
        border: "1px solid var(--grey)",
      }}
    >
      <Header setOpenProfile={setOpenGallery} title="Gallery" />
      <GalleryContainer
        openGallery={openGallery}
        setOpenGallery={setOpenGallery}
      />
    </div>
  );
};
const Files = ({ setOpenFiles, openFiles }) => {
  return (
    <div
      style={{
        flex: "0 0 20%",

        height: "100%",
        border: "1px solid var(--grey)",
      }}
    >
      <Header setOpenProfile={setOpenFiles} title="Files" />
      <FileContainer openFiles={openFiles} setOpenFiles={setOpenFiles} />
    </div>
  );
};

export default ProfileBox;
