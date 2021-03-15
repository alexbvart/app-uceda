import axios from 'axios';
import React, { useState, useEffect } from 'react';
import '../../styles/form.css'
import '../../styles/input.css'
const FormProduct = ({ refreshGetProducts }) => {

    /* corregir usando useContext */

    /* category logic */
    const baseURLcategory = 'http://localhost:5000/categoria';
    const [category, setCategory] = useState([])
    const getCategory = async () => {
        const res = await axios.get(baseURLcategory);
        setCategory(res.data)
        setCategorySelected({
            categorySelected: res.data[0].name
        })
    }

    /* brand logic */
    const baseURLbrand = 'http://localhost:5000/marca';
    const [brand, setBrand] = useState([])
    const getBrands = async () => {
        const res = await axios.get(baseURLbrand);
        setBrand(res.data)
        setBrandSelected({
            brandSelected: res.data[0].name
        })
    }

    /* products logic */
    const baseURLproducts = 'http://localhost:5000/productos';
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)
    const [stock, setStock] = useState(0)
    const [categorySelected, setCategorySelected] = useState('')
    const [brandSelected, setBrandSelected] = useState('')

    const onAllInputChange = (e) => {

        const input = e.target.name
        switch (input) {
            case 'name':
                setName({
                    name: e.target.value
                })
                break;
            case 'description':
                setDescription({
                    description: e.target.value
                })
                break;
            case 'price':
                setPrice({
                    price: e.target.value
                })
                break;
            case 'stock':
                setStock({
                    stock: e.target.value
                })
                break;
            case 'categorySelected':
                setCategorySelected({
                    categorySelected: e.target.value
                })
                break;
            case 'brandSelected':
                setBrandSelected({
                    brandSelected: e.target.value
                })
                break;
            default:
                break;
        }
        console.log(input, e.target.value);
    }

    const onSubmitForm = async (e) =>{
        e.preventDefault();
        /* console.log('_n:', name.name,' _d: ',description.description,'_p', price.price, '_c: ',categorySelected.categorySelected, ' b: ',brandSelected.brandSelected); */
        const newProduct ={
            name: name.name,
            description: description.description,
            price: (parseFloat(price.price))%1 ? parseFloat(price.price) : `${parseFloat(price.price)}.00`,
            status: true,
            stock: stock.stock,
            categorySelected: categorySelected.categorySelected,
            brandSelected: brandSelected.brandSelected
        }
        console.log({newProduct});
        const res = await axios.post(baseURLproducts, newProduct )
        console.log(res);
        
        refreshGetProducts()
    }

    useEffect(() => {
        getBrands()
        getCategory()
        /* return () => {
            cleanup
        } */
    }, [])
    return (
        <>
            <form className="card-form m-auto" onSubmit={onSubmitForm} >

                <div className="text" >
                    <div className="title">
                        Nuevo producto
                    </div>
                    <div className="info">
                        Registra el nombre del nuevo productos en la tienda.
                    </div>

                    <div className="input-wrapper">
                        <label htmlFor="name">Nombre</label>
                        <input
                            type="text"
                            name="name"
                            value={name.name}
                            className="input"
                            onChange={(e) => {
                                onAllInputChange(e)
                            }}
                        />
                    </div>

                    <div className="input-wrapper">
                        <label htmlFor="name">Descripcion</label>
                        <input
                            type="text"
                            name="description"
                            value={description.description}
                            className="input"
                            onChange={(e) => {
                                onAllInputChange(e)
                            }}
                        />
                    </div>

                    <div className="input-wrapper">
                        <label htmlFor="name">Precio</label>
                        <input
                            type="number"
                            min="1"
                            name="price"
                            value={price.price}
                            className="input"
                            onChange={(e) => {
                                onAllInputChange(e)
                            }}
                        />
                    </div>

                    <div className="input-wrapper">
                        <label htmlFor="name">Stock inicial</label>
                        <input
                            type="number"
                            min="1"
                            name="stock"
                            value={stock.stock}
                            className="input"
                            onChange={(e) => {
                                onAllInputChange(e)
                            }}
                        />
                    </div>

                    <div className="input-wrapper">
                        <label htmlFor="categorySelected">Categoria</label>
                        <select 
                            name="categorySelected" 
                            onChange={onAllInputChange}
                            value={categorySelected.categorySelected}
                            className="mt-1 block w-full py-2 px-3 bg--cardGray rounded-md shadow-sm focus:outline-none sm:text-sm">
                            { category.map((item) => (
                                <option key={item._id}  >{item.name} </option>
                            ))
                            }
                        </select>
                    </div>

                    <div className="input-wrapper">
                        <label htmlFor="brandSelected">Marca</label>
                        <select 
                            name="brandSelected" 
                            onChange={onAllInputChange}
                            value={brandSelected.brandSelected}
                            className="mt-1 block w-full py-2 px-3 bg--cardGray rounded-md shadow-sm focus:outline-none sm:text-sm">
                            { brand.map((item) => (
                                <option key={item._id}  >{item.name} </option>
                            ))
                            }
                        </select>
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
export default FormProduct;