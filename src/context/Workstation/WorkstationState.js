import axios from 'axios';
import React, { useState } from 'react'
import WorkstationContext from './WorkstationContext'

const WorkstationState = ({children}) => {

    const WORKSTATION_API_URL ='http://localhost:5000/puesto';
    const [workStation, setWorkStation] = useState([])

    /*const storedJwt = localStorage.getItem('token');

     const reqHeaders = {
        'headers': {
            'Access-Control-Allow-Headers': 'x-access-token',
            'X-WP-Nonce': 'my-wp-nonce-here',
            'x-access-token': storedJwt
        }
    } */

    const getWorkstation = async()=>{
        const res = await axios.get(WORKSTATION_API_URL);
        console.log(res.data);
        setWorkStation(res.data) 
    }

    const deleteWorkstation = async (id) => {
        await axios.delete(`${WORKSTATION_API_URL}/${id}`)
        getWorkstation();
    }

    return (
        <WorkstationContext.Provider 
            value={{
                WORKSTATION_API_URL,
                workStation,
                getWorkstation,
                deleteWorkstation
            }}
        >
            {children}
        </WorkstationContext.Provider>
    )
}

export default WorkstationState
