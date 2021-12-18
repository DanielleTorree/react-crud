export const adicionarLivro = (livro) => {
    return {
        type: 'ADD_LIVRO',
        livro
    }
}

export const editarLivro = (livro) => {
    return {
        type: 'EDI_LIVRO',
        livro
    }
}

export const removerLivro = (idLivro) => {
    return {
        type: 'DEL_LIVRO',
        idLivro
    }
}

export const setEmail = (value) => {
    return {
        type: 'SET_EMAIL',
        payload: value
    }
}

export const setPassword = (value) => {
    return {
        type: 'SET_PASSWORD',
        payload: value
    }
}

export const setAcesso = (value) => {
    return {
        type: 'SET_ACESSO',
        payload: value
    }
}