import React, { useContext } from 'react';
import { useForm } from 'react-hook-form'
import axios from 'axios';

import ProviderContext from '../../context/Provider/ProviderContext';

const FormSupplier = () => {

    const { register, errors, handleSubmit } = useForm();

    const { PROVIDER_API_URL, getProvider } = useContext(ProviderContext)

    const onSubmit = async (data, event) => {
        console.log(data);

        const NewWorkStation = {
            name: data.name,
        }
        const res = await axios.post(PROVIDER_API_URL, NewWorkStation);
        console.log(res);
        getProvider();
        event.target.reset();
    }


    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className='card-form m-auto'>
                <div className='text' >
                    <div className='title'>
                        Nuevo proveedor
                    </div>
                    <div className='info mb-4'>
                        Es bueno contar con nuesvos proveedores en Electornica Uceda, ingrese los datos.
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  gap-4">

                    <div className='col-md-4'>
                        <label forhtml='ruc'>RUC</label>
                        <input
                            type='text'
                            name='ruc'
                            id='ruc'
                            placeholder='Ingrese ruc'
                            className='input'
                            ref={
                                register({
                                    required: {
                                        value: true,
                                        message: 'name obligatorio'
                                    },
                                    maxLength: {
                                        value: 75,
                                        message: 'No más de 15 carácteres!'
                                    },
                                    minLength: {
                                        value: 5,
                                        message: 'Mínimo 5 carácteres'
                                    }
                                })
                            }
                        ></input>
                        <span className='text-danger text-small d-block mb-2'>
                            {errors?.name?.message}
                        </span>
                    </div>

                    <div className='col-md-4'>
                        <label forhtml='company_name'>Nombre de la compañia</label>
                        <input
                            type='text'
                            name='company_name'
                            id='company_name'
                            placeholder='Ingrese Nombre de la compañia'
                            className='input'
                            ref={
                                register({
                                    required: {
                                        value: true,
                                        message: 'Nombre de la compañia obligatorio'
                                    },
                                    maxLength: {
                                        value: 75,
                                        message: 'No más de 15 carácteres!'
                                    },
                                    minLength: {
                                        value: 5,
                                        message: 'Mínimo 5 carácteres'
                                    }
                                })
                            }
                        ></input>
                        <span className='text-danger text-small d-block mb-2'>
                            {errors?.name?.message}
                        </span>
                    </div>

                    <div className='col-md-4'>
                        <label forhtml='legal_representative'>Representante legal</label>
                        <input
                            type='text'
                            name='legal_representative'
                            id='legal_representative'
                            placeholder='Ingrese Representante legal'
                            className='input'
                            ref={
                                register({
                                    required: {
                                        value: true,
                                        message: 'Representante legal obligatorio'
                                    },
                                    maxLength: {
                                        value: 75,
                                        message: 'No más de 15 carácteres!'
                                    },
                                    minLength: {
                                        value: 5,
                                        message: 'Mínimo 5 carácteres'
                                    }
                                })
                            }
                        ></input>
                        <span className='text-danger text-small d-block mb-2'>
                            {errors?.name?.message}
                        </span>
                    </div>

                    <div className='col-md-4'>
                        <label forhtml='telephone'>Telefono</label>
                        <input
                            type='text'
                            name='telephone'
                            id='telephone'
                            placeholder='Ingrese Telefono'
                            className='input'
                            ref={
                                register({
                                    required: {
                                        value: true,
                                        message: 'Telefono obligatorio'
                                    },
                                    maxLength: {
                                        value: 75,
                                        message: 'No más de 15 carácteres!'
                                    },
                                    minLength: {
                                        value: 5,
                                        message: 'Mínimo 5 carácteres'
                                    }
                                })
                            }
                        ></input>
                        <span className='text-danger text-small d-block mb-2'>
                            {errors?.name?.message}
                        </span>
                    </div>

                    <div className='col-md-4'>
                        <label forhtml='address'>Dirección</label>
                        <input
                            type='text'
                            name='address'
                            id='address'
                            placeholder='Ingrese Dirección'
                            className='input'
                            ref={
                                register({
                                    required: {
                                        value: true,
                                        message: 'Dirección obligatorio'
                                    },
                                    maxLength: {
                                        value: 75,
                                        message: 'No más de 15 carácteres!'
                                    },
                                    minLength: {
                                        value: 5,
                                        message: 'Mínimo 5 carácteres'
                                    }
                                })
                            }
                        ></input>
                        <span className='text-danger text-small d-block mb-2'>
                            {errors?.name?.message}
                        </span>
                    </div>



                    <div className='buttons mt-8'>
                        <button className='button'
                        >
                            Cancelar
                        </button>
                        <button
                            type='submit'
                            className='button button-primary'
                            name='enviar'
                        >
                            Registrar
                        </button>
                    </div>
                </div>
                </div>
            </form>
        </>
    );
}
export default FormSupplier;