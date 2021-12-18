import React from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
    const livrosCadastrados = useSelector(state => state.cadastrar);
    const acessoConta = useSelector(state => state.acessoConta);
    return(
        <div className='livros'>
            <h1>Tabela de livros</h1>
            {livrosCadastrados.length === 0 && <h2>Nenhum livro cadastrado</h2>}
            {acessoConta.acesso === false && <h3>Faça login para cadastrar seus livros</h3>}
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
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default Home;