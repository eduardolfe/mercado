import styled from "styled-components";

export const MenuItem = styled.div`
    display: flex;
    margin-top: 15px;
    gap: 20px;
a{
    
    text-decoration: none;
    color: white;
    font-weight: 2px;
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