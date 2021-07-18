import React from 'react';

/* Compopnents */
import FormSupplier from '../components/Supplier/FormSupplier';
import TableSupplier from '../components/Supplier/TableSupplier';

/* CONTEXT */
import ProviderState from '../context/Provider/ProviderState';


const Provider = () => {
    return (
        <ProviderState>
            <div className="main-full">
                <FormSupplier />
                <TableSupplier />
            </div>
        </ProviderState>
    );
}
export default Provider;