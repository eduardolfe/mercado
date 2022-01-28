import React from 'react';
import Header from '../../Components/Header';
import {Content} from './styles';
import {Image} from './styles';
import {Anuncio} from './styles';

export default function Restaurant (){
    return(<div>
        <Header/>
        <Content/>
        <Image src='https://fotos.vivadecora.com.br/decoracao-restaurante-banquetas-metalizadas-e-parede-de-tijolinho-comum-crispaola-218139-proportional-height_cover_medium.jpg'/>
        <Anuncio>Visite nosso novo restaurante!</Anuncio>
    </div>);
        
}