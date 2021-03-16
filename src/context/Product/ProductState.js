import axios from 'axios';
import React, {useState} from 'react';
import ProductContext from './ProductContext';


const ProductState = ({children}) => {

    const PRODUCT_API_URL ='http://localhost:5000/productos';

    const [oneProduct, setOneProduct] = useState({})
    const [productsAll, setProductsAll] = useState([])
    const [productsTrue, setProductsTrue] = useState([])
    const [productsFalse, setProductsFalse] = useState([])
    const [lowStock, setLowStock] = useState([])
    
    const getOneProduct = async()=>{
        const res = await axios.get(`${PRODUCT_API_URL}`);
        console.log(res.data);
        setOneProduct(res.data) 
    }
    const getProductsAll = async()=>{
        const res = await axios.get(`${PRODUCT_API_URL}/all`);
        console.log(res.data);
        setProductsAll(res.data) 
    }

    const getProductsTrue = async()=>{
        const res = await axios.get(`${PRODUCT_API_URL}/true`);
        const Producttrue = res.data.filter( notnull => notnull!==null);
        setProductsTrue(Producttrue)
    }

    const getProductsFalse = async()=>{
        const res = await axios.get(`${PRODUCT_API_URL}/false`);
        console.log(res.data);
        setProductsFalse(res.data) 
    }

    const getLowStock = async()=>{
        const res = await axios.get(`${PRODUCT_API_URL}/bajostock`);
        console.log(res.data);
        setLowStock(res.data) 
    }

    const createProduct = async (newProduct) => {
        const res = await axios.post(PRODUCT_API_URL, newProduct )
        console.log(res)
    }

    const updateProduct = async (id) => {
        await axios.put(`${PRODUCT_API_URL}/${id}`)
    }

    const deleteProduct = async (id) => {
        await axios.delete(`${PRODUCT_API_URL}/${id}`)
    }


    return ( 
        <>
            <ProductContext.Provider 
                value={{
                    PRODUCT_API_URL,
                    oneProduct,     setOneProduct,     getOneProduct,
                    productsAll,    setProductsAll,    getProductsAll,
                    productsTrue,   setProductsTrue,   getProductsTrue,
                    productsFalse,  setProductsFalse,  getProductsFalse,
                    lowStock,       setLowStock,       getLowStock,
                    createProduct,
                    updateProduct,
                    deleteProduct
                }}
        >
            {children}
        </ProductContext.Provider>
        </>
    );
}
export default ProductState;