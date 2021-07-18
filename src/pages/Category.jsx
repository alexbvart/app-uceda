import axios from 'axios';
import React, {useState, useEffect} from 'react';

/* Compopnents */
import FormCategory from '../components/Category/FormCategory';
import TableCategory from '../components/Category/TableCategory';

/* CONTEXT */
import CategoryState from '../context/Category/CategoryState';

const Category = () => {

    return ( 
        <CategoryState>
            <div className="main">
                <FormCategory />
                <TableCategory />
            </div>
        </CategoryState>
    );
}
export default Category;