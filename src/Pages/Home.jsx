import React from 'react';
import ProductCard from '../Components/ProductCard';

export const Home = ({ products }) => {
    return (
        <ProductCard products={products}/>
    )
}
