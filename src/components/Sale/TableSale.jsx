import React, { useContext, useEffect } from 'react';
import SaleContext from "../../context/Sale/SaleContext";

const TableSale = () => {

    const { sales, getSales, deleteSale } = useContext(SaleContext)
    useEffect(() => {
        getSales()
        console.log("sale:",sales);
    }, [])

    return (
        <>
            <div className='flex flex-col items-center justify-center'>

                <h1 className='text-lg font-medium'>Ventas registradas</h1>
                <div className='flex flex-col mt-6'>

                    <table className='min-w-full text-sm '>
                        <thead className='text-xs uppercase font-medium'>
                            <tr>

                                <th scope='col' className='px-3 py-2 text-left tracking-wider'>
                                    Fecha
                                </th>
                                <th scope='col' className='px-3 py-2 text-left tracking-wider'>
                                    Cliente
                                </th>
                                <th scope='col' className='px-3 py-2 text-left tracking-wider'>
                                    Total
                                </th>
                                <th scope='col' className='px-3 py-2 text-left tracking-wider'>
                                    Usuario
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                sales.map((item) => (
                                    <tr
                                        key={item._id}
                                        className=''
                                        onDoubleClick={
                                            () => deleteSale(item._id)
                                        }
                                    >
                                        <td className='px-3 py-2 '>
                                            <span className='ml-2 font-large'>{item.date}</span>
                                        </td>

                                        <td className='px-3 py-2'>
                                            <span className='ml-2 font-large'>{item.client}</span>
                                        </td>

                                        <td className='px-3 py-2'>
                                            <span className='ml-2 font-large'>S/. {item.total}</span>
                                        </td>

                                        <td className='px-3 py-2'>
                                            <span className='ml-2 font-large'>{item.user}</span>
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
export default TableSale;