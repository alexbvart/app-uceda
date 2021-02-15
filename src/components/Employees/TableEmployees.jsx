import React from 'react';
import axios from 'axios';

const TableEmployees = ({ employees, refreshGetEmployees }) => {

    const baseURLEmployees = 'http://localhost:5000/empleado';

    const deleteEmployees = async (id) => {
        await axios.delete(`${baseURLEmployees}/${id}`)
        refreshGetEmployees();
        console.log(`${baseURLEmployees}/id`);
    }

    return (
        <>
            <div className='flex flex-col items-center justify-center'>

                <h1 className='text-lg font-medium'>Employees registrados</h1>
                <div className='flex flex-col mt-6'>

                    <table className='min-w-full text-sm text-gray-400'>
                        <thead className='text-xs uppercase font-medium'>
                            <tr>

                                <th scope='col' className='px-6 py-3 text-left tracking-wider'>
                                    Nombre y Apellidos
                                </th>
                                <th scope='col' className='px-6 py-3 text-left tracking-wider'>
                                    DNI
                                </th>
                                <th scope='col' className='px-6 py-3 text-left tracking-wider'>
                                    E-mail
                                </th>
                                <th scope='col' className='px-6 py-3 text-left tracking-wider'>
                                    Cumpleaños
                                </th>
                                <th scope='col' className='px-6 py-3 text-left tracking-wider'>
                                    Puesto
                                </th>
                                <th scope='col' className='px-6 py-3 text-left tracking-wider'>
                                    Usuario
                                </th>
                            </tr>
                        </thead>
                        <tbody className=''>
                            {
                                employees.map((item) => (
                                    <tr
                                        key={item._id}
                                        className=''
                                        onDoubleClick={
                                            () => deleteEmployees(item._id)
                                        }
                                    >
                                        <td className='px-6 py-4 '>
                                            <span className='ml-2 font-large'>{item.name} {item.lastname}</span>
                                        </td>

                                        <td className='px-6 py-4'>
                                            <span className='ml-2 font-large'>{item.dni}</span>
                                        </td>

                                        <td className='px-6 py-4'>
                                            <span className='ml-2 font-large'>{item.email}</span>
                                        </td>

                                        <td className='px-6 py-4'>
                                            <span className='ml-2 font-large'>{item.phone}</span>
                                        </td>
                                        <td className='px-6 py-4'>
                                            <span className='ml-2 font-large'>{item.workstation}</span>
                                        </td>
                                        <td className='px-6 py-4'>
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
export default TableEmployees;