import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import ButtonSubmit from '../utils/ButtonSubmit';


axios.interceptors.request.use(
    async config => {
        const token = localStorage.getItem('token');;
        console.log(token);
        if (token) {

            config.headers = {
                'Access-Control-Allow-Headers': 'x-access-token',
                'X-WP-Nonce': 'my-wp-nonce-here',
                'x-access-token': token,
                'Content-Type': 'application/json'
            }
        }

        return config;
    },
    error => {
        return Promise.reject(error);
    }
);


const Login = () => {

    const URLsignin = "http://localhost:5000/signin";

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const storedJwt = localStorage.getItem('token');
    const [jwt, setJwt] = useState(storedJwt || null);

    let history = useHistory();


    const onChangeUsername = (e) => {
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


    const onSubmitLogin = async (e) => {
        e.preventDefault();
        console.log("user:", username.username, "  pass:", password.password);
        const res = await axios.post(URLsignin, {
            username: username.username,
            password: password.password
        })
        console.log('data: ', res.data);
        setJWT(res.data)
        history.push("/venta");
    }

    const setJWT = async (dataToken) => {
        /*  const { data } = await axios.get(`${apiUrl}/jwt`); */
        localStorage.setItem('data', JSON.stringify(dataToken));


        localStorage.setItem('token', dataToken.token);
        setJwt(dataToken.token);
        console.log('aun no nfallo');
    };


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
                    <ButtonSubmit />
                </form>
            </div>
        </>
    );
}
export default Login;