import axios from 'axios';
import React, { useState } from 'react'
import WorkstationContext from './WorkstationContext'

const WorkstationState = ({children}) => {

    const WORKSTATION_API_URL ='http://localhost:5000/puesto';
    const [workStation, setWorkStation] = useState([])

    const getWorkstationState = async()=>{
        const res = await axios.get(WORKSTATION_API_URL);
        console.log(res.data);
        setWorkStation(res.data) 
    }

    const deleteWorkstationState = async (id) => {
        await axios.delete(`${WORKSTATION_API_URL}/${id}`)
        getWorkstationState();

    }

    return (
        <WorkstationContext.Provider 
            value={{
                WORKSTATION_API_URL,
                workStation,
                getWorkstationState,
                deleteWorkstationState
            }}
        >
            {children}
        </WorkstationContext.Provider>
    )
}

export default WorkstationState
