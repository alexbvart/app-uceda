import axios from 'axios';
import React, {useState} from 'react';
import OutputContext from './OutputContext';


const OutputState = ({children}) => {

    const OUTPUT_API_URL ='http://localhost:5000/salidas';

    const [output, setOutput]               = useState([])
    const [loss, setLoss]                   = useState([])
    const [stolen, setStolen]               = useState([])
    const [sale, setSale]                   = useState([])
    const [deterioration, setDeterioration] = useState([])
    
    const getOutput = async()=>{
        const res = await axios.get(`${OUTPUT_API_URL}/all`);
        console.log(res.data);
        setOutput(res.data) 
    }
    const getLoss = async()=>{
        const res = await axios.get(`${OUTPUT_API_URL}/loss`);
        console.log(res.data);
        setLoss(res.data) 
    }
    const getStolen = async()=>{
        const res = await axios.get(`${OUTPUT_API_URL}/stolen`);
        console.log(res.data);
        setStolen(res.data) 
    }
    const getSale = async()=>{
        const res = await axios.get(`${OUTPUT_API_URL}/sale`);
        console.log(res.data);
        setSale(res.data) 
    }
    const getDeterioration = async()=>{
        const res = await axios.get(`${OUTPUT_API_URL}/deterioration`);
        console.log(res.data);
        setDeterioration(res.data) 
    }


    const createOutput = async (newOutput) => {
        const res = await axios.post(OUTPUT_API_URL, newOutput )
        console.log(res)
    }

    const updateOutput   = async (id) => {
        await axios.put(`${OUTPUT_API_URL}/${id}`)
    }

    const deleteOutput= async (id) => {
        await axios.delete(`${OUTPUT_API_URL}/${id}`)
    }


    return ( 
        <>
            <OutputContext.Provider 
                value={{
                    OUTPUT_API_URL,
                    output,              setOutput,              getOutput,
                    loss,                setLoss,                getLoss,
                    stolen,              setStolen,              getStolen,
                    sale,                setSale,                getSale,
                    deterioration,       setDeterioration,       getDeterioration,
                    createOutput,
                    updateOutput,
                    deleteOutput
                }}
        >
            {children}
        </OutputContext.Provider>
        </>
    );
}
export default OutputState;