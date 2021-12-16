import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { adicionarLivro, editarLivro } from '../actions';

const CadastrarLivros = (props) => {
    const dispatch = useDispatch();
    const [livro, setLivro] = useState({
        id: props.livro.id,
        isbn: props.livro.isbn,
        titulo: props.livro.titulo,
        autor: props.livro.autor,
    });
    const [redirect, setRedirect] = useState(false);

    const handleLivroForm = e => {
        e.preventDefault();
        if(props.editarLivro){
            dispatch(editarLivro(livro));
        } else{
            dispatch(adicionarLivro(livro));
        }
        setRedirect(true)        
    }
    if(redirect){
        return <Redirect to='/'/>
    }

    return(
        <form onSubmit={handleLivroForm}>
            {props.editarLivro ?  <h1>Editar livro</h1> : <h1>Cadastrar livro</h1>}
            <p>
                <label>
                    ISBN: Formato - (
                        <span style={{color: 'red'}}> 978-85-7522-xxx-x </span>
                    )
                </label>
                <input 
                    type='text' 
                    autoFocus 
                    id="fisbn" 
                    pattern='^978-85-7522-[0-9]{3}-[0-9]{1}$' 
                    value={livro.isbn}
                    onChange={e => {
                        setLivro({
                            ...livro,
                            isbn: e.target.value
                        })
                    }}
                />
            </p>
            <p>
                <label>Título</label>
                <input 
                    type='text'
                    id='ftitulo' 
                    required 
                    value={livro.titulo}
                    onChange={e => {
                        setLivro({
                            ...livro,
                            titulo: e.target.value
                        })
                    }}
                />
            </p>
            <p>
                <label>Autor</label>
                <input 
                    type='text' 
                    id='fautor' 
                    required 
                    value={livro.autor}
                    onChange={e => {
                        setLivro({
                            ...livro,
                            autor: e.target.value
                        })
                    }}
                />
            </p>
            <p>
                <button type='submit' className='botao cadastrar'>{props.editarLivro ? 'Salvar' : 'Cadastrar'}</button>
            </p>
        </form>
    );
}

export default CadastrarLivros;