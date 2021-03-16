import React, { useContext, useEffect } from 'react';
import { useHistory } from "react-router-dom";

/* CONTEX   */
import DataSessionContex from '../context/DataSesion/DataSessionContex';

import '../styles/header.css';

const Header = ({ children }) => {

    const { setEmployee,employee, setRole,role } = useContext(DataSessionContex)
    let history = useHistory();


    const logout = (e) => {
        localStorage.clear()
        setEmployee(null)
        setRole(null)
        history.push("/");
        console.log('logout');
    }

    return (
        <>
            <header className="header p-sticky-0 ">
                <div className="wrapper">
                    <div className="header-grid">
                        <div>
                            <h1>Electronica Uceda</h1>
                            {
                                (employee&&role)

                                    ? (
                                        <>
                                            <p className="header-total">

                                                {employee.name} {employee.lastname} | {role[0].name}
                                                <button
                                                    className="bg-red-600 p-1 ml-3 rounded btn-log"
                                                    onClick=""
                                                    onClick={(e) => {
                                                        logout(e)
                                                    }}
                                                >Cerrar sesion</button>
                                            </p>
                                        </>


                                    )
                                    : ('')

                            }
                        </div>
                        {children}
                    </div>
                </div>
            </header>
        </>
    );
}
export default Header;