import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setEmail, setPassword, setAcesso } from '../actions';

const Header = () => {
    const dispatch = useDispatch();
    const acessoConta = useSelector(state => state.acessoConta);


    return(
        <nav className='menu'>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                {
                    acessoConta.acesso && (
                        <li>
                            <Link to='/cadastrar'>Cadastrar</Link>
                        </li>
                    )
                }
                {
                    !acessoConta.acesso && (
                        <li>
                            <Link to='/login'>Login</Link>
                        </li>
                    )
                }
                {
                    acessoConta.acesso && (
                        <li>
                            <button className="btnLink" onClick={() => {
                                dispatch(setAcesso(false));
                                dispatch(setEmail(''));
                                dispatch(setPassword(''));
                                <Redirect to='/'/>
                            }}>Logout</button>
                        </li>
                    )
                }
            </ul>
        </nav>
    )
}

export default Header;