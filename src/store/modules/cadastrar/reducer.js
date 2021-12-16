import produce from 'immer';

const initialState = []; 

const cadastrar = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_LIVRO':
            return [...state, action.livro];
        case 'DEL_LIVRO':
            return produce(state, draft => {
                const livrosIndex = draft.findIndex(livro => livro.id === action.idLivro);
                if(livrosIndex >= 0){
                    draft.splice(livrosIndex, 1);
                }
            });
        case 'EDI_LIVRO':
            return initialState;
        default:
            return state;  
    }
}

export default cadastrar;