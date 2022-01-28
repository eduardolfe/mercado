import React from "react";
import {Link} from "react-router-dom";
import {AiFillHome} from "react-icons/ai";
import {GiForkKnifeSpoon} from "react-icons/gi";
import { Head, HeaderMenu, HeaderName, MenuItem } from "./styles";


export default function Header() {
    const itensMenu = [
        {nome: "Menu" , icone: <AiFillHome/>, path: "/"},
        {nome:  "Restaurante" , icone: <GiForkKnifeSpoon/>, path:"/restaurante"},
        

    ];

    const renderList = itensMenu.map((item, index) => (
        <MenuItem key={index}>
            <Link to={item.path}>
                {item.nome}   
                {item.icone}
            </Link>
        </MenuItem>
    ));

    return(
        <Head>
            <HeaderName>Supermercado</HeaderName>
            <HeaderMenu>{renderList}</HeaderMenu>
        </Head>

    ) ;
    
}