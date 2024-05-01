// import React, { useState } from "react";
// import styled from "styled-components";
// import { ReactComponent as ShareIcon } from "../assets/icons/Property 1=white share.svg";
// import { ReactComponent as ReactionIcon } from "../assets/icons/Group 3465392.svg";
// import { ReactComponent as MoreIcon } from "../assets/icons/White Option.svg";
// import { ReactComponent as SentIcon } from "../assets/icons/white send.svg";
// import { ReactComponent as DocumentIcon } from "../assets/icons/Component 96.svg";
// import { ReactComponent as BlueDots } from "../assets/icons/Blue dots.svg";
// import { ReactComponent as GrayDots } from "../assets/icons/grey dots.svg";
// import Picker from "emoji-picker-react";

// import { Message_options } from "../data/index";
// const DividerCard = styled.div`
//   width: 100%;
//   height: 40px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-size: 0.9em;
//   font-weight: 700;
//   color: white;
// `;

// const DividerText = styled.p`
//   margin: 0;
// `;

// const Wrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: ${({ incoming }) => (incoming ? "flex-start" : "flex-end")};
// `;

// const MessageContainer = styled.div`
//   display: flex;
//   width: 50%;
//   flex-direction: ${({ incoming }) => (incoming ? "row-reverse" : "row")};
//   justify-content: ${({ incoming }) => (incoming ? "flex-end" : "flex-start")};
// `;

// const IconContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   height: 70%;
//   padding: 7px 14px;
//   flex: 1;
// `;

// const IconRow = styled.div`
//   display: flex;
//   gap: 12px;
//   flex-direction: ${({ incoming }) => (incoming ? "row" : "row-reverse")};
// `;

// const MessageBubble = styled.div`
//   min-width: 150px;
//   max-width: 70%;
//   display: flex;
//   flex-direction: column;
//   gap: 10px;
// `;

// const MessageText = styled.div`
//   display: flex;
//   flex-direction: column;
//   background-color: ${({ incoming }) => (incoming ? "#242c2e" : "#48a5c4")};
//   padding: 13px 10px;
//   border-radius: ${({ incoming }) =>
//     incoming ? "0 15px 15px 15px" : "15px 0 15px 15px"};
//   color: white;
// `;

// const MessageFooter = styled.div`
//   display: flex;
//   flex-direction: ${({ incoming }) => (incoming ? "row" : "row-reverse")};
//   justify-content: space-between;
// `;

// const ReactionContainer = styled.div`
//   display: flex;
//   gap: 5px;
//   overflow: hidden;
//   max-width: 140px;
//   white-space: nowrap;
//   text-overflow: ellipsis;
// `;

// const Reaction = styled.div`
//   background-color: #252d2f;
//   border-radius: 10px;
//   font-size: 0.9rem;
//   padding: 1px;
// `;

// const ReactionCount = styled.span`
//   color: white;
//   font-size: 0.6rem;
//   margin: auto;
//   margin-right: 5px;
// `;

// const StatusContainer = styled.div`
//   display: flex;
//   gap: 5px;
// `;

// const Timestamp = styled.p`
//   margin: auto;
//   color: #797a7c;
//   font-size: 0.7rem;
// `;
// const TextMessage = styled.h6`
//   margin: 0;
//   text-align: left;
//   font-size: 0.8rem;
//   font-weight: 500;
//   color: ${({ incoming }) => (incoming ? "lightgray" : "black")};
// `;

// const MessageContainerOther = styled.div`
//   padding: 5px 10px;
//   background-color: ${({ incoming }) => (incoming ? "#1e2628" : "#357a91")};
//   border-radius: 5px;
//   margin-bottom: 5px;
// `;

// const MessageTextOther = styled.p`
//   color: black;
//   margin: 0;
//   font-size: 0.8rem;
//   text-align: left;
//   font-weight: 500;
// `;

// const ReplyMessage = ({ singleMessage }) => {
//   return (
//     <>
//       <MessageContainerOther>
//         <MessageTextOther>{singleMessage.reply}</MessageTextOther>
//       </MessageContainerOther>
//       <TextMessage incoming={singleMessage.incoming}>
//         {singleMessage.message}
//       </TextMessage>
//     </>
//   );
// };

