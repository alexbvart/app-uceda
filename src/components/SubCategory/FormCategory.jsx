import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';

/* CONTEX   */
import CategoryContext from '../../context/Category/CategoryContext';
import '../../styles/form.css'
import '../../styles/input.css'
const FormCategory = ({ refreshGetCategory }) => {

    
    /* const baseURLcategory = "http://localhost:5000/categoria"*/;
    const [subCategory, setSubCategory] = useState('')
    const { category,getCategory,SUB_CATEGORY_API_URL } = useContext(CategoryContext)

    useEffect(() => {
        getCategory()
    }, [])

    const onChangeInput = (e) => {
        setSubCategory({
            subCategory: e.target.value
        })
        console.log(subCategory.subCategory);
    }

    const onSubmitForm = async (e) => {
        e.preventDefault();
        const res = await axios.post(SUB_CATEGORY_API_URL, {
            name: subCategory.subCategory
        })
        refreshGetCategory()
        console.log(res);
        setSubCategory({
            subCategory: ''
        })
    } 


    return (
        <>
            <form className="card-form m-auto" onSubmit={onSubmitForm} >

                <div className="text" >
                    <div className="title">
                        Nueva sub categoria
                    </div>
                    <div className="info">
                        Registra el nombre de productos en la tienda.
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="username">Seleciona la Categoria</label>
                        <input
                            list="categories"
                            type="search"
                            name="name"
                            id="name"
                            value={subCategory.subCategory}
                            className="input"
                            onChange={(e) => {
                                onChangeInput(e)
                            }}
                        />
                        <datalist id="categories">
                            {category.map((c)=>(
                                <option value={c.name} />
                            ))}
                        </datalist>
                        <div className="input-wrapper">
                    </div>
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
                            Cancelar
                    </button>
                        <button
                            type="submit"
                            className="button button-primary"
                        >
                            Registrar
                    </button>
                    </div>
                </div>
            </form>
        </>
    );
}
export default FormCategory;