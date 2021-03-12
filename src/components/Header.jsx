import React, { useState } from 'react';
import '../styles/header.css';
const Header = ({children}) => {
    return (
        <>
            <header className="header p-sticky-0 ">
                <div className="wrapper">
                    <div className="header-grid">
                        <div>
                            <h1>Electronica Uceda</h1>
                            <p className="header-total">Alexander</p>
                        </div>
                        {children}
                    </div>
                </div>
            </header>
        </>
    );
}
export default Header;