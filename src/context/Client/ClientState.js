import axios from 'axios';
import React, {useState} from 'react';
import ClientContext from './ClientContext';

const ClientState = ({children}) => {

    const CLIENT_API_URL =`${process.env.REACT_APP_API}/cliente`;

    const [client, setClient] = useState([])
    
    const getClient = async()=>{
        const res = await axios.get(`${CLIENT_API_URL}`);
        console.log(res.data);
        setClient(res.data) 
    }

    const createClient = async (newClient) => {
        const res = await axios.post(CLIENT_API_URL, newClient )
        console.log(res)
        getClient();
    }

    const updateClient = async (id) => {
        await axios.put(`${CLIENT_API_URL}/${id}`)
        getClient();
    }

    const deletePClient = async (id) => {
        await axios.delete(`${CLIENT_API_URL}/${id}`)
        getClient();
    }


    return ( 
        <>
            <ClientContext.Provider 
                value={{
                    CLIENT_API_URL,
                    client,       setClient,       getClient,
                    createClient,
                    updateClient,
                    deletePClient
                }}
        >
            {children}
        </ClientContext.Provider>
        </>
    );
}
export default ClientState;