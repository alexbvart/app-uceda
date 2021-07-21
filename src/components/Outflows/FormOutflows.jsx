import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form'
import axios from 'axios';


import OutputContext from '../../context/Output/OutputContext';
import ProductContext from '../../context/Product/ProductContext';

const FormOutflows = () => {

    const { register, errors, handleSubmit } = useForm();

    const { OUTPUT_CONCEPT_API_URL, concepts, getOutflowsConcepts } = useContext(OutputContext)
    const { productsTrue, getProductsTrue } = useContext(ProductContext)

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

    useEffect(() => {
        getOutflowsConcepts()
        getProductsTrue()
    }, [])

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className='card-form m-auto'>
                <div className='text' >
                    <div className='title'>
                        Registrar salida
                    </div>
                    <div className='info mb-4'>
                        Ingrese los datos de la de salida
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">

                        <div className=''>
                            <label forhtml='name'>Concepto de salida</label>
                            <input
                                list="conceptsout"
                                type='text'
                                name='name'
                                id='name'
                                placeholder='Ingrese nombre'
                                className='input'
                                ref={
                                    register({
                                        required: {
                                            value: true,
                                            message: 'concepto de salida'
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
                            >
                            </input>
                            <datalist id="conceptsout">
                                {concepts.map((c) => (
                                    <option key={c._id} value={c.name} />
                                ))}
                            </datalist>
                            <span className='text-danger text-small d-block mb-2'>
                                {errors?.name?.message}
                            </span>
                        </div>
                        
                                                <div className=''>
                            <label forhtml='quantity'>Fecha</label>
                            <input
                                type='date'
                                name='date'
                                id='date'
                                placeholder='Ingrese Fecha'
                                className='input'
                                min="1"
                                ref={
                                    register({
                                        required: {
                                            value: true,
                                            message: 'Fecha obligatorio'
                                        }
                                    })
                                }
                            ></input>
                            <span className='text-danger text-small d-block mb-2'>
                                {errors?.date?.message}
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
                        <div className=''>
                            <label forhtml='name'>Nombre del producto</label>
                            <input
                                list="product"
                                type='text'
                                name='name'
                                id='name'
                                placeholder='Ingrese nombre del producto'
                                className='input'
                                ref={
                                    register({
                                        required: {
                                            value: true,
                                            message: 'Nombre del producto'
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
                            >
                            </input>
                            <datalist id="product">
                                {productsTrue.map((c) => (
                                    <option key={c._id} value={c.name} />
                                ))}
                            </datalist>
                            <span className='text-danger text-small d-block mb-2'>
                                {errors?.name?.message}
                            </span>
                        </div>

                        <div className=''>
                            <label forhtml='quantity'>Cantidad</label>
                            <input
                                type='number'
                                name='quantity'
                                id='quantity'
                                placeholder='Ingrese Cantidad'
                                className='input'
                                min="1"
                                ref={
                                    register({
                                        required: {
                                            value: true,
                                            message: 'Cantidad obligatorio'
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
                                {errors?.quantity?.message}
                            </span>
                        </div>

                    </div>
                </div>
            </form>
        </>
    );
}
export default FormOutflows;