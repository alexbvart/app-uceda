import React, {useState} from 'react';
import "../styles/input.css";

const Input = ({type,name}) => {
    return ( 
        <div className="input-wrapper">
            <label htmlFor={name}>{name}</label>
            <input type={type} name={name} id={name} className="input"/>
        </div>
    );
}
export default Input;