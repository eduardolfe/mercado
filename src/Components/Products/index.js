import React from 'react';
import {Content, Product, ProductList} from './styles';
export default function Products (){
    const products = [
        {
            id: 1,
            name: 'Banana Unidade',
            price: 'Preço: R$ 0,85',
            image: "https://cdn.octoshop.com.br/lojas/padellasaobenedito/uploads_produto/banana-terra-600x600-5ecd606449181.png"
        },
        {
            id: 2,
            name: 'Escada de Alumínio',
            price: 'Preço: R$ 129,90',
            image: "https://cdnv2.moovin.com.br/amerika/imagens/produtos/det/c8ba9e73c4a85b2e9355b88e8bb4d5ae.jpg"
        },
        {
            id: 3,
            name: 'Pão Francês Unidade',
            price: 'Preço: R$ 1,30',
            image: "https://assets.instabuy.com.br/ib.item.image.big/b-25dee6c5888e4631ae23f43aa9a0b5bf.png"
        },
        {
            id: 4,
            name: 'Kit Churrasco',
            price: 'Preço: R$ 93,90 ',
            image: "https://www.principado.com.br/arquivos/empresas/19/produto/conjunto_churrasco_tradicional_12295.jpg"
        }
    ]
    return(<div>
        <Content>
            <ProductList>
                {
                    products.map((product => (
                        <Product>
                            <h2>{product.name}</h2>
                            <img src={product.image}/>
                            <p>{product.price}</p>
                        </Product>
                        
                    )))
                }
            </ProductList>
        </Content>
    </div>);
}