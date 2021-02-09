import axios from 'axios';
import React, {useState} from 'react';
const TableBrand = ({ brands, refreshGetBrands }) => {

    const baseURL = 'http://localhost:5000/marca';

    const deleteBrand = async (id) => {
        await axios.delete(`${baseURL}/${id}`)
        refreshGetBrands();
        console.log(`${baseURL}/${id}`);
    }
    
    return ( 
        <>
                    <>
            <div className="flex flex-col items-center justify-center ">

                <h1 className="text-lg font-medium">Marcas registradas</h1>
                <div className="flex flex-col mt-6">

                    <table className="min-w-full text-sm text-gray-400">
                        <thead className="text-xs uppercase font-medium">
                            <tr>

                                <th scope="col" className="px-6 py-3 text-left tracking-wider">
                                    Nombre
                                </th>
                            </tr>
                        </thead>
                        <tbody className="">
                            {
                                brands.map((item) => (
                                    <tr
                                        key={item._id}
                                        className=""
                                        onDoubleClick={
                                            () => deleteBrand(item._id)
                                        }
                                    >
                                        <td className="px-6 py-4 ">
                                            <span className="ml-2 font-large">{item.name}</span>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>

                </div>



            </div>
        </>
        </>
    );
}
export default TableBrand;