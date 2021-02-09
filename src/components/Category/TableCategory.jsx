import axios from 'axios';
import React, {useState} from 'react';
const TableCategory = ({category,refreshGetCategory}) => {

    
    const baseURLcategory = 'http://localhost:5000/categoria';

    const deleteCategory = async (id) => {
        await axios.delete(`${baseURLcategory}/${id}`)
        refreshGetCategory();
        console.log(`${baseURLcategory}/${id}`);
    }

    return ( 
        <>
            <div className="flex flex-col items-center justify-center ">

                <h1 className="text-lg font-medium">Categorias registradas</h1>
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
                                category.map((item) => (
                                    <tr
                                        key={item._id}
                                        className=""
                                        onDoubleClick={
                                            () => deleteCategory(item._id)
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
    );
}
export default TableCategory;