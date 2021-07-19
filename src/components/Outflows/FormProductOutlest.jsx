import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';

const FormProductOulest = () => {



    const [products, setProducts] = useState([])

    const PRODUCT_API_URL = 'http://localhost:5000/productos';

    const getProducts = async () => {
        const res = await axios.get(PRODUCT_API_URL);
        console.log(res.data);
        setProducts(res.data)
        setProductSelected({
            productSelected: res.data[0]._id
        })
    }

    const [cuantity, setCuantity] = useState(0)
    const [productSelected, setProductSelected] = useState([])

    const onAllInputChange = (e) => {

        const input = e.target.name
        switch (input) {
            case 'cuantity':
                setCuantity({
                    cuantity: e.target.value
                })
                break;
            case 'productSelected':
                setProductSelected({
                    productSelected: e.target.value
                })
                break;
            default:
                break;
        }
        console.log(input, e.target.value);
    }

    useEffect(() => {
        getProducts()

    }, [])

    const onSubmitForm = async (event) => {
        event.preventDefault();

        const porducoGet = await axios.get(`${PRODUCT_API_URL}/${productSelected.productSelected}`);
        let porducoStock = porducoGet.data.stock

        let newStock = porducoStock - parseInt(cuantity.cuantity)
        console.log('----',newStock, ); // 70

        const NewOutlestProducts = {
            stock: newStock
        }
        
        const res = await axios.put(`${PRODUCT_API_URL}/${productSelected.productSelected}` , NewOutlestProducts);
        console.log(res); 
        event.target.reset();
    }


    return (
        <>
            <form onSubmit={onSubmitForm} className='-mx-3 md:flex mb-2 md:content-end'>
                <div className='text' >
                    <div className='title'>
                        Registro de  salida
                    </div>
                    <div className='info mb-4'>
                        Por concepto de deterioro o mal estado del producto
                    </div>
                    <div className="md:w-1/2 w-full mb-4 md:mb-0">
                    <label htmlFor="categorySelected">Producto</label>
                    <select
                        name="productSelected"
                        onChange={onAllInputChange}
                        value={productSelected.productSelected}
                        className="mt-1 block w-full py-3 px-4  bg--cardGray rounded-md shadow-sm focus:outline-none ">
                        {products.map((item) => (
                            <option key={item._id} value={item._id}>{item.name} </option>
                        ))
                        }
                    </select>
                </div>
                    <div className='col-md-3'>
                        <label forhtml='cuantity'>salida</label>
                        <input
                            type='number'
                            name='cuantity'
                            min="0"
                            id='cuantity'
                            placeholder='Ingrese salida'
                            onChange={onAllInputChange}
                            className='input'
                            
                        ></input>
                        
                    </div>
                    <div className='buttons mt-8'>
                        <button className='button'
                        >
                            Cancel
                        </button>
                        <button
                            type='submit'
                            className='button button-primary'
                            name='enviar'
                        >
                            Do it!
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
}
export default FormProductOulest;