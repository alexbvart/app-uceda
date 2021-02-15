import React, { useState } from 'react';
import FormWorkstation from '../components/Workstation/FormWorkstation';
import TableWorkstation from '../components/Workstation/TableWorkstation';

/* Compopnents */


/* CONTEXT */
import WorkstationState from '../context/Workstation/WorkstationState';

const Workstation = () => {
    return (
        <WorkstationState>
            <div className="main">
                <TableWorkstation />
                <FormWorkstation />
            </div>
        </WorkstationState>
    );
}
export default Workstation;