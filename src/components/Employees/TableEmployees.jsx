import React, { useContext, useEffect } from 'react';
import EmployeeContext from '../../context/Employees/EmployeeContext';


const TableEmployees = () => {

    const { employees, getEmployees , deleteEmployees} = useContext(EmployeeContext)

    useEffect(() => {
        getEmployees()
        /* return () => {
            cleanup
        } */
    }, [])

    return (
        <>
            <div className='flex flex-col items-center justify-center '>

                <h1 className='text-lg font-medium'>Empleados registrados</h1>
                <div className='flex flex-col mt-6'>

                    <table className='min-w-full text-sm '>
                        <thead className='text-xs uppercase font-medium'>
                            <tr>

                                <th scope='col' className='px-2 py-2 text-left tracking-wider'>
                                    Nombre y Apellidos
                                </th>
                                <th scope='col' className='px-2 py-2 text-left tracking-wider'>
                                    DNI
                                </th>
                                <th scope='col' className='px-2 py-2 text-left tracking-wider'>
                                    E-mail
                                </th>
                                <th scope='col' className='px-2 py-2 text-left tracking-wider'>
                                    Puesto de trabajo
                                </th>
                                {/* <th scope='col' className='px-3 py-3 text-left tracking-wider'>
                                    Cumpleaños
                                </th>
                                <th scope='col' className='px-3 py-3 text-left tracking-wider'>
                                    Puesto
                                </th> */}
                                {/* <th scope='col' className='px-6 py-3 text-left tracking-wider'>
                                    Usuario
                                </th> */}
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
                                            <span className='ml-2 font-large'>{item.workstation}</span>
                                        </td>

                                        {/* <td className='px-6 py-4'>
                                            <span className='ml-2 font-large'>{item.phone}</span>
                                        </td>
                                        <td className='px-6 py-4'>
                                            <span className='ml-2 font-large'>{item.workstation}</span>
                                        </td> */}
                                        {/* <td className='px-6 py-4'>
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
export default TableEmployees;