// const ModelOptions = ({ setShowModelOptions }) => {
//   return (
//     <>
//       <div
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           position: "absolute",
//           left: "0px",
//           top: "30px",
//           boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)",
//           borderRadius: "10px",
//           paddingTop: "15px",
//           padding: "10px",
//           backgroundColor: "#1e2628",
//           zIndex: 10,
//           width: "170px",
//           gap: "5px",
//         }}
//       >
//         {Message_options.map((option) => (
//           <div
//             style={{
//               cursor: "pointer",
//               padding: "10px",
//               color: "white",
//               borderRadius: "5px",
//             }}
//             onMouseEnter={(e) => {
//               e.target.style.backgroundColor = "#161b1c";
//             }}
//             onMouseLeave={(e) => {
//               e.target.style.backgroundColor = "transparent";
//             }}
//             key={option.title}
//           >
//             {option.title}
//           </div>
//         ))}
//       </div>

//       <div
//         onClick={() => {
//           setShowModelOptions(false);
//         }}
//         style={{
//           position: "absolute",
//           top: "-400px",
//           left: "-1290px",
//           bottom: "0px",
//           right: "0px",
//           height: "100vh",
//           width: "100vw",
//           zIndex: 9,
//         }}
//       ></div>
//     </>
//   );
// };

// const NormalMessage = ({ singleMessage, children }) => {
//   const [showModelOptions, setShowModelOptions] = useState(false);
//   const [showReactions, setShowReactions] = useState(false);
//   return (
//     <Wrapper incoming={singleMessage.incoming}>
//       <MessageContainer incoming={singleMessage.incoming}>
//         <IconContainer onMouseLeave={() => setShowReactions(false)}>
//           {singleMessage.incoming && (
//             <>
//               <IconRow incoming={singleMessage.incoming}>
//                 <ShareIcon
//                   width={17}
//                   height={17}
//                   style={{
//                     cursor: "pointer",
//                     transform: singleMessage.incoming
//                       ? "scaleX(1)"
//                       : "scaleX(-1)",
//                   }}
//                 />
//                 <div
//                   onClick={() => {
//                     setShowReactions(!showReactions);
//                   }}
//                   style={{
//                     cursor: "pointer",
//                     position: "relative",
//                   }}
//                 >
//                   <Picker
//                     open={showReactions}
//                     reactionsDefaultOpen={true}
//                     onReactionClick={() => {}}
//                     style={{
//                       position: "absolute",
//                       bottom: "24px",
//                       left: "-150px",
//                       zIndex: 10,
//                     }}
//                   />
//                   <ReactionIcon width={17} height={17} />
//                 </div>
//                 <div
//                   style={{ cursor: "pointer", position: "relative" }}
//                   onClick={() => {
//                     setShowModelOptions(!showModelOptions);
//                   }}
//                 >
//                   <MoreIcon width={17} height={17} />
//                   {showModelOptions && (
//                     <ModelOptions setShowModelOptions={setShowModelOptions} />
//                   )}
//                 </div>
//               </IconRow>
//               <SentIcon
//                 width={17}
//                 height={17}
//                 style={{
//                   cursor: "pointer",
//                   alignSelf: singleMessage.incoming ? "flex-start" : "flex-end",
//                   transform: singleMessage.incoming
//                     ? "scaleX(1)"
//                     : "scaleX(-1)",
//                 }}
//               />
//             </>
//           )}
//         </IconContainer>
//         <MessageBubble>
//           <MessageText incoming={singleMessage.incoming}>
//             {children}
//           </MessageText>
//           <MessageFooter incoming={singleMessage.incoming}>
//             <ReactionContainer>
//               {singleMessage.reactions.map((reaction) => (
//                 <Reaction key={reaction.id}>
//                   {reaction.icon}
//                   <ReactionCount>{reaction.count}</ReactionCount>
//                 </Reaction>
//               ))}
//             </ReactionContainer>
//             <StatusContainer>
//               {singleMessage.outgoing ? (
//                 singleMessage.read ? (
//                   <BlueDots width={20} height={20} />
//                 ) : (
//                   <GrayDots width={20} height={20} />
//                 )
//               ) : (
//                 ""
//               )}
//               <Timestamp>{singleMessage.time}</Timestamp>
//             </StatusContainer>
//           </MessageFooter>
//         </MessageBubble>
//       </MessageContainer>
//     </Wrapper>
//   );
// };

