import axios from 'axios';
import React, {useState} from 'react';
import SaleContext from './SaleContext';

const SaleState = ({children}) => {

    const SALE_API_URL =`${process.env.REACT_APP_API}/venta`;

    const [sales, setSales] = useState([])

    const getSales = async()=>{
        const res = await axios.get(SALE_API_URL);
        console.log(res.data);
        setSales(res.data) 
        /* setSales(res.data.sale)  */
    }

    const deleteSale = async (id) => {
        await axios.delete(`${SALE_API_URL}/${id}`)
        getSales();
    }


    const [detail, setDetail] = useState([])
    const [detailRender, setDetailRender] = useState([])

    const getDetail = async()=>{
        /* const res = await axios.get(SALE_API_URL);
        console.log(res.data);
        setDetail(res.data.sale)  */
        /* setSales(res.data.sale)  */
    }

    const deleteDetail = async (id) => {
        /* await axios.delete(`${SALE_API_URL}/${id}`) */
        getDetail();
    }

    return ( 
        <>
            <SaleContext.Provider 
                value={{
                    SALE_API_URL,
                    sales,
                    getSales,
                    deleteSale,
                    detail,
                    setDetail,
                    getDetail,
                    detailRender,
                    setDetailRender,
                    deleteDetail
                }}
        >
            {children}
        </SaleContext.Provider>
        </>
    );
}
export default SaleState;