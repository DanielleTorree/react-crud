const INITIAL_STATE = {
    email: '',
    password: '',
    acesso: false
}
export const acessoConta = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;
    switch(type){
        case 'SET_EMAIL':
            return {...state, email: payload};
        case 'SET_PASSWORD':
            return {...state, password: payload};
        case 'SET_ACESSO':
            return {...state, acesso: payload};
        default:
            return  state;
    }
} 