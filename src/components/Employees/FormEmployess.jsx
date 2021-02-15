import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form'

const FormEmployees = ({ refreshGetEmployees }) => {

    const { register, errors, handleSubmit } = useForm();
    const baseURLEmpleado = 'http://localhost:5000/empleado';


    const onSubmit = async (data, event) => {
        console.log(data);

        const NewEmployee = {
            name: data.name,
            lastname: data.lastname,
            dni: data.dni,
            email: data.email
        }
        const res = await axios.post(baseURLEmpleado, NewEmployee);
        console.log(res);
        refreshGetEmployees();  
        event.target.reset();  
    }


    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}
                className='card-form m-auto'>
                <div className="text" >
                    <div className="title">
                        Nuevo Empelado
                    </div>
                    <div className="info mb-4">
                        Es bueno contar con alguien mas en Electrnica Uceda, ingrese sus datos.
                    </div>

                    <div className='col-md-3'>
                        <label forhtml='name'>name</label>
                        <input
                            type='text'
                            name='name'
                            id='name'
                            placeholder='Ingrese nombre'
                            className='input'
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
                                        value: 8,
                                        message: 'Mínimo 8 carácteres'
                                    }
                                })
                            }
                        ></input>
                        <span className='text-danger text-small d-block mb-2'>
                            {errors?.dni?.message}
                        </span>
                    </div>

                    <div className='col-md-3'>
                        <label forhtml='email'>E-mail</label>
                        <input
                            type='email'
                            name='email'
                            id='email'
                            placeholder='Ingrese email'
                            className='input'
                            ref={
                                register({
                                    required: {
                                        value: true,
                                        message: 'email obligatorio'
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
                            {errors?.email?.message}
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
                </div>
            </form>
        </>
    );
}
export default FormEmployees;