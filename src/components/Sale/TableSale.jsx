import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import SaleContext from "../../context/Sale/SaleContext";

const TableSale = () => {

    const { sales, getSales, deleteSale } = useContext(SaleContext)
    useEffect(() => {
        getSales()
        console.log("sale:",sales);
    }, [])

    const CLIENT_API_URL = 'http://localhost:5000/cliente';

    const getCLient = async (item) => {
        let res = await axios.get(`${CLIENT_API_URL}/${item}`) 
        return res
    }
    
    let cliente = '';

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
                                    INC IGV
                                </th>
                                {/* <th scope='col' className='px-3 py-2 text-left tracking-wider'>
                                    Usuario
                                </th> */}
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
                                            <span className='ml-2 font-large'>
                                                {item.client}
                                                {/* { cliente = getCLient(item.name)} */}
                                            </span>
                                        </td>

                                        <td className='px-3 py-2'>
                                            <span className='ml-2 font-large'>
                                                S/. {(parseFloat(item.total))%1 ? parseFloat(item.total) : `${parseFloat(item.total)}.00 `}
                                            
                                            </span>
                                        </td>

                                        <td className='px-3 py-2'>
                                            <span className='ml-2 font-large'>
                                            S/. {
                                                (parseFloat(item.total)*1.18)%1 ? parseFloat(item.total*1.18).toFixed(2) : `${parseFloat(item.total)*1.18}.00 `
                                            }
                                            </span>
                                        </td> 

                                        {/* <td className='px-3 py-2'>
                                            <span className='ml-2 font-large'>{item.user}</span>
                                        </td> */}
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