import axios from 'axios';
import React, {useState,useEffect} from 'react';
import FormEmployees from '../components/Employees/FormEmployess';
import TableEmployees from '../components/Employees/TableEmployees';

const Employees = () => {

    const baseURLempleado ='http://localhost:5000/empleado';

    const [employees, setEmployees] = useState([])

    const getEmployees = async()=>{
        const res = await axios.get(baseURLempleado);
        setEmployees(res.data)
    }

    useEffect( async () => {
        await getEmployees()
        /* return () => {
            cleanup
        } */
    }, [])


    return ( 
        <div className="main">
            <FormEmployees  refreshGetEmployees={getEmployees} />
            <TableEmployees refreshGetEmployees={getEmployees} employees={employees} />
        </div>
    );
}
export default Employees;