// const Divider = ({ text }) => {
//   return (
//     <DividerCard>
//       <DividerText>{text}</DividerText>
//     </DividerCard>
//   );
// };

// const StyledTextMessage = ({ singleMessage }) => (
//   <TextMessage incoming={singleMessage.incoming}>
//     {singleMessage.message}
//   </TextMessage>
// );

// const LinkMessage = ({ singleMessage }) => {
//   return (
//     <>
//       <MessageContainerOther incoming={singleMessage.incoming}>
//         <a href={singleMessage.preview}>
//           <div style={{ width: "400px", height: "300px", overflow: "hidden" }}>
//             <img
//               src={singleMessage.preview}
//               alt="Preview"
//               style={{
//                 width: "100%",
//                 borderRadius: "5px",
//                 objectFit: "cover",
//                 overflow: "hidden",
//               }}
//             />
//           </div>
//           <MessageTextOther
//             style={{
//               color: "lightblue",
//               fontWeight: 500,
//               fontSize: "0.8rem",
//               marginTop: "5px",
//             }}
//           >
//             {singleMessage.preview}
//           </MessageTextOther>
//         </a>
//       </MessageContainerOther>
//       <TextMessage incoming={singleMessage.incoming}>
//         {singleMessage.message}
//       </TextMessage>
//     </>
//   );
// };
// const DocumentMessage = ({ singleMessage }) => {
//   return (
//     <>
//       <MessageContainerOther incoming={singleMessage.incoming}>
//         <div style={{ display: "flex", gap: "5px", flexDirection: "column" }}>
//           <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
//             <DocumentIcon width={20} height={20} />
//             <MessageTextOther
//               style={{ fontWeight: 500, fontSize: "0.8rem", color: "white" }}
//             >
//               {singleMessage.filename}
//             </MessageTextOther>
//           </div>
//           <div
//             style={{
//               display: "flex",
//               flexDirection: "row",
//               justifyContent: "space-between",
//             }}
//           >
//             <p
//               style={{
//                 fontSize: "0.6rem",
//                 color: "gray",
//                 textAlign: "right",
//                 paddingTop: "5px",
//                 textTransform: "uppercase",
//               }}
//             >
//               {singleMessage.fileformat}
//             </p>
//             <p
//               style={{
//                 fontSize: "0.6rem",
//                 color: "gray",
//                 textAlign: "right",
//                 paddingTop: "5px",
//               }}
//             >
//               {singleMessage.filesize}
//             </p>
//           </div>
//         </div>
//       </MessageContainerOther>
//       <TextMessage incoming={singleMessage.incoming}>
//         {singleMessage.message}
//       </TextMessage>
//     </>
//   );
// };
// const ImageMessage = ({ singleMessage }) => {
//   return (
//     <>
//       <MessageContainerOther incoming={singleMessage.incoming}>
//         <div style={{ width: "400px", height: "300px", overflow: "hidden" }}>
//           <img
//             src={singleMessage.img}
//             alt="Preview"
//             style={{ width: "100%", borderRadius: "5px" }}
//           />
//         </div>
//       </MessageContainerOther>
//       <TextMessage incoming={singleMessage.incoming}>
//         {singleMessage.message}
//       </TextMessage>
//     </>
//   );
// };

