import React, {useState} from 'react';
import axios from 'axios';
import DataSessionContex from './DataSessionContex';

const DataSessionState = ({children}) => {

    const storedData = JSON.parse(localStorage.getItem("data"));

    const [data, setData] = useState(storedData||null) 
    console.log(data);

    return ( 
        <DataSessionContex.Provider
            value={{data}}
        >
            {children}
        </DataSessionContex.Provider>
    );
}
export default DataSessionState;