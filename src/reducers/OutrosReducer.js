import { 
    ADICIONANDO_CONTATOS_COM_SUCESSO,
    MODIFICA_EMAIL_CONTATO_ADICIONADO,

    MODIFICA_O_TITULO,
    CADASTRO_FEED_SUCESSO,
    CADASTRO_FEED_ERRO,
    CADASTRO_ESTA_CARREGANDO,
    MODIFICAR_TITULO_POST,
    MODIFICAR_DESCRICAO_POST,
    CADASTRO_POST_SUCESSO,
    CADASTRO_POST_ERRO
} from '../actions/types';

const INITIAL_STATE = {
    email_contato_adicionado: '',
    cadastro_resultado_inclusao: false,

    carregando_cadastro: false,
    titulo:'',
    titulo_post:'',
    descricao_post:'',
    
   
};

export default (state = INITIAL_STATE, action) => {
    
    switch(action.type) {
        case MODIFICA_EMAIL_CONTATO_ADICIONADO:
            return { ...state, email_contato_adicionado: action.payload }

        case ADICIONANDO_CONTATOS_COM_SUCESSO:
            return { ...state, cadastro_resultado_inclusao: action.payload }
        


        case MODIFICA_O_TITULO:
            return{ ...state, titulo: action.payload }
        
        case CADASTRO_FEED_SUCESSO:
            return {...state, carregando_cadastro: false}

        case CADASTRO_FEED_ERRO:
            return { ...state, carregando_cadastro: false }
        
        case CADASTRO_ESTA_CARREGANDO:
            return { ...state, carregando_cadastro: true}
        
        case MODIFICAR_TITULO_POST:
            return {...state, titulo_post: action.payload}
        
        case MODIFICAR_DESCRICAO_POST:
            return {...state, descricao_post: action.payload}

        case CADASTRO_POST_SUCESSO:
            return {...state, carregando_cadastro: false}

        case CADASTRO_POST_ERRO:
            return { ...state, carregando_cadastro: false }
            

        default:
            return state;
    }
}