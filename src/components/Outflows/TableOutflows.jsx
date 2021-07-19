import React, {useContext, useEffect} from 'react';
import OutputContext from '../../context/Output/OutputContext';

const TableOutflows = () => {

    const { concepts, getOutflowsConcepts , deleteOutflowsConcepts} = useContext(OutputContext)
    useEffect(() => {
        getOutflowsConcepts()
    }, [])

    return ( 
            <>
                <div className='flex flex-col items-center justify-center '>
    
                    <h1 className='text-lg font-medium'>Conceptos por salida</h1>
                    <div className='flex flex-col mt-6'>
    
                        <table className='min-w-full text-sm '>
                            <thead className='text-xs uppercase font-medium'>
                                <tr>
    
                                    <th scope='col' className='px-3 py-3 text-left tracking-wider'>
                                        Nombre
                                    </th>
                                    <th scope='col' className='px-3 py-3 text-left tracking-wider'>
                                        Descripción
                                    </th>

                                </tr>
                            </thead>
                            <tbody className=''>
                                {
                                    concepts.map((item) => (
                                        <tr
                                            key={item._id}
                                            className=''
                                            onDoubleClick={
                                                () => deleteOutflowsConcepts(item.id)
                                            }
                                        >
                                            <td className='px-4 py-4 '>
                                                <span className=''>{item.name}</span>
                                            </td>
    
                                            <td className='px-4 py-4'>
                                                <span className=''>{item.description}</span>
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
export default TableOutflows;