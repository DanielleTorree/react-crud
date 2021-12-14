import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

// components
import Menu from './components/Menu';
import TabelaLivros from './components/TabelaLivros';
import CadastrarLivros from './components/CadastrarLivros';
import NotFound from './components/NotFound';

const App = () => {

  const [livros, setLivros] = useState([]);

  const inserirLivro = (livro) => {
    livro.id = livro.isbn;
    setLivros(prevLivros => ([...prevLivros, livro]));
  }

  const editarLivro = (livro) => {
    const index = livros.findIndex(p => p.id === livro.id);
    const listaLivros = livros
      .slice(0, index)
      .concat(livros.slice(index + 1));
    
    const newLivros = [...listaLivros, livro].sort((a, b) => a.id - b.id);
    setLivros(newLivros);
  }

  const removerLivro = (idLivro) => {
    if(window.confirm('Remover este livro?')){
      const novaListaLivros = livros.filter(livro => livro.id !== idLivro);
      setLivros(novaListaLivros)
    }
  }

  return (
    <BrowserRouter>
        <Menu />
        <Switch>
          <Route 
            exact path='/' 
            render={() => 
              <TabelaLivros 
                livros={livros} 
                removerLivro={removerLivro}
              />
            }
          />
          <Route 
            exact 
            path='/cadastrar' 
            render={() => 
              <CadastrarLivros 
                inserirLivro={inserirLivro}
                livro={{id: 0, isbn: '', titulo:'', autor:''}}
              />
            }
          />
          <Route 
            exact
            path='/editar/:isbnLivro'
            render={(props) => {
              const livro = livros.find(
                livro => livro.isbn === props.match.params.isbnLivro
              )
              if(livro){
                return (
                  <CadastrarLivros 
                    editarLivro={editarLivro}
                    livro={livro}
                  />
                );
              } else{
                return <Redirect to='/' />  
              }   
            }}
          />
          <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
