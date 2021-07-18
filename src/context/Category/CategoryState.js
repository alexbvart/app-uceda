import axios from 'axios';
import React, {useState} from 'react';

/* CONTEX */
import CategoryContext from './CategoryContext';


const CategoryState = ({children}) => {

    const  CATEGORY_API_URL =`${process.env.REACT_APP_API}/categorias`;

    const [category, setCategory] = useState([])

    const getCategory = async()=>{
        const res = await axios.get(`${CATEGORY_API_URL}`);
        console.log(res.data);
        setCategory(res.data) 
    }

    const createCategory = async (newCategory) => {
        const res = await axios.post(CATEGORY_API_URL, newCategory )
        console.log(res)
        getCategory();
    }

    const updateCategory = async (id) => {
        await axios.put(`${CATEGORY_API_URL}/${id}`)
        getCategory();
    }

    const deleteCategory = async (id) => {
        await axios.delete(`${CATEGORY_API_URL}/${id}`)
        getCategory();
    }


    return ( 
        <>
            <CategoryContext.Provider 
                value={{
                    CATEGORY_API_URL,
                    category,       setCategory,       getCategory,
                    createCategory,
                    updateCategory,
                    deleteCategory
                }}
        >
            {children}
        </CategoryContext.Provider>
        </>
    );
}
export default CategoryState;