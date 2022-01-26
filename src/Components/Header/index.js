import React from "react";
import {AiFillHome,AiFillApple,AiFillTool} from "react-icons/ai";
import {GiWaterBottle} from "react-icons/gi";
import {MdCleaningServices} from "react-icons/md";
import { Head, HeaderMenu, HeaderName, MenuItem } from "./styles";

export default function Header() {
    const itensMenu = [
        {nome: "Menu" , icone: <AiFillHome/>},
        {nome: "Alimentos" , icone: <AiFillApple/>},
        {nome: "Bebidas" , icone: <GiWaterBottle/>},
        {nome: "Limpeza" , icone: <MdCleaningServices/>},
        {nome: "Construção" , icone: <AiFillTool/>},

    ];

    const renderList = itensMenu.map((item, index) => (
        <MenuItem key={index}>
            {item.icone}
            {item.nome}
        </MenuItem>
    ));

    return(
        <Head>
            <HeaderName>Supermercado</HeaderName>
            <HeaderMenu>{renderList}</HeaderMenu>
        </Head>

    ) ;
    
}