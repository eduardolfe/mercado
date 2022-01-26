import React from "react";
import { BananaContainer, BananaImage, BananaInfo, ContainerProducts, EscadaContainer, EscadaImage, EscadaInfo, VassouraContainer, VassouraImage, VassouraInfo } from "./styles";
import "../../Images/banana.jpeg";
export default function Products() {
    return(
        <ContainerProducts>
            <BananaContainer>
                <BananaImage src='../../Images/banana.jpeg' alt='Foto da Banana'/>
                <BananaInfo>
                <h3>Banana Prata </h3>
                </BananaInfo>
            </BananaContainer>
            <EscadaContainer>
                <EscadaImage src='../../Images/escada.webp' alt='Foto da Banana'/>
                <EscadaInfo>
                    <h3>Escada de Alumínio</h3>
                </EscadaInfo>
            </EscadaContainer>
            <VassouraContainer>
                <VassouraImage src='./Images/vassoura.webp' alt='Foto da Vassoura'/>
                <VassouraInfo>
                    <h3>Ola vassoura</h3>
                </VassouraInfo>
            </VassouraContainer>
        </ContainerProducts>
    );
}