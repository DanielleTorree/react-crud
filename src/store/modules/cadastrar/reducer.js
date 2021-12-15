const cadastrar = (state = [], action) => {
    console.log(state)
    switch(action.type){
        case 'ADD_LIVRO':
            return [ ...state, action.livro];
        default:
            return state;  
    }
}

export default cadastrar;