// const HandleMessage = ({ message }) => {
//   if (!message.subtype)
//     return (
//       <NormalMessage singleMessage={message}>
//         <StyledTextMessage singleMessage={message} />
//       </NormalMessage>
//     );
//   switch (message.subtype) {
//     case "reply":
//       return (
//         <NormalMessage singleMessage={message}>
//           <ReplyMessage singleMessage={message} />
//         </NormalMessage>
//       );
//     case "img":
//       return (
//         <NormalMessage singleMessage={message}>
//           <ImageMessage singleMessage={message} />
//         </NormalMessage>
//       );
//     case "doc":
//       return (
//         <NormalMessage singleMessage={message}>
//           <DocumentMessage singleMessage={message} />
//         </NormalMessage>
//       );
//     case "link":
//       return (
//         <NormalMessage singleMessage={message}>
//           <LinkMessage singleMessage={message} />
//         </NormalMessage>
//       );
//     default:
//       break;
//   }
// };

// const MessageBox = ({ message }) => {
//   switch (message.type) {
//     case "msg":
//       return <HandleMessage message={message} />;
//     case "divider":
//       return <Divider text={message.text} />;
//     default:
//       break;
//   }
// };

// export default MessageBox;
import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as ShareIcon } from "../assets/icons/Property 1=white share.svg";
import { ReactComponent as ReactionIcon } from "../assets/icons/Group 3465392.svg";
import { ReactComponent as MoreIcon } from "../assets/icons/White Option.svg";
import { ReactComponent as SentIcon } from "../assets/icons/white send.svg";
import { ReactComponent as DocumentIcon } from "../assets/icons/Component 96.svg";
import { ReactComponent as BlueDots } from "../assets/icons/Blue dots.svg";
import { ReactComponent as GrayDots } from "../assets/icons/grey dots.svg";
import Picker from "emoji-picker-react";

import { Message_options } from "../data/index";

const DividerCard = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9em;
  font-weight: 700;
  color: white;
`;

const DividerText = styled.p`
  margin: 0;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${({ incoming }) => (incoming ? "flex-start" : "flex-end")};
  width: 100%;

`;

const MessageContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: ${({ incoming }) => (incoming ? "row-reverse" : "row")};
  justify-content: ${({ incoming }) => (incoming ? "flex-end" : "flex-start")};

`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 70%;
  padding: 7px 14px;
  flex: 1;
`;

const IconRow = styled.div`
  display: flex;
  gap: 12px;
  flex-direction: ${({ incoming }) => (incoming ? "row" : "row-reverse")};
`;

const MessageBubble = styled.div`
  min-width: 150px;
  max-width: 70%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 767px) {
    max-width: 100%;
  }
`;

const MessageText = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ incoming }) => (incoming ? "#242c2e" : "#48a5c4")};
  padding: 13px 10px;
  border-radius: ${({ incoming }) =>
    incoming ? "0 15px 15px 15px" : "15px 0 15px 15px"};
  color: white;
  word-wrap: break-word;

  @media (max-width: 767px) {
    border-radius: ${({ incoming }) =>
      incoming ? "15px 15px 15px 0" : "15px 15px 0 15px"};
  }
`;

const MessageFooter = styled.div`
  display: flex;
  flex-direction: ${({ incoming }) => (incoming ? "row" : "row-reverse")};
  justify-content: space-between;
`;

const ReactionContainer = styled.div`
  display: flex;
  gap: 5px;
  overflow: hidden;
  max-width: 140px;
  white-space: nowrap;
  text-overflow: ellipsis;

  @media (max-width: 767px) {
    max-width: 100%;
    overflow: auto;
  }
`;

const Reaction = styled.div`
  background-color: #252d2f;
  border-radius: 10px;
  font-size: 0.9rem;
  padding: 1px;
`;

const ReactionCount = styled.span`
  color: white;
  font-size: 0.6rem;
  margin: auto;
  margin-right: 5px;
`;

const StatusContainer = styled.div`
  display: flex;
  gap: 5px;
`;

const Timestamp = styled.p`
  margin: auto;
  color: #797a7c;
  font-size: 0.7rem;
`;

const TextMessage = styled.h6`
  margin: 0;
  text-align: left;
  font-size: 0.8rem;
  font-weight: 500;
  color: ${({ incoming }) => (incoming ? "lightgray" : "black")};
`;

const MessageContainerOther = styled.div`
  padding: 5px 10px;
  background-color: ${({ incoming }) => (incoming ? "#1e2628" : "#357a91")};
  border-radius: 5px;
  margin-bottom: 5px;
  max-width: 100%;
  overflow: hidden;

  a {
    display: block;
    width: 100%;
  }
`;

