import React, { useContext, useEffect } from 'react';
import axios from 'axios';

/* CONTEX */
import ProductContext from '../../context/Product/ProductContext';

const TableProduct = (/* { products, refreshGetProducts } */) => {
    const {productsTrue,getProductsTrue} = useContext(ProductContext)

    useEffect(() => {
        getProductsTrue()
        console.log("ptrue:",productsTrue);
    }, [])

    const baseURL = 'http://localhost:5000/productos';

    const deleteProduct = async (id) => {
        await axios.delete(`${baseURL}/${id}`)
        getProductsTrue();
        console.log(`${baseURL}/${id}`);
    }

    return (
        <>
            <div className='flex flex-col items-center justify-center '>

                <h1 className='text-lg font-medium'>Productos registrados</h1>
                <div className="flex flex-col mt-6">

                    <table className='max-w-full text-sm text-gray-400 mx-8'>
                        <thead className='text-xs uppercase font-medium'>
                            <tr>

                                <th scope='col' className='px-2 py-3 text-left tracking-wider'>
                                    Nombre
                                </th>
                                <th scope='col' className='px-2 py-3 text-left w-3/5'>
                                    Descripcion
                                </th>
                                <th scope='col' className='px-2 py-3 text-left tracking-wider'>
                                    Precio
                                </th>
                                <th scope='col' className='px-2 py-3 text-left tracking-wider'>
                                    Stock
                                </th>
                            </tr>
                        </thead>
                        <tbody className=''>
                            {
                                productsTrue.map((item) => (

                                    (item !== null) 
                                    ? (
                                        <tr
                                        key={item._id}
                                        className=""
                                        onDoubleClick={
                                            () => deleteProduct(item._id)
                                        }
                                    >
                                        <td className='px-3 py-2 '>
                                            <span className='ml-2 font-large'>{item.name}</span>
                                        </td>

                                        <td className='px-3 py-2'>
                                            <span className='ml-2 font-large'>{item.description}</span>
                                        </td>

                                        <td className='px-3 py-2'>
                                            <span className='ml-2 font-large'>
                                            S/.{(parseFloat(item.price))%1 ? parseFloat(item.price) : `${parseFloat(item.price)}.00`}
                                            </span>
                                            
                                        </td>

                                        <td className='px-3 py-2'>
                                            <span className='ml-2 font-large'>{item.stock}</span>
                                        </td>
                                    </tr>)

                                    :console.log(' null')
                                    
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
export default TableProduct;