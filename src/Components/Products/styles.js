import styled from "styled-components";

export const Content = styled.div`
    width: 100%;
    height: 100%;
    flex-direction: column;
`;

export const ProductList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 30px;
    padding: 0 20px;
`;

export const Product = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 20px;
    padding: 20px;
    width: 350px;
    height: 350px;
    background-color: ghostwhite;
    box-shadow: 3px 3px 2px grey;
    img{
        height:200px;
        width:200px;
    }
`;

