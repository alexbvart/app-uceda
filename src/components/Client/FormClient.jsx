import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form'

const FormClient = ({ refreshGetClient }) => {

    const { register, errors, handleSubmit } = useForm();

    const baseURLClient = 'http://localhost:5000/cliente';


    const onSubmit = async (data, event) => {
        console.log(data);
        const NewClient = {
            name: data.name,
            lastname: data.lastname,
            dni: data.dni,
            phone: data.phone,
            adress: data.addresss
        }
        const res = await axios.post(`${baseURLClient}`, NewClient);
        console.log(res);
        refreshGetClient();

        event.target.reset();
    }



    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}
                className='card-form m-auto'>
                <div className="text" >
                    <div className="title">
                        Nuevo Cliente
                    </div>
                    <div className="info">
                        Registra un nuevo cliente en la tienda.
                    </div>
                    <div className='col-md-3'>
                        <label forhtml='name'>Nombre</label>
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
                                        value: 75,
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
                        <label forhtml='phone'>Número de celular</label>
                        <input
                            type='number'
                            name='phone'
                            id='phone'
                            placeholder='Ingrese numero de celular'
                            className='input'
                            ref={
                                register({
                                    required: {
                                        value: true,
                                        message: 'Numero de celular obligatorio'
                                    },
                                    maxLength: {
                                        value: 11,
                                        message: 'numero de celular carácteres!'
                                    },
                                    minLength: {
                                        value: 9,
                                        message: 'Mínimo 9 carácteres'
                                    }
                                })
                            }
                        ></input>
                        <span className='text-danger text-small d-block mb-2'>
                            {errors?.phone?.message}
                        </span>
                    </div>

                    <div className='col-md-3'>
                        <label forhtml='adress'>Dirección</label>
                        <input
                            type='text'
                            name='adress'
                            placeholder='Ingrese dirección'
                            className='input'
                            ref={
                                register({
                                    required: {
                                        value: true,
                                        message: 'Dirección obligatoria'
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
                            {errors?.addresss?.message}
                        </span>
                    </div>


                    <div className="buttons mt-4">
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
export default FormClient;




