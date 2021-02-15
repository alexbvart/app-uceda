import React, {useState} from 'react';
import {useForm} from 'react-hook-form'

const FormWorkstation = () => {

    const {register, errors, handleSubmit} = useForm();

    const onSubmit = (data, event) =>{
        console.log(data);
        event.target.reset();
    }


    return ( 
        <>
            <h1>Hooks Forms</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='row'>
                <div className='col-md-3'>
                    <label for='name'>name</label>
                    <input 
                        type='text' 
                        name='name' 
                        id='name' 
                        placeholder='Ingrese name' 
                        className='form-control'
                        ref={
                            register({
                                required: {
                                    value: true,
                                    message: 'name obligatorio'
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
                        <span  className='text-danger text-small d-block mb-2'>
                        {errors?.name?.message}
                    </span>
                </div>
                <div className='col-md-3 my-auto'>
                    <input 
                        type='submit' 
                        name='enviar' 
                        id='enviar' 
                        className='btn btn-primary'
                    ></input>
                </div>
            </form>
        </>
    );
}
export default FormWorkstation;