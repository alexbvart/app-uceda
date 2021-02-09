import axios from 'axios';
import React, {useState, useEffect} from 'react';
import FormCategory from '../components/Category/FormCategory';
import TableCategory from '../components/Category/TableCategory';

const Category = () => {

    const baseURLcategory ='http://localhost:5000/categoria';

    const [category, setCategory] = useState([])

    const getCategory = async()=>{
        const res = await axios.get(baseURLcategory);
        setCategory(res.data)
    }

    useEffect( async () => {
        await getCategory()
        /* return () => {
            cleanup
        } */
    }, [])

    return ( 
        <div className="main">
            <FormCategory refreshGetCategory={getCategory}/>
            <TableCategory  category={category}  refreshGetCategory={getCategory} />
        </div>
    );
}
export default Category;