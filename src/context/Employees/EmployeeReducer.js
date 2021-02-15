import React, {useState} from 'react';

import { GET_EMPLOYEES,DELETE_EMPLOYEE } from "../type";


const EmployeesReducer = (state,action) => {

    const {payload,type} = action;

    switch (type) {
        case GET_EMPLOYEES:
            return{
                ...state,
                employees: payload
            }
    
        default:
            return state
    }
}
export default EmployeesReducer;