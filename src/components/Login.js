import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setEmail, setPassword } from '../actions';

const Login = () => {
    const dispatch = useDispatch(); 
    const [acesso, setAcesso] = useState({
        email: '',
        password: ''  
    })
    
    const handleLogin = (e) => {
        e.preventDefault();
        console.log(acesso.email, acesso.password)
    }

    const contaAcesso = useSelector(state => state.cadastrar);

    return(
        <form className='container' name='login' onSubmit={handleLogin}>
            <p>
                <label htmlFor='email'>Email:</label>
                <input
                    type='email'
                    onChange={(e) => {
                        setAcesso({...acesso, email: e.target.value})
                        dispatch(setEmail(e.target.value))
                    }}
                />
            </p>
            <p>
                <label htmlFor='password'>Senha:</label>
                <input
                    type='password'
                    onChange={(e) => {
                        setAcesso({...acesso, password: e.target.value})
                        dispatch(setPassword(e.target.value))
                    }}
                />
            </p>
            <p>
                <button 
                    type='submit'
                    disable={!acesso.email && !acesso.password}
                >Login</button>
            </p>
        </form>
    );
}

export default Login;