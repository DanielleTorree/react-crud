import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setEmail, setPassword, setAcesso } from '../actions';
import './login.css'
import { Redirect } from 'react-router-dom';

const Login = () => {
    const dispatch = useDispatch(); 
    const [aces, setAces] = useState({
        email: '',
        password: '',
        acesso: false,   
    })
    const handleLogin = (e) => {
        e.preventDefault();
    }

    if(aces.acesso){
        return <Redirect to='/'/>
    }
    return(
        <form className='container' name='login' onSubmit={handleLogin}>
            <p>
                <label htmlFor='email'>Email:</label>
                <input
                    type='email'
                    onChange={(e) => {
                        setAces({...aces, email: e.target.value});
                        dispatch(setEmail(e.target.value));
                    }}
                />
            </p>
            <p>
                <label htmlFor='password'>Senha:</label>
                <input
                    type='password'
                    onChange={(e) => {
                        setAces({...aces, password: e.target.value});
                        dispatch(setPassword(e.target.value));
                    }}
                />
            </p>
            <p>
                <button 
                    type='submit'
                    onClick={() => {
                        if(aces.email !== '' && aces.password !== ''){
                            setAces({...aces, acesso: true})
                            dispatch(setAcesso(true));
                        }
                    }}
                >Login</button>
            </p>
        </form>
    );
}

export default Login;