import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import SaleContext from '../../context/Sale/SaleContext';

const FormSale = () => {


    const { SALE_API_URL, detailRender, getSales, detail,setDetail } = useContext(SaleContext)

    const [client, setClient] = useState([])

    const CLIENT_API_URL = 'http://localhost:5000/cliente';

    const getClient = async () => {
        const res = await axios.get(CLIENT_API_URL);
        console.log(res.data);
        setClient(res.data)
        setClientSelected({
            clientSelected: res.data[0]._id
        })
    }

    const [date, setDate] = useState(new Date)
    const [total, setTotal] = useState(0)
    const [clientSelected, setClientSelected] = useState('')

    const onAllInputChange = (e) => {

        const input = e.target.name
        switch (input) {
            case 'date':
                setDate({
                    date: e.target.value
                })
                break;
            case 'total':
                setTotal({
                    total: e.target.value
                })
                break;
            case 'clientSelected':
                setClientSelected({
                    clientSelected: e.target.value
                })
                break;
            default:
                break;
        }
        console.log(input, e.target.value);
    }

    useEffect(() => {
        getClient()
        
    }, [])

    const refreshDetails = () => {
        setDetail([])
    }

    const getTotal = (detailRender) => {
        let totalpush = 0
        detailRender.forEach(element => {
            totalpush = parseFloat(totalpush) + parseFloat(element.subtotal)
        });
        return totalpush;
    } 
    let totalPost = getTotal(detailRender);
    /* let totalForm = document.getElementById('total')
    totalForm.value = parseInt(totalPost) */
    /* total.total = parseInt(totalPost) */
   

     
    /* const totalPost = detail.reduce((accumulator, subtotal) => accumulator + subtotal,0);
 */

    console.log('taotal reducer: ',totalPost);

    const onSubmitForm = async (e) => {
        e.preventDefault();
        console.log(date.date,total.total,clientSelected.clientSelected);
        const NewSale = {
            date: Date(date.date),
            total: totalPost,
            client: clientSelected.clientSelected,
            details: detail
        }
        const res = await axios.post(SALE_API_URL, NewSale);
        console.log(res); 
        console.log("actual venta: ",NewSale);
        await refreshDetails()
        await getSales();
        e.target.reset();
    }


    return (
        <>
            <form onSubmit={onSubmitForm} className="-mx-3 md:flex mb-2 md:content-end">
                <div className="md:w-1/2 px-3 mb-4 md:mb-0">
                    <label htmlFor="categorySelected">Cliente</label>
                    <select
                        name="clientSelected"
                        onChange={onAllInputChange}
                        value={clientSelected.clientSelected}
                        className="mt-1 block w-full py-3 px-4 bg--cardGray rounded-md shadow-sm focus:outline-none ">
                        {client.map((item) => (
                            <option key={item._id} value={item._id}>{item.name} </option>
                        ))
                        }
                    </select>
                </div>
                <div className="md:w-1/2 px-3">
                    <label forhtml='total'>total</label>
                    <input
                        type='number'
                        name='total'
                        id='total'
                        placeholder='Total'
                        className='input'
                        onChange={onAllInputChange}
                        disabled
                    ></input>
                </div>
                <div className="md:w-1/2 px-3">
                    <label forhtml='date'>Fecha</label>
                    <input
                        type='date'
                        name='date'
                        placeholder='date'
                        className='input'
                    ></input>
                </div>
                <div className="md:w-1/2 px-3">
                    <label forhtml='cuantity'>&nbsp;</label>
                    <button
                        type='submit'
                        className='button button-primary'
                        name='enviar'
                    >
                        Agregar
                        </button>
                </div>
            </form>
        </>
    );
}
export default FormSale;