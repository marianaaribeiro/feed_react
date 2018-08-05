import { 
    ADICIONANDO_CONTATOS_COM_SUCESSO,
    MODIFICA_EMAIL_CONTATO_ADICIONADO
} from '../actions/types';

const INITIAL_STATE = {
    email_contato_adicionado: '',
    cadastro_resultado_inclusao: false,
   
};

export default (state = INITIAL_STATE, action) => {
    
    switch(action.type) {
        case MODIFICA_EMAIL_CONTATO_ADICIONADO:
            return { ...state, email_contato_adicionado: action.payload }

        case ADICIONANDO_CONTATOS_COM_SUCESSO:
            return { ...state, cadastro_resultado_inclusao: action.payload }
        

        default:
            return state;
    }
}