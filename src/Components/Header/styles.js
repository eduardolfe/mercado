import styled from "styled-components";

export const MenuItem = styled.div`
    height: 5vh;
    cursor: pointer;
    &:hover{
        color: white;
    }
`;

export const Head = styled.header`
    display: flex;
    justify-content: space-between;
    padding-top: 4%;
    padding-bottom: 2%;
    background-color: royalblue;
`;

export const HeaderName = styled.h1`
    padding-left: 3%;
    color: white;
`;

export const HeaderMenu = styled.ul`
    display: flex;
    gap: 5vh;
    padding-right: 3%;
`;