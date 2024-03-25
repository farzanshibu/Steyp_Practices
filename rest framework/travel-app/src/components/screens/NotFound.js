import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Header from "../includes/Header";

export default function NotFound() {
    return <div>
        <Header />
        <HeaderContainer>
            <h1>404 Page Not Found</h1>
            <GoBackButton to='/'>Go Home</GoBackButton>
        </HeaderContainer>
    </div>;
}
const HeaderContainer = styled.div`
    width: 90%;
    margin: 0 auto;
    height: 85dvh;
    display: flex;
    gap:30px;
    justify-content: center;
    align-items: center;
`;
const GoBackButton = styled(Link)`
    background: red;
    border: 0;
    outline: 0;
    color: #fff;
    padding: 15px 20px;
    border-radius: 8px;
    font-size: 20px;
    cursor: pointer;
`;