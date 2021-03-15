import React from 'react';


/* Compopnents */
import FormEmployees from '../components/Employees/FormEmployess';
import TableEmployees from '../components/Employees/TableEmployees';

/* CONTEXT */
import EmployeeState from "../context/Employees/EmployeeState";
import WorkstationState from '../context/Workstation/WorkstationState';


const Employees = () => {



    return (
        <div className="main-full">
            <EmployeeState >
                <WorkstationState>
                    <FormEmployees />
                </WorkstationState>

                <TableEmployees />
                {/* <FormEmployees  refreshGetEmployees={getEmployees} />
                    <TableEmployees refreshGetEmployees={getEmployees} employees={employees} /> */}
            </EmployeeState>
        </div>
    );
}
export default Employees;