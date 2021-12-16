import React from 'react';
// import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/index';

// components
// import Menu from './components/Menu';
// import TabelaLivros from './components/TabelaLivros';
// import CadastrarLivros from './components/CadastrarLivros';
// import NotFound from './components/NotFound';

// routes
import Rotas from './routes';

const App = () => {
  // const [livros, setLivros] = useState([]);

  // const editarLivro = (livro) => {
  //   const index = livros.findIndex(p => p.id === livro.id);
  //   const listaLivros = livros
  //     .slice(0, index)
  //     .concat(livros.slice(index + 1));
    
  //   const newLivros = [...listaLivros, livro].sort((a, b) => a.id - b.id);
  //   setLivros(newLivros);
  // }

  return (
    <Provider store={store}>
      <Rotas />
      {/* <BrowserRouter>
          <Menu />
          <Switch>
            <Route 
              exact path='/' 
              render={() => 
                <TabelaLivros/>
              }
            />
            <Route 
              exact 
              path='/cadastrar' 
              render={() => 
                <CadastrarLivros 
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
      </BrowserRouter> */}
    </Provider>
  );
}

export default App;
