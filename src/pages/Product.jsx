import axios from 'axios';
import React, {useState, useEffect} from 'react';
import FormProduct from '../components/Product/FormProduct';
import TableProduct from '../components/Product/TableProduct';
const Product = () => {

    const baseURL ='http://localhost:5000/productos';

    const [products, setProducts] = useState([])

    const getProducts = async()=>{
        const res = await axios.get(baseURL);
        setProducts(res.data)
    }

    useEffect( async () => {
        await getProducts()
        /* return () => {
            cleanup
        } */
    }, [])

    return ( 
        <div className="main-full">
            <FormProduct refreshGetProducts={getProducts} />
            <TableProduct products={products} refreshGetProducts={getProducts} />
        </div>
    );
}
export default Product;