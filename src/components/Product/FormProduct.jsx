import axios from 'axios';
import React, { useState, useEffect } from 'react';
import '../../styles/form.css'
import '../../styles/input.css'
const FormProduct = ({ refreshGetProducts }) => {

    /* corregir usando useContext */

    /* category logic */
    const baseURLcategory = 'http://localhost:3001/categorias';
    const [category, setCategory] = useState([])
    const getCategory = async () => {
        const res = await axios.get(baseURLcategory);
        setCategory(res.data)
        setCategorySelected({
            categorySelected: res.data[0].name
        })
    }

    /* brand logic */
    const baseURLbrand = 'http://localhost:3001/marcas';
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
    const [leadTimeMax, setLeadTimeMax] = useState(0)
    const [leadTimeMin, setLeadTimeMin] = useState(0)
    const [request, setRequest] = useState(0)

    const [stockMinimno, setStockMinimo] = useState(0)
    const [stockMaximo, setStockMaximo] = useState(0)
    const [stockSeguridad, setStockSeguridad] = useState(0)
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
            case 'leadTimeMax':
                setLeadTimeMax({
                    leadTimeMax: e.target.value
                })
                break;
            case 'leadTimeMin':
                setLeadTimeMin({
                    leadTimeMin: e.target.value
                })
                break;
            case 'request':
                setRequest({
                    request: e.target.value
                })
                break;
            case 'stock':
                setStock({
                    stock: e.target.value
                })
                break;
/*             case 'stockMinimno':
                setStockMinimo({
                    stockMinimno: e.target.value
                })
                break;
            case 'stockMaximo':
                setStockMaximo({
                    stock: e.target.value
                })
                break;
            case 'stockSeguridad':
                setStockSeguridad({
                    stockSeguridad: e.target.value
                }) 
                break;*/
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
        /* const res = await axios.post(baseURLproducts, newProduct ) */
        /* createProduct(newProduct) */
;
        
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
                    <div className="info mt-8 mb-4">
                        Registra el nombre del nuevo productos en la tienda.
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  gap-4">

                    <div className='col-md-3'>
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

                    <div className="">
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

                    <div className="">
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
                    </div>
                    <div className="info mt-8 mb-4">
                        Ingrese los datos para el calculo de Stock máximo, mínimo, seguridad
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  gap-3">
                    <div className="">
                        <label htmlFor="name">Tiempo de Entrega Habitual del Proveedor (días)</label>
                        <input
                            type="number"
                            min="1"
                            name="leadTimeMin"
                            value={leadTimeMin.leadTimeMin}
                            className="input"
                            onChange={(e) => {
                                onAllInputChange(e)
                            }}
                        />
                    </div>
                    <div className="">
                        <label htmlFor="name">Tiempo de Entrega con Retraso (días)</label>
                        <input
                            type="number"
                            min="1"
                            name="leadTimeMax"
                            value={leadTimeMax.leadTimeMax}
                            className="input"
                            onChange={(e) => {
                                onAllInputChange(e)
                            }}
                        />
                    </div>
                    <div className="">
                        <label htmlFor="name">Consumo Promedio (diario)</label>
                        <input
                            type="number"
                            min="1"
                            name="request"
                            value={request.request}
                            className="input"
                            onChange={(e) => {
                                onAllInputChange(e)
                            }}
                        />
                    </div>
                    </div>
                    <div className="info mt-8 mb-4">
                        Calculo de Stock máximo, mínimo, seguridad
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  gap-3 my-4">
                    <div className="">
                        <label htmlFor="name">Stock actual</label>
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

                    <div className="">
                        <label htmlFor="name">Stock de seguridad (Incluye stock mínimo)</label>
                        <input
                            type="number"
                            min="1"
                            name="stockSeguridad"
                            value={(request.request*leadTimeMin.leadTimeMin)+((leadTimeMax.leadTimeMax-leadTimeMin.leadTimeMin)*request.request)}
                            className="input"
                            onChange={(e) => {
                                onAllInputChange(e)
                            }}
                            disabled
                        />
                    </div>

                    <div className="">
                        <label htmlFor="name">Stock mínimo permitido</label>
                        <input
                            type="number"
                            min="1"
                            name="stockMinimno"
                            value={request.request*leadTimeMin.leadTimeMin}
                            className="input"
                            onChange={(e) => {
                                onAllInputChange(e)
                            }}
                            disabled
                        />
                    </div>

                    <div className="">
                        <label htmlFor="name">Stock máximo permitido</label>
                        <input
                            type="number"
                            min="1"
                            name="stockMaximo"
                            value={request.request*leadTimeMin.leadTimeMin*2}
                            className="input"
                            onChange={(e) => {
                                onAllInputChange(e)
                            }}
                            disabled
                        />
                    </div>
                    <div className="">
                        <label htmlFor="name">Punto de reorden (realizar pedido)</label>
                        <input
                            type="number"
                            min="1"
                            name="reorderPoint"
                            value={(request.request*leadTimeMin.leadTimeMin)+((leadTimeMax.leadTimeMax-leadTimeMin.leadTimeMin)*request.request)}
                            className="input"
                            onChange={(e) => {
                                onAllInputChange(e)
                            }}
                            disabled
                        />
                    </div>
                    </div>

                    <div className="info mt-8 mb-4">
                        Detalles del produto {name.name}
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  gap-3">
                    <div className="">
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

                    <div className="">
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

                    <div className="buttons flex items-end  ">
                        <button className="button"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="button button-primary"
                        >
                            Nuevo Producto
                        </button>
                    </div>
                    </div>
                </div>
            </form>
        </>
    );
}
export default FormProduct;