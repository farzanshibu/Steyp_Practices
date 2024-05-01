// import React from "react";
// import { useMediaQuery } from "react-responsive";

// import ChatSession from "../../components/ChatSession";
// import ProfileBox from "../../components/ProfileBox";
// import ChatBox from "../../components/ChatBox";
// function ChatApp() {
//   const [openProfile, setOpenProfile] = React.useState(false);
//   const [openChat, setOpenChat] = React.useState();
//   const isDesktopOrLaptop = useMediaQuery({
//     query: "(min-width: 771px)",
//   });
//   return (
//     <div style={{ flex: 1, display: "flex", flexDirection: "row" }}>
//       <ChatSession setOpenChat={setOpenChat} openChat={openChat} />
//       <ChatBox
//         setOpenProfile={setOpenProfile}
//         openProfile={openProfile}
//         openChat={openChat}
//       />

//       {openProfile && (
//         <ProfileBox
//           setOpenProfile={setOpenProfile}
//           openProfile={openProfile}
//           openChat={openChat}
//         />
//       )}
//     </div>
//   );
// }

// export default ChatApp;
import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import ChatSession from "../../components/ChatSession";
import ProfileBox from "../../components/ProfileBox";
import ChatBox from "../../components/ChatBox";

const MainContainer = styled.div`
  height: 100vh;
  flex: 1;
  display: flex;
  flex-direction: row;

  @media (max-width: 1280px) {
    height: 89vh;
  }
  @media (max-width: 770px) {
    flex-direction: column;
    height: calc(100vh - 100px);
  }
`;

function ChatApp() {
  const [openProfile, setOpenProfile] = React.useState(false);
  const [openChat, setOpenChat] = React.useState();
  const isMobile = useMediaQuery({ query: "(max-width: 770px)" });

  return (
    <MainContainer>
      {isMobile ? (
        openChat ? (
          <ChatBox
            setOpenProfile={setOpenProfile}
            openProfile={openProfile}
            setOpenChat={setOpenChat}
            openChat={openChat}
          />
        ) : (
          <ChatSession setOpenChat={setOpenChat} openChat={openChat} />
        )
      ) : (
        <>
          <ChatSession setOpenChat={setOpenChat} openChat={openChat} />
          <ChatBox
            setOpenProfile={setOpenProfile}
            openProfile={openProfile}
            openChat={openChat}
          />
          {openProfile && (
            <ProfileBox
              setOpenProfile={setOpenProfile}
              openProfile={openProfile}
              openChat={openChat}
            />
          )}
        </>
      )}
    </MainContainer>
  );
}

export default ChatApp;
