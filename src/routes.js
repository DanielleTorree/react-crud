import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// components
import Menu from './components/Menu';
import TabelaLivros from './components/TabelaLivros';
import CadastrarLivros from './components/CadastrarLivros';
import NotFound from './components/NotFound';

const Rotas = () => {
  const livrosCadastrados = useSelector(state => state.cadastrar);
  console.log(livrosCadastrados);

  return(
      <BrowserRouter>
        <Menu />
        <Switch>
          <Route 
            exact path='/' 
            render={() => 
              <TabelaLivros 
              />
            }
          />
          <Route 
            exact 
            path='/cadastrar' 
            render={() => 
              <CadastrarLivros 
                editarLivro={false}
                livro={{id: 0, isbn: '', titulo:'', autor:''}}
              />
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
                  <CadastrarLivros 
                    editarLivro={true}
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

export default Rotas;