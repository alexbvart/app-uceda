import React, { useContext, useEffect } from 'react';
import axios from 'axios';

/* CONTEX */
import ProductContext from '../../context/Product/ProductContext';

const TableProductLow = () => {
    const {lowStock,getLowStock} = useContext(ProductContext)

    useEffect(() => {
        getLowStock()
        console.log("ptrue:",lowStock);
    }, [])

    const baseURL = 'http://localhost:5000/productos';

    const deleteProduct = async (id) => {
        await axios.delete(`${baseURL}/${id}`)
        getLowStock();
        console.log(`${baseURL}/${id}`);
    }

    return (
        <>
            <div className='flex flex-col items-center justify-center '>

                <h1 className='text-lg font-medium'>Productos que requieren reaprovisionamiento </h1>
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
                                    Stock ACTUAL
                                </th>
                                <th scope='col' className='px-2 py-3 text-left tracking-wider'>
                                Stock DE SEGURIDAD
                                </th>
                                <th scope='col' className='px-2 py-3 text-left tracking-wider'>
                                    STOCK MINIMO
                                </th>
                            </tr>
                        </thead>
                        <tbody className=''>
                            {
                                lowStock.map((item) => (

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
                                            <span className=''>{item.name}</span>
                                        </td>

                                        <td className='px-3 py-2'>
                                            <span className=''>{item.description}</span>
                                        </td>

                                        <td className='px-3 py-2'>
                                            <span className=''>
                                            S/.{(parseFloat(item.price))%1 ? parseFloat(item.price) : `${parseFloat(item.price)}.00`}
                                            </span>
                                            
                                        </td>

                                        <td className='px-3 py-2'>
                                            <span className='text-pink-400'>{item.stock.current}</span>
                                        </td>
                                        <td className='px-3 py-2'>
                                            <span className='text-green-300'>{item.stock.security}</span>
                                        </td>
                                        <td className='px-3 py-2'>
                                            <span className=''>{item.stock.min}</span>
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
export default TableProductLow;