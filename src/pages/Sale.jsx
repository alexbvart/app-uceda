import React from 'react';


/* Compopnents */
import TableSale from '../components/Sale/TableSale';

import FormDetailSale from '../components/Sale/FormDetailSale';
import TableDetailSale from '../components/Sale/TableDetailSale';

/* CONTEXT */
import SaleState from '../context/Sale/SaleState';
import FormSale from '../components/Sale/FormSale';

const Sale = () => {


    return ( 
        <div className="main-full">
            <SaleState >
                <FormSale />
                <FormDetailSale />
                <TableDetailSale />
                <TableSale />
            </SaleState>
        </div>
        
    );
}
export default Sale;