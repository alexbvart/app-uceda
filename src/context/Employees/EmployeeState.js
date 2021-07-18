import React, {useReducer} from 'react';
import EmployeeReducer from './EmployeeReducer'
import EmployeeContext from "./EmployeeContext";
import axios from 'axios';

const EmployeeState = ({children}) => {


    const EMPLOYEES_API_URL =`${process.env.REACT_APP_API}/empleado`;

    const initialState = {
        employees: []
    }
    const [state, dispatch] = useReducer(EmployeeReducer, initialState)

    const getEmployees = async()=>{
        const res = await axios.get(EMPLOYEES_API_URL);
        console.log(res.data);
        /* setEmployees(res.data) */
        dispatch({
            type:       'GET_EMPLOYEES',
            payload:     res.data
        })
    }

    const deleteEmployees = async (id) => {
        await axios.delete(`${EMPLOYEES_API_URL}/${id}`)
        getEmployees();
        /*console.log(`${employees_API_URL}/id`); */
    }

    return ( 
        <>
            <EmployeeContext.Provider 
                value={{
                    EMPLOYEES_API_URL,
                    employees: state.employees,
                    getEmployees,
                    deleteEmployees
                }}

            >
                {children}
            </EmployeeContext.Provider>
        </>
    );
}
export default EmployeeState;