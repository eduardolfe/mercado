import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 3%;
    width: 100%;
    gap: 6vh;
`;

export const ContainerName = styled.h2`
    color: royalblue;
    border-bottom: 2px solid royalblue;

`;

export const ContainerContent = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    gap: 2vh;

`;

export const MarketList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4vh;
`;

export const Input = styled.input`
    width: 20vw;
    height: 3vh;
    border-radius: 2px;
    color: darkblue;
    background-color: whitesmoke;
    font-size: large;
    padding-right: 10px;
    padding-left: 10px;

`;

export const QuantityInput = styled.div`
    display: flex;
    width: 20vw;
    gap: 2vw;
    align-items: center;
`;

export const Quantity = styled.p`
    font-weight: bold;
    
`;

export const QuantityButton = styled.button`
    display: flex;
    padding: 3px;
    background-color: royalblue;
    border: none;
    cursor: pointer;
    border-radius: 10%;
`;

export const ResetButton = styled.button`
    background-color: ${props => props.disabled ? "whitesmoke" : "royalblue"}; 
    color: white;
    font-weight: bold;
    border: none;
    cursor: pointer;
    width: 10vw;
    height: 5vh;
    border-radius: 5%;
`;