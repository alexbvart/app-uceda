import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import DetailSaleContext from '../../context/Sale/SaleContext';

const FormDetailSale = () => {

    const { detail,setDetail, getDetail } = useContext(DetailSaleContext)


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
        console.log("detalle: ",detail);

    }, [])

    /* const [detailSale, setDetailSale] = useState([]) */

    const onSubmitForm = (e) => {
        e.preventDefault();
        /* console.log(cuantity.cuantity,productSelected.productSelected ); */

        const NewDetailSale = {
            cuantity: cuantity.cuantity,
            product: productSelected.productSelected
        }
        console.log(NewDetailSale);
        setDetail([...detail, NewDetailSale])

        getDetail()
/*

        e.target.reset(); */
    }



    return (
        <>

            <form onSubmit={onSubmitForm} className="-mx-3 md:flex mb-2 md:content-end">
                <div className="md:w-1/2 px-3 mb-4 md:mb-0">
                    <label htmlFor="categorySelected">Categoria</label>
                    <select
                        name="productSelected"
                        onChange={onAllInputChange}
                        value={productSelected.productSelected}
                        className="mt-1 block w-full py-3 px-4 bg--cardGray rounded-md shadow-sm focus:outline-none ">
                        {products.map((item) => (
                            <option key={item._id} value={item._id}>{item.name} </option>
                        ))
                        }
                    </select>
                </div>
                <div className="md:w-1/2 px-3">
                    <label forhtml='cuantity'>cuantity</label>
                    <input
                        type='number'
                        name='cuantity'
                        placeholder='Ingrese cuantity'
                        className='input'
                        onChange={onAllInputChange}
                    ></input>
                </div>
                <div className="md:w-1/2 px-3">
                    <label forhtml='cuantity'>&nbsp;</label>
                    <button
                        type='submit'
                        className='button button-primary'
                        name='enviar'
                    >
                        Agregar
                        </button>
                </div>
            </form>
        </>
    );
}
export default FormDetailSale;