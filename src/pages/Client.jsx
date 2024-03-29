import axios from 'axios';
import React, {useState, useEffect} from 'react';
import FormClient from '../components/Client/FormClient';
import TableClient from '../components/Client/TableClient';
const Client = () => {

    const baseURLcliente =`${process.env.REACT_APP_API}/clientes`;

    const [client, setClient] = useState([])

    const getClient = async()=>{
        const res = await axios.get(baseURLcliente);
        setClient(res.data)
    }

    useEffect( async () => {
        await getClient()
        /* return () => {
            cleanup
        } */
    }, [])



    return ( 
        <>
        <div className="main-full">
            <FormClient  refreshGetClient={getClient}  />
            <TableClient refreshGetClient={getClient} client={client} />
        </div>
        </>
    );
}
export default Client;