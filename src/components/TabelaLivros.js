import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import { useSelector, useDispatch } from 'react-redux';

const TabelaLivros = () => {
    const dispatch = useDispatch();
    const livrosCadastrados = useSelector(state => state.cadastrar);
    const [modalVisible, setModalVisible] = useState(false);
    const [idLivro, setIdLivro] = useState('');

    const remover = () => {
        dispatch({
            type: 'DEL_LIVRO',
            idLivro
        })
    }

    return(
        <div className='livros'>
            <h1>Tabela de livros</h1>
            {livrosCadastrados.length === 0 && <h2>Nenhum livro cadastrado</h2>}
            {livrosCadastrados.length > 0 && (
                <table className='tabela'>
                    <thead>
                        <tr>
                            <th width='17%'>ISBN</th>
                            <th>Título</th>
                            <th>Autor</th>
                            <th width='7%'></th>
                            <th width='9%'></th>
                        </tr>
                    </thead>
                    <tbody>
                        {livrosCadastrados.map(livro => (
                            <tr key={livro.isbn}>
                                <td>{livro.isbn}</td>
                                <td>{livro.titulo}</td>
                                <td>{livro.autor}</td>
                                <td>
                                    <button className='botao editar'>
                                        <Link to={`/editar/${livro.isbn}`}>Editar</Link>
                                    </button>
                                </td>
                                <td>
                                    <button 
                                        className='botao remover'
                                        onClick={() => { 
                                            setModalVisible(true);
                                            setIdLivro(livro.id);
                                        }}
                                    >Remover</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            <Modal 
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
                title='Remover este livro'
                buttonName='Confirmar'
                onConfirmar={() =>  {
                    setModalVisible(false);
                    remover();
                }}
            />
        </div>
    )
}

export default TabelaLivros;