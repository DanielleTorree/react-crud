import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const CadastrarLivros = (props) => {
    const dispatch = useDispatch();
    const [livro, setLivro] = useState({
        id: props.livro.id,
        isbn: props.livro.isbn,
        titulo: props.livro.titulo,
        autor: props.livro.autor,
    });
    const [redirecionar, setRedirecionar] = useState(false);

    const handleLivroForm = e => {
        e.preventDefault();
        if(props.editarLivro){
            handleEdi(livro);
        } else{
            handleAdd(livro);
        }
        setRedirecionar(true);
    }

    if(redirecionar){
        return <Redirect to='/'/>
    }

    const handleAdd = (livro) => {
        dispatch({
            type: 'ADD_LIVRO',
            livro
        })
    }

    const handleEdi = (livro) => {
        dispatch({
            type: 'EDI_LIVRO',
            livro
        })
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
                    // defaultValue={livro.isbn}
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
                    // defaultValue={livro.titulo}
                    // ref='titulo' 
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
                    // defaultValue={livro.autor}
                    // ref='autor'
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