const MessageTextOther = styled.p`
  color: black;
  margin: 0;
  font-size: 0.8rem;
  text-align: left;
  font-weight: 500;
`;

const ReplyMessage = ({ singleMessage }) => {
  return (
    <>
      <MessageContainerOther incoming={singleMessage.incoming}>
        <MessageTextOther>{singleMessage.reply}</MessageTextOther>
      </MessageContainerOther>
      <TextMessage incoming={singleMessage.incoming}>
        {singleMessage.message}
      </TextMessage>
    </>
  );
};

const ModelOptions = ({ setShowModelOptions }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          position: "absolute",
          left: "0px",
          top: "30px",
          boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)",
          borderRadius: "10px",
          paddingTop: "15px",
          padding: "10px",
          backgroundColor: "#1e2628",
          zIndex: 10,
          width: "170px",
          gap: "5px",
        }}
      >
        {Message_options.map((option) => (
          <div
            style={{
              cursor: "pointer",
              padding: "10px",
              color: "white",
              borderRadius: "5px",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#161b1c";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent";
            }}
            key={option.title}
          >
            {option.title}
          </div>
        ))}
      </div>

      <div
        onClick={() => {
          setShowModelOptions(false);
        }}
        style={{
          position: "absolute",
          top: "-400px",
          left: "-1290px",
          bottom: "0px",
          right: "0px",
          height: "100vh",
          width: "100vw",
          zIndex: 9,
        }}
      ></div>
    </>
  );
};

const NormalMessage = ({ singleMessage, children }) => {
  const [showModelOptions, setShowModelOptions] = useState(false);
  const [showReactions, setShowReactions] = useState(false);
  return (
    <Wrapper incoming={singleMessage.incoming}>
      <MessageContainer incoming={singleMessage.incoming}>
        <IconContainer onMouseLeave={() => setShowReactions(false)}>
          {singleMessage.incoming && (
            <>
              <IconRow incoming={singleMessage.incoming}>
                <ShareIcon
                  width={17}
                  height={17}
                  style={{
                    cursor: "pointer",
                    transform: singleMessage.incoming
                      ? "scaleX(1)"
                      : "scaleX(-1)",
                  }}
                />
                <div
                  onClick={() => {
                    setShowReactions(!showReactions);
                  }}
                  style={{
                    cursor: "pointer",
                    position: "relative",
                  }}
                >
                  <Picker
                    open={showReactions}
                    reactionsDefaultOpen={true}
                    onReactionClick={() => {}}
                    style={{
                      position: "absolute",
                      bottom: "24px",
                      left: "-150px",
                      zIndex: 10,
                    }}
                  />
                  <ReactionIcon width={17} height={17} />
                </div>
                <div
                  style={{ cursor: "pointer", position: "relative" }}
                  onClick={() => {
                    setShowModelOptions(!showModelOptions);
                  }}
                >
                  <MoreIcon width={17} height={17} />
                  {showModelOptions && (
                    <ModelOptions setShowModelOptions={setShowModelOptions} />
                  )}
                </div>
              </IconRow>
              <SentIcon
                width={17}
                height={17}
                style={{
                  cursor: "pointer",
                  alignSelf: singleMessage.incoming ? "flex-start" : "flex-end",
                  transform: singleMessage.incoming
                    ? "scaleX(1)"
                    : "scaleX(-1)",
                }}
              />
            </>
          )}
        </IconContainer>
        <MessageBubble>
          <MessageText incoming={singleMessage.incoming}>
            {children}
          </MessageText>
          <MessageFooter incoming={singleMessage.incoming}>
            <ReactionContainer>
              {singleMessage.reactions.map((reaction) => (
                <Reaction key={reaction.id}>
                  {reaction.icon}
                  <ReactionCount>{reaction.count}</ReactionCount>
                </Reaction>
              ))}
            </ReactionContainer>
            <StatusContainer>
              {singleMessage.outgoing ? (
                singleMessage.read ? (
                  <BlueDots width={20} height={20} />
                ) : (
                  <GrayDots width={20} height={20} />
                )
              ) : (
                ""
              )}
              <Timestamp>{singleMessage.time}</Timestamp>
            </StatusContainer>
          </MessageFooter>
        </MessageBubble>
      </MessageContainer>
    </Wrapper>
  );
};

