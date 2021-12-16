import produce from 'immer';

const cadastrar = (state = [], action) => {
    switch(action.type){
        case 'ADD_LIVRO':
            return [...state, action.livro];
        case 'DEL_LIVRO':
            return produce(state, draft => {
                const livrosIndex = draft.findIndex(livro => livro.id === action.idLivro);
                if(livrosIndex >= 0){
                    draft.splice(livrosIndex, 1)
                }
            });
        case 'EDI_LIVRO':
            return produce(state, draft => {
                const livrosIndex = draft.findIndex(livro => livro.id === action.livro.id);
                const livros = state
                    .slice(0, livrosIndex)
                    .concat(state.slice(livrosIndex + 1));
                const newLivros = [...state, livros].sort((a, b) => a.id - b.id);
                draft.push(newLivros)
            })
        default:
            return state;  
    }
}

export default cadastrar;