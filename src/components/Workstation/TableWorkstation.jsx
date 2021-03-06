import React, { useContext, useEffect } from 'react';
import WorkstationContext from '../../context/Workstation/WorkstationContext';

const TableWorkstation = () => {

    const {workStation, getWorkstation, deleteWorkstation} = useContext(WorkstationContext)
    useEffect(() => {
        getWorkstation()
    }, [])

    return (
        <>
            <div className='flex flex-col items-center justify-center'>

                <h1 className='text-lg font-medium'>Puestos de trabajo registrados</h1>
                <div className='flex flex-col mt-6'>

                    <table className='min-w-full text-sm'>
                        <thead className='text-xs uppercase font-medium'>
                            <tr>

                                <th scope='col' className='px-3 py-2 text-left tracking-wider'>
                                    Nombre
                                </th>
                                
                            </tr>
                        </thead>
                        <tbody className=''>
                            {
                                workStation.map((item) => (
                                    <tr
                                        key={item._id}
                                        className=''
                                        onDoubleClick={
                                            () => deleteWorkstation(item._id)
                                        }
                                    >
                                        <td className='px-6 py-4 '>
                                            <span className='ml-2 font-large'>{item.name}</span>
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
export default TableWorkstation;