const Divider = ({ text }) => {
  return (
    <DividerCard>
      <DividerText>{text}</DividerText>
    </DividerCard>
  );
};

const StyledTextMessage = ({ singleMessage }) => (
  <TextMessage incoming={singleMessage.incoming}>
    {singleMessage.message}
  </TextMessage>
);

const LinkMessage = ({ singleMessage }) => {
  return (
    <>
      <MessageContainerOther incoming={singleMessage.incoming}>
        <a href={singleMessage.preview}>
          <div style={{ width: "400px",height: "200px", overflow: "hidden" }}>
            <img
              src={singleMessage.preview}
              alt="Preview"
              style={{
                width: "100%",
                borderRadius: "5px",
                objectFit: "cover",
                overflow: "hidden",
              }}
            />
          </div>
          <MessageTextOther
            style={{
              color: "lightblue",
              fontWeight: 500,
              fontSize: "0.8rem",
              marginTop: "5px",
            }}
          >
            {singleMessage.preview}
          </MessageTextOther>
        </a>
      </MessageContainerOther>
      <TextMessage incoming={singleMessage.incoming}>
        {singleMessage.message}
      </TextMessage>
    </>
  );
};

const DocumentMessage = ({ singleMessage }) => {
  return (
    <>
      <MessageContainerOther incoming={singleMessage.incoming}>
        <div style={{ display: "flex", gap: "5px", flexDirection: "column" }}>
          <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
            <DocumentIcon width={20} height={20} />
            <MessageTextOther
              style={{ fontWeight: 500, fontSize: "0.8rem", color: "white" }}
            >
              {singleMessage.filename}
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
                fontSize: "0.6rem",
                color: "gray",
                textAlign: "right",
                paddingTop: "5px",
                textTransform: "uppercase",
              }}
            >
              {singleMessage.fileformat}
            </p>
            <p
              style={{
                fontSize: "0.6rem",
                color: "gray",
                textAlign: "right",
                paddingTop: "5px",
              }}
            >
              {singleMessage.filesize}
            </p>
          </div>
        </div>
      </MessageContainerOther>
      <TextMessage incoming={singleMessage.incoming}>
        {singleMessage.message}
      </TextMessage>
    </>
  );
};

const ImageMessage = ({ singleMessage }) => {
  return (
    <>
      <MessageContainerOther incoming={singleMessage.incoming}>
        <div style={{ width: "400px",height: "200px", overflow: "hidden" }}>
          <img
            src={singleMessage.img}
            alt="Preview"
            style={{ width: "100%", borderRadius: "5px" }}
          />
        </div>
      </MessageContainerOther>
      <TextMessage incoming={singleMessage.incoming}>
        {singleMessage.message}
      </TextMessage>
    </>
  );
};

const HandleMessage = ({ message }) => {
  if (!message.subtype)
    return (
      <NormalMessage singleMessage={message}>
        <StyledTextMessage singleMessage={message} />
      </NormalMessage>
    );
  switch (message.subtype) {
    case "reply":
      return (
        <NormalMessage singleMessage={message}>
          <ReplyMessage singleMessage={message} />
        </NormalMessage>
      );
    case "img":
      return (
        <NormalMessage singleMessage={message}>
          <ImageMessage singleMessage={message} />
        </NormalMessage>
      );
    case "doc":
      return (
        <NormalMessage singleMessage={message}>
          <DocumentMessage singleMessage={message} />
        </NormalMessage>
      );
    case "link":
      return (
        <NormalMessage singleMessage={message}>
          <LinkMessage singleMessage={message} />
        </NormalMessage>
      );
    default:
      break;
  }
};

const MessageBox = ({ message }) => {
  switch (message.type) {
    case "msg":
      return <HandleMessage message={message} />;
    case "divider":
      return <Divider text={message.text} />;
    default:
      break;
  }
};

export default MessageBox;
