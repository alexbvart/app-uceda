import React from 'react';
import axios from 'axios';

const TableProduct = ({ products, refreshGetProducts }) => {

    const baseURL = 'http://localhost:5000/productos';

    const deleteProduct = async (id) => {
        await axios.delete(`${baseURL}/${id}`)
        refreshGetProducts();
        console.log(`${baseURL}/${id}`);
    }

    return (
        <>
            <div className="flex flex-col items-center justify-center ">

                <h1 className="text-lg font-medium">Productos registrados</h1>
                <div className="flex flex-col mt-6">

                    <table className="min-w-full text-sm text-gray-400">
                        <thead className="text-xs uppercase font-medium">
                            <tr>

                                <th scope="col" className="px-6 py-3 text-left tracking-wider">
                                    Nombre
                                </th>
                                <th scope="col" className="px-6 py-3 text-left tracking-wider">
                                    Descripcion
                                </th>
                                <th scope="col" className="px-6 py-3 text-left tracking-wider">
                                    Precio
                                </th>
                                <th scope="col" className="px-6 py-3 text-left tracking-wider">
                                    Stock
                                </th>
                            </tr>
                        </thead>
                        <tbody className="">
                            {
                                products.map((item) => (
                                    <tr
                                        key={item._id}
                                        className=""
                                        onDoubleClick={
                                            () => deleteProduct(item._id)
                                        }
                                    >
                                        <td className="px-6 py-4 ">
                                            <span className="ml-2 font-large">{item.name}</span>
                                        </td>

                                        <td className="px-6 py-4">
                                            <span className="ml-2 font-large">{item.description}</span>
                                        </td>

                                        <td className="px-6 py-4">
                                            <span className="ml-2 font-large">S/. {item.price}0</span>
                                        </td>

                                        <td className="px-6 py-4">
                                            <span className="ml-2 font-large">{item.stock}</span>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>

                </div>



            </div>
        </>
    );
}
export default TableProduct;