// import React, { useEffect, useRef } from "react";
// import styled from "styled-components";
// import MeassageContainer from "./MeassageContainer";
// const StyledDiv = styled.div`
//   flex: 1;
//   overflow-y: auto;
//   display: flex;
//   flex-direction: column;
//   gap: 20px;
//   height: 100%;
//   padding: 20px;
//   background-color: var(--black);
// `;

// const MessageBox = ({ messages }) => {
//   const ref = useRef(null);

//   useEffect(() => {
//     const loader = setTimeout(() => {
//       if (ref.current) ref.current.scrollIntoView({ behavior: "smooth" });
//     }, 300);
//     return () => {
//       clearTimeout(loader);
//     };
//   }, [messages]);

//   return (
//     <StyledDiv>
//       {messages.map((message, index) => (
//         <MeassageContainer key={index} message={message} />
//       ))}
//       <div ref={ref} />
//     </StyledDiv>
//   );
// };

// export default MessageBox;
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import MeassageContainer from "./MeassageContainer";

const StyledDiv = styled.div`
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;
  padding: 20px;
  background-color: var(--black);

`;

const MessageBox = ({ messages }) => {
  const ref = useRef(null);

  useEffect(() => {
    const loader = setTimeout(() => {
      if (ref.current) ref.current.scrollIntoView({ behavior: "smooth" });
    }, 300);

    return () => {
      clearTimeout(loader);
    };
  }, [messages]);

  return (
    <StyledDiv>
      {messages.map((message, index) => (
        <MeassageContainer key={index} message={message} />
      ))}
      <div ref={ref} />
    </StyledDiv>
  );
};

export default MessageBox;
