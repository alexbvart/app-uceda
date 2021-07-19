import React, { useContext } from 'react';
import { useForm } from 'react-hook-form'
import axios from 'axios';


import OutputContext from '../../context/Output/OutputContext';

const FormOutflowsConcepts = () => {

    const { register, errors, handleSubmit } = useForm();

    const { OUTPUT_CONCEPT_API_URL, getOutflowsConcepts } = useContext(OutputContext)

    const onSubmit = async (data, event) => {
        console.log(data);

        const newConcept = {
            name: data.name,
            description: data.description,
        }
        const res = await axios.post(OUTPUT_CONCEPT_API_URL, newConcept);
        console.log(res);
        getOutflowsConcepts();
        event.target.reset();
    }


    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className='card-form m-auto'>
                <div className='text' >
                    <div className='title'>
                        Concepto de salidas
                    </div>
                    <div className='info mb-4'>
                        Ingrese los datos del concepto de salida
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  gap-4">

                    <div className='col-md-4'>
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
                                        message: 'nombre obligatorio'
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
                        <label forhtml='description'>Description</label>
                        <input
                            type='text'
                            name='description'
                            id='description'
                            placeholder='Ingrese Description'
                            className='input'
                            ref={
                                register({
                                    required: {
                                        value: true,
                                        message: 'Description obligatorio'
                                    },
                                    maxLength: {
                                        value: 175,
                                        message: 'No más de 175 carácteres!'
                                    },
                                    minLength: {
                                        value: 15,
                                        message: 'Mínimo 15 carácteres'
                                    }
                                })
                            }
                        ></input>
                        <span className='text-danger text-small d-block mb-2'>
                            {errors?.description?.message}
                        </span>
                    </div>


                    <div className='buttons flex items-center'>
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
export default FormOutflowsConcepts;