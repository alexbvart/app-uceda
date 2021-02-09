import axios from 'axios';
import React, { useState } from 'react';
import '../../styles/form.css'
import '../../styles/input.css'
const FormBrand = ({ refreshGetBrands }) => {

    const baseURLbrand = "http://localhost:5000/marca";

    const [brand, setBrand] = useState('')

    const onChangeInput = (e) => {
        setBrand({
            brand: e.target.value
        })
        console.log(brand.brand);
    }
    const onSubmitForm = async (e) => {
        e.preventDefault();
        const res = await axios.post(baseURLbrand, {
            name: brand.brand
        })
        refreshGetBrands();
        console.log(res);
        setBrand({
            brand: ''
        })
    }


    return (
        <>
            <form className="card-form m-auto" onSubmit={onSubmitForm} >

                <div className="text" >
                    <div className="title">
                        Nueva marca
                    </div>
                    <div className="info">
                        Registra el nombre de las marcas de productos en la tienda.
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="username">Nombre</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={brand.brand}
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
export default FormBrand;