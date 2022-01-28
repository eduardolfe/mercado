import React from 'react';
import Header from '../../Components/Header';
import Main from '../../Components/Main';
import Products from '../../Components/Products';
import { Content } from './styles';

export default function Home (){
    return(<div>
        <Header/>
        <Main/>
        <Content/>
        <Products/>
    </div>);
}