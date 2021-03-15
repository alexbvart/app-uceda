import React from 'react';


/* Compopnents */
import TableSale from '../components/Sale/TableSale';
import FormSale from '../components/Sale/FormSale';

import FormDetailSale from '../components/Sale/FormDetailSale';
import TableDetailSale from '../components/Sale/TableDetailSale';

/* CONTEXT */
import SaleState from '../context/Sale/SaleState';

const Sale = () => {


    return (
        <div className="main-full">
            <SaleState >
                <div>
                    <FormSale />
                    <FormDetailSale />
                    <TableDetailSale />
                </div>
                <TableSale />
            </SaleState>
        </div>

    );
}
export default Sale;