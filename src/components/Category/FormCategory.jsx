import axios from 'axios';
import React, { useState } from 'react';
import '../../styles/form.css'
import '../../styles/input.css'
const FormCategory = ({ refreshGetCategory }) => {

    const baseURLcategory = "http://localhost:5000/categoria";
    const [category, setCategory] = useState('')

    const onChangeInput = (e) => {
        setCategory({
            category: e.target.value
        })
        console.log(category.category);
    }

    const onSubmitForm = async (e) => {
        e.preventDefault();
        const res = await axios.post(baseURLcategory, {
            name: category.category
        })
        refreshGetCategory()
        console.log(res);
        setCategory({
            category: ''
        })
    }

    return (
        <>
            <form className="card-form m-auto" onSubmit={onSubmitForm} >

                <div className="text" >
                    <div className="title">
                        Nueva categoria
                    </div>
                    <div className="info">
                        Registra el nombre de productos en la tienda.
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="username">Nombre</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={category.category}
                            className="input"
                            onChange={(e) => {
                                onChangeInput(e)
                            }}
                        />
                    </div>
                    <div className="buttons">
                        <button className="button"
                        >
                            Cancel
                    </button>
                        <button
                            type="submit"
                            className="button button-primary"
                        >
                            Do it!
                    </button>
                    </div>
                </div>
            </form>
        </>
    );
}
export default FormCategory;