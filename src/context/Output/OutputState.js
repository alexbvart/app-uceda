import axios from 'axios';
import React, {useState} from 'react';
import OutputContext from './OutputContext'


const OutputState = ({children}) => {

    const OUTPUT_API_URL =`${process.env.REACT_APP_API}/salidas`;
    const OUTPUT_CONCEPT_API_URL =`${process.env.REACT_APP_API}/conceptosalidas`;

    const [output, setOutput]               = useState([])
    const [sale, setSale]                   = useState([])
    const [concepts, setConcepts]           = useState([])

    
    const getOutput = async()=>{
        const res = await axios.get(`${OUTPUT_API_URL}/all`);
        console.log(res.data);
        setOutput(res.data) 
    }

    const getSale = async()=>{
        const res = await axios.get(`${OUTPUT_API_URL}/sale`);
        console.log(res.data);
        setSale(res.data) 
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

    
    const getOutflowsConcepts = async()=>{
        const res = await axios.get(`${OUTPUT_CONCEPT_API_URL}`);
        setConcepts(res.data)
    }
    const deleteOutflowsConcepts= async (id) => {
        await axios.delete(`${OUTPUT_CONCEPT_API_URL}/${id}`)
        getOutflowsConcepts()
    }

    return ( 
        <>
            <OutputContext.Provider
                value={{
                    OUTPUT_API_URL,
                    output,              setOutput,              getOutput,
                    sale,                setSale,                getSale,
                    createOutput,
                    updateOutput,
                    deleteOutput,
                    OUTPUT_CONCEPT_API_URL,
                    concepts,            setConcepts,            getOutflowsConcepts,
                    deleteOutflowsConcepts
                }}
        >
            {children}
        </OutputContext.Provider>
        </>
    );
}
export default OutputState;