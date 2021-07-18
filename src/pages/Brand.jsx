import axios from 'axios';
import React, {useState,useEffect} from 'react';
import FormBrand from '../components/Brand/FormBrand';
import TableBrand from '../components/Brand/TableBrand';
const Brand = () => {

    const baseURLbrand ='http://localhost:5000/marca';

    const [brands, setBrands] = useState([])

    const getBrands = async()=>{
        const res = await axios.get(baseURLbrand);
        setBrands(res.data)
    }

    useEffect( async () => {
        await getBrands()
        /* return () => {
            cleanup
        } */
    }, [])


    return ( 
        <div className="main">
            <FormBrand  refreshGetBrands={getBrands}/>
            {
                brands &&
                <TableBrand  brands={brands} refreshGetBrands={getBrands} />
            }
        </div>
    );
}
export default Brand;