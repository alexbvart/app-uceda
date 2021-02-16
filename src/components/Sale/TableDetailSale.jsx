import React, { useContext, useEffect } from 'react';
import DetailSaleContext from '../../context/Sale/SaleContext';

const TableDetailSale = () => {

const { detail, getDetail , deleteDetail} = useContext(DetailSaleContext)
useEffect(() => {
    getDetail()
    /* return () => {
        cleanup
   } */
}, [])

    return (
        <>
            <div className='flex flex-col items-center justify-center'>

                
                <div className='flex flex-col mt-6'>

                    <table className='min-w-full text-sm '>
                        <thead className='text-xs uppercase font-medium'>
                            <tr>

                                <th scope='col' className='px-3 py-2 text-left tracking-wider'>
                                    Cantidad
                                </th>
                                <th scope='col' className='px-3 py-2 text-left tracking-wider'>
                                    Producto
                                </th>
                                
                            </tr>
                        </thead>
                        <tbody className=''>
                            {
                                detail.map((item) => (
                                    <tr
                                        key={item.product}
                                        className=''
                                        onDoubleClick={
                                            () => deleteDetail(item.product)
                                        }
                                    >
                                        <td className='px-6 py-4 '>
                                            <span className='ml-2 font-large'>{item.cuantity}</span>
                                        </td>

                                        <td className='px-6 py-4'>
                                            <span className='ml-2 font-large'>{item.product}</span>
                                        </td>

                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
export default TableDetailSale;