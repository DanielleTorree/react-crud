import { combineReducers } from 'redux';

import cadastrar from './cadastrar/reducer';
import { acessoConta } from './acessoConta/reducer';

export default combineReducers({
    cadastrar,
    acessoConta
})