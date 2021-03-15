import React, { useContext } from 'react';
import DataSessionContex from '../context/DataSesion/DataSessionContex';
import { useHistory } from "react-router-dom";

import '../styles/header.css';
const Header = ({ children }) => {

    const { data } = useContext(DataSessionContex)
    let history = useHistory();


    const logout = (e) => {
        localStorage.clear()
        history.push("/");
        console.log('logout');
/*         data = '' */
    }

    return (
        <>
            <header className="header p-sticky-0 ">
                <div className="wrapper">
                    <div className="header-grid">
                        <div>
                            <h1>Electronica Uceda</h1>
                            <p className="header-total">
                                {
                                    (data)
                                        ? (`${data.employee.name} ${data.employee.lastname} | ${data.workstation.name}`)
                                        :('')
                            }
                            <button 
                                className="bg-red-600 p-1 rounded-b-none" 
                                onClick=""
                                onClick={(e) => {
                                    logout(e)
                                }}
                            >Cerrar sesion</button>
                            </p>
                        </div>
                        {children}
                    </div>
                </div>
            </header>
        </>
    );
}
export default Header;