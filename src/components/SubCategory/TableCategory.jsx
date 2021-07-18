
import React, {useContext, useEffect} from 'react';
import CategoryContext from '../../context/Category/CategoryContext';
const TableCategory = () => {

    const { subCategory, getSubCategory , deletebSuCategory} = useContext(CategoryContext)

    useEffect(() => {
        getSubCategory()
    }, [])
    
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
                                subCategory.map((item) => (
                                    <tr
                                        key={item._id}
                                        className=""
                                        onDoubleClick={
                                            () => deletebSuCategory(item._id)
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