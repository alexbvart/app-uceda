import axios from 'axios';
import React, { useState, useEffect } from 'react';
import FormProduct from '../components/Product/FormProduct';
import TableProduct from '../components/Product/TableProduct';
import ProductState from '../context/Product/ProductState';
const Product = () => {

    const baseURL = 'http://localhost:5000/productos/true';

    const [products, setProducts] = useState([])

    const getProducts = async () => {
        const res = await axios.get(baseURL);
        console.log(res.data);
        setProducts(res.data)
    }

    useEffect(async () => {
        await getProducts()
        /* return () => {
            cleanup
        } */
    }, [])

    return (
        <ProductState>
            <div className="main-full">
                <FormProduct refreshGetProducts={getProducts} />
                <TableProduct  />
            </div>
        </ProductState>

    );
}
export default Product;