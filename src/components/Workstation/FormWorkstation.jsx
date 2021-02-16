import React, { useContext } from 'react';
import { useForm } from 'react-hook-form'
import axios from 'axios';
import WorkstationContext from '../../context/Workstation/WorkstationContext';

const FormWorkStation = () => {

    const { register, errors, handleSubmit } = useForm();

    const { WORKSTATION_API_URL, getWorkstation } = useContext(WorkstationContext)

    const onSubmit = async (data, event) => {
        console.log(data);

        const NewWorkStation = {
            name: data.name,
        }
        const res = await axios.post(WORKSTATION_API_URL, NewWorkStation);
        console.log(res);
        getWorkstation();
        event.target.reset();
    }


    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className='card-form m-auto'>
                <div className='text' >
                    <div className='title'>
                        Nuevo puesto de trabajo
                    </div>
                    <div className='info mb-4'>
                        Es bueno contar con nuesvos puestos de trabajo en Electrnica Uceda, ingrese los datos.
                    </div>
                    <div className='col-md-3'>
                        <label forhtml='name'>name</label>
                        <input
                            type='text'
                            name='name'
                            id='name'
                            placeholder='Ingrese name'
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
                    <div className='buttons mt-8'>
                        <button className='button'
                        >
                            Cancel
                        </button>
                        <button
                            type='submit'
                            className='button button-primary'
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
export default FormWorkStation;