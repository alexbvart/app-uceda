import React, {useEffect, useState} from 'react';
import axios from 'axios';
import DataSessionContex from './DataSessionContex';

const DataSessionState = ({children}) => {

    const storedData = JSON.parse(localStorage.getItem("data"));
    const storedEmployee = JSON.parse(localStorage.getItem("employee"));
    const storedRole = JSON.parse(localStorage.getItem("roles"));

    const updateDataUser = async () =>{

    }
    let [data, setData] = useState(storedData||null) 
    let [employee, setEmployee] = useState(storedEmployee||null)
    let [role, setRole] = useState(storedRole||null)
        


    return ( 
        <DataSessionContex.Provider
            value={{
                data,
                employee,       setEmployee,
                role,           setRole
            }}
        >
            {children}
        </DataSessionContex.Provider>
    );
}
export default DataSessionState;