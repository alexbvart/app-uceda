import React from 'react';
import axios from 'axios';

const TableClient = ({ client, refreshGetClient }) => {

    const baseURLClient = 'http://localhost:5000/cliente';

    const deleteClient = async (id) => {
        await axios.delete(`${baseURLClient}/${id}`)
        refreshGetClient();
        console.log(`${baseURLClient}/id`);
    }

    return (
        <>
            <div className='flex flex-col items-center justify-center'>

                <h1 className='text-lg font-medium'>Clientes registrados</h1>
                <div className='flex flex-col mt-6'>

                    <table className='min-w-full text-sm text-gray-400'>
                        <thead className='text-xs uppercase font-medium'>
                            <tr>

                                <th scope='col' className='px-6 py-3 text-left tracking-wider'>
                                    DNI
                                </th>
                                <th scope='col' className='px-6 py-3 text-left tracking-wider'>
                                    Nombres y Apellidos
                                </th>
                                <th scope='col' className='px-6 py-3 text-left tracking-wider'>
                                    Telefono
                                </th>
                            </tr>
                        </thead>
                        <tbody className=''>
                            {
                                client.map((item) => (
                                    <tr
                                        key={item._id}
                                        className=''
                                        onDoubleClick={
                                            () => deleteClient(item._id)
                                        }
                                    >
                                        <td className='px-6 py-4'>
                                            <span className='ml-2 font-large'>{item.dni}</span>
                                        </td>
                                        
                                        <td className='px-6 py-4 '>
                                            <span className='ml-2 font-large'>{item.full_name}</span>
                                        </td>
                                        {/* <td className='px-6 py-4 '>
                                            <span className='ml-2 font-large'>{item.name} {item.lastname}</span>
                                        </td> */}

                                        <td className='px-6 py-4'>
                                            <span className='ml-2 font-large'>{item.telephone}</span>
                                        </td>

                                        

                                        <td className='px-6 py-4'>
                                            <span className='ml-2 font-large'>{item.phone}</span>
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
export default TableClient;