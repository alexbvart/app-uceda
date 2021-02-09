import axios from 'axios';
import React, { useState } from 'react';
import ButtonSubmit from '../utils/ButtonSubmit';
import Input from '../utils/Input';
const Login = () => {

    const URLsignin = "http://localhost:5000/signin";

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const onChangeUsername = (e) =>{
        setUsername({
            username: e.target.value
        })
        console.log(username.username);
    } 
    const onChangePassword = (e) => {
        setPassword({
            password: e.target.value
        })
    }

    const onSubmitLogin = async (e) =>{
        e.preventDefault();
        console.log("user:",username.username,"  pass:",password.password);
        const res = await axios.post(URLsignin,{
            username: username.username,
            password: password.password
        })
        console.log(res.data.token);
    }

    return (
        <>
            <div className="wrapper">
                <h1>Inicio de Sesión</h1>
                <form action="" onSubmit={onSubmitLogin}>

                <div className="input-wrapper">
                    <label htmlFor="username">Username</label>
                    <input 
                        type="text" 
                        name="username" 
                        id="username" 
                        className="input"
                        onChange={(e) => {
                            onChangeUsername(e)
                        }}
                    />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        className="input"
                        onChange={(e) => {
                            onChangePassword(e)
                        }}
                    />
                </div>
                    {/* <Input 
                        type="text" 
                        name="username" 
                        onChange={(e) => {
                            onChangeUsername(e)
                        }}
                    /> */}
                    {/* <Input type="password" name="password" /> */}
                    <ButtonSubmit />
                </form>
            </div>
        </>
    );
}
export default Login;