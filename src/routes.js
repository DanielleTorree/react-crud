import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

// components
import Header from './components/Header';
import TabelaLivros from './components/TabelaLivros';
import CadastrarLivros from './components/CadastrarLivros';
import NotFound from './components/NotFound';
import Login from './components/Login';
import Home from './components/Home';

const Rotas = () => {
  const livrosCadastrados = useSelector(state => state.cadastrar);
  const acessoConta = useSelector(state => state.acessoConta);

  return(
      <BrowserRouter>
        <Header />
        <Switch>
          <Route 
            exact path='/' 
            render={() => 
              acessoConta.acesso ? (
                <TabelaLivros />
              ) : (
                <Home />
              )              
            }
          />
          <Route 
            exact 
            path='/cadastrar' 
            render={() => 
              acessoConta.acesso && (
                <CadastrarLivros 
                  editarLivro={false}
                  livro={{id: 0, isbn: '', titulo:'', autor:''}}
                />
              )
            }
          />
          <Route exact path='/login' 
            render={() => 
              !acessoConta.acesso ? (
                <Login />
              ) : (
                <Redirect to='/' /> 
              )
            }
          />
          <Route 
            exact
            path='/editar/:isbnLivro'
            render={(props) => {
              const livro = livrosCadastrados.find(
                livro => livro.isbn === props.match.params.isbnLivro
              )
              if(livro){
                return (
                  acessoConta.acesso && (
                    <CadastrarLivros 
                      editarLivro={true}
                      livro={livro}
                    />
                ));
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

export default Rotas;