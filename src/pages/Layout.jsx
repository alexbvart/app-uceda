import React, { useState } from 'react';
import Dark from '../components/Dark';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import {
    useLocation
} from "react-router-dom";


const Layout = ({ children }) => {

    let location = useLocation();

    const needNavigation = (location) => {
        console.log(location);
        switch (location) {
            case '/':
                return true;
            case '/register':
                return true;
            case '/singup':
                return true;

            default:
                return false;
        }
    }

    let isNeedNavigation = needNavigation(location.pathname)

    return (
        <>
            <Header >
                <Dark />
            </Header>

            {(isNeedNavigation)
                ? (<div className="wrapper">
                    {children}
                </div>)
                : (<div className="grid-wrapper">
                    <Navigation />
                    {children}
                </div>)
            }
        </>
    );
}
export default Layout;