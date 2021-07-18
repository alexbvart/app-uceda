
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form'
import axios from 'axios';

/* CONTEXT */
import EmployeeContext from '../../context/Employees/EmployeeContext';
import WorkstationContext from '../../context/Workstation/WorkstationContext';


const FormEmployees = () => {

    const { register, errors, handleSubmit } = useForm();

    const { EMPLOYEES_API_URL, getEmployees } = useContext(EmployeeContext)


    /* manjear los estados de nombre y apellido para crear el email institucional */
    const [datos, setDatos] = useState({
        name: '',
        lastname: ''
    })
    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    /* inportarce los puestos de trabajo, y pasarlos por el efect para que el inital state cambien de [] a [...] */
    const {workStation,getWorkstation} = useContext(WorkstationContext)
    useEffect(() => {
        getWorkstation()
    }, [])

    const onSubmit = async (data, event) => {
        console.log(data);

        const NewEmployee = {
            name: data.name,
            lastname: data.lastname,
            dni: data.dni,
            email: data.email,
            phone: data.phone,
            birth: data.birth,
            workstation: data.workstation
        }
        const res = await axios.post(EMPLOYEES_API_URL, NewEmployee);
        console.log(res); 
        getEmployees();  
        event.target.reset();  
    }


    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}
                className='card-form m-auto'>
                    <div className="title">
                        Nuevo empleado
                    </div>
                    <div className="info mb-4">
                        Es bueno contar con alguien mas en Electrnica Uceda, ingrese sus datos.
                    </div>

                    <div className='col-md-3'>
                        <label forhtml='name'>Nombre</label>
                        <input
                            type='text'
                            name='name'
                            id='name'
                            placeholder='Ingrese nombre'
                            className='input'
                            onChange={handleInputChange}
                            ref={
                                register({
                                    required: {
                                        value: true,
                                        message: 'Nombre obligatorio'
                                    },
                                    maxLength: {
                                        value: 15,
                                        message: 'No más de 15 carácteres!'
                                    },
                                    minLength: {
                                        value: 3,
                                        message: 'Mínimo 3 carácteres'
                                    }
                                })
                            }
                        ></input>
                        <span className='text-danger text-small d-block mb-2'>
                            {errors?.name?.message}
                        </span>
                    </div>

                    <div className='col-md-3'>
                        <label forhtml='lastname'>Apellidos</label>
                        <input
                            type='text'
                            name='lastname'
                            id='lastname'
                            placeholder='Ingrese apellidos'
                            onChange={handleInputChange}
                            className='input'
                            ref={
                                register({
                                    required: {
                                        value: true,
                                        message: 'Apellidos obligatorio'
                                    },
                                    maxLength: {
                                        value: 50,
                                        message: 'No más de 50 carácteres!'
                                    },
                                    minLength: {
                                        value: 5,
                                        message: 'Mínimo 5 carácteres'
                                    }
                                })
                            }
                        ></input>
                        <span className='text-danger text-small d-block mb-2'>
                            {errors?.lastname?.message}
                        </span>
                    </div>

                    <div className='col-md-3'>
                        <label forhtml='dni'>DNI</label>
                        <input
                            type='number'
                            name='dni'
                            id='dni'
                            placeholder='Ingrese dni'
                            className='input'
                            ref={
                                register({
                                    required: {
                                        value: true,
                                        message: 'dni obligatorio'
                                    },
                                    maxLength: {
                                        value: 8,
                                        message: 'No más de 8 carácteres!'
                                    },
                                    minLength: {
                                        value: 1,
                                        message: 'Mínimo 1 carácteres'
                                    }
                                })
                            }
                        ></input>
                        <span className='text-danger text-small d-block mb-2'>
                            {errors?.dni?.message}
                        </span>
                    </div>

                    <div className='col-md-3'>
                        <label forhtml='email'>E-mail corporativo automatico</label>
                        <input
                            type='email'
                            name='email'
                            id='email'
                            placeholder='@uceda.com'
                            className='input'
                            value={
                                (datos.name && datos.lastname)
                                ?
                                    (`${datos.name.replace(/ /g, "").toLowerCase()}${datos.lastname.replace(/ /g, "").toLowerCase()}@uceda.com`)
                                :
                                    (`@uceda.com`)
                            } readOnly
                            ref={
                                register({
                                    required: {
                                        value: true,
                                        message: 'email institucional obligatorio'
                                    },
                                    maxLength: {
                                        value: 255,
                                        message: 'No más de 255 carácteres!'
                                    },
                                    minLength: {
                                        value: 15,
                                        message: 'Mínimo 15 carácteres'
                                    }
                                })
                            }
                        ></input>
                        <span className='text-danger text-small d-block mb-2'>
                            {errors?.email?.message}
                        </span>
                    </div>

                    <div className='col-md-3'>
                        <label forhtml='phone'>Telefono</label>
                        <input
                            type='number'
                            name='phone'
                            id='phone'
                            placeholder='Ingrese su número de telefono'
                            className='input'
                            ref={
                                register({
                                    required: {
                                        value: true,
                                        message: 'telefono obligatorio'
                                    },
                                    maxLength: {
                                        value: 9,
                                        message: 'No más de 9 carácteres!'
                                    },
                                    minLength: {
                                        value: 1,
                                        message: 'Mínimo 1 carácteres'
                                    }
                                })
                            }
                        ></input>
                        <span className='text-danger text-small d-block mb-2'>
                            {errors?.phone?.message}
                        </span>
                    </div>



                    <div className='col-md-3'>
                        <label forhtml='birth'>Fecha de cumpleaños</label>
                        <input
                            type='date'
                            name='birth'
                            id='birth'
                            placeholder='Ingrese su fecha de nacimiento'
                            className='input'
                            ref={
                                register({
                                    required: {
                                        value: true,
                                        message: 'telefono obligatorio'
                                    },
                                })
                            }
                        ></input>
                        <span className='text-danger text-small d-block mb-2'>
                            {errors?.birth?.message}
                        </span>
                    </div>

                    
                        <div className='col-md-3'>
                            <label forhtml='workstation'>Puesto de trabajo asignado</label>
                            <select
                                name="workstation"
                                ref={register} 
                                className="mt-1 block w-full py-3 px-4 bg--cardGray rounded-md shadow-sm focus:outline-none ">
                                    <option> Seleciona un puesto </option>
                                {workStation.map((item) => (
                                    <option key={item._id} value={item._id}>{item.name} </option>
                                ))
                                } 
                            </select>
                            <span className='text-danger text-small d-block mb-2'>
                                {errors?.workstation?.message}
                            </span>
                        </div>

                    <div className="buttons mt-8">
                        <button className="button"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="button button-primary"
                            name='enviar'
                        >
                            Do it!
                        </button>
                    </div>
            </form>
        </>
    );
}
export default FormEmployees;