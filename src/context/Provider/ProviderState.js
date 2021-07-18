import axios from 'axios';
import React, {useState} from 'react';

/* CONTEX */
import ProviderContext from './ProviderContext';


const ProviderState = ({children}) => {

    const  PROVIDER_API_URL =`${process.env.REACT_APP_API}/proveedores`;

    const [provider, setProvider] = useState([])

    const getProvider = async()=>{
        const res = await axios.get(`${PROVIDER_API_URL}`);
        console.log(res.data);
        setProvider(res.data) 
    }

    const createProvider = async (newClient) => {
        const res = await axios.post(PROVIDER_API_URL, newClient )
        console.log(res)
        getProvider();
    }

    const updateProvider = async (id) => {
        await axios.put(`${PROVIDER_API_URL}/${id}`)
        getProvider();
    }

    const deleteProvider = async (id) => {
        await axios.delete(`${PROVIDER_API_URL}/${id}`)
        getProvider();
    }


    return ( 
        <>
            <ProviderContext.Provider 
                value={{
                    PROVIDER_API_URL,
                    provider,       setProvider,       getProvider,
                    createProvider,
                    updateProvider,
                    deleteProvider
                }}
        >
            {children}
        </ProviderContext.Provider>
        </>
    );
}
export default ProviderState;