import React, { useState } from 'react';
import TableProductLow from '../components/Product/TableProductLow';
import ProductState from '../context/Product/ProductState';
const Stock = () => {
    return (
        <>
            <ProductState>
                <div className="main-full">
                    <TableProductLow />
                </div>
            </ProductState>
        </>
    );
}
export default Stock;