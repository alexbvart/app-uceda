import React from 'react';


/* Compopnents */
import FormEmployees from '../components/Employees/FormEmployess';
import TableEmployees from '../components/Employees/TableEmployees';

/* CONTEXT */
import EmployeeState from "../context/Employees/EmployeeState";

const Employees = () => {



    return (
        <div className="main-full">
            <EmployeeState >
                <FormEmployees />
                <TableEmployees />
                {/* <FormEmployees  refreshGetEmployees={getEmployees} />
                    <TableEmployees refreshGetEmployees={getEmployees} employees={employees} /> */}
            </EmployeeState>
        </div>
    );
}
export default Employees;