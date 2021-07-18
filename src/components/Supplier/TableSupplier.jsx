import React, { useContext, useEffect } from 'react';
import ProviderContext from '../../context/Provider/ProviderContext';

const TableSupplier = () => {

    const {provider, getProvider, deleteProvider} = useContext(ProviderContext)
    useEffect(() => {
        getProvider()
    }, [])

    return (
        <>
            <div className='flex flex-col items-center justify-center'>

                <h1 className='text-lg font-medium'>Proveedores registrados</h1>
                <div className='flex flex-col mt-6'>

                    <table className='min-w-full text-sm'>
                        <thead className='text-xs uppercase font-medium'>
                            <tr>

                                <th scope='col' className='px-2 py-2 text-left tracking-wider'>
                                    RUC
                                </th>
                                <th scope='col' className='px-2 py-2 text-left tracking-wider'>
                                    Razón social
                                </th>
                                <th scope='col' className='px-2 py-2 text-left tracking-wider'>
                                    Representante legal
                                </th>
                                <th scope='col' className='px-2 py-2 text-left tracking-wider'>
                                    Telefono
                                </th>
                                <th scope='col' className='px-2 py-2 text-left tracking-wider'>
                                    Dirección
                                </th>
                                
                            </tr>
                        </thead>
                        <tbody className=''>
                            {
                                provider.map((item) => (
                                    <tr
                                        key={item._id}
                                        className=''
                                        onDoubleClick={
                                            () => deleteProvider(item._id)
                                        }
                                    >
                                        <td className='px-3 py-4 '>
                                            <span >{item.ruc}</span>
                                        </td>
                                        <td className='px-3 py-4 '>
                                            <span >{item.company_name}</span>
                                        </td>
                                        <td className='px-3 py-4 '>
                                            <span >{item.legal_representative}</span>
                                        </td>
                                        <td className='px-3 py-4 '>
                                            <span >{item.telephone}</span>
                                        </td>
                                        <td className='px-3 py-4 '>
                                            <span >{item.address}</span>
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
export default TableSupplier;