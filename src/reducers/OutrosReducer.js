import { 
    

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
    

    carregando_cadastro: false,
    titulo:'',
    titulo_post:'',
    descricao_post:'',
    
   
};

export default (state = INITIAL_STATE, action) => {
    
    switch(action.type) {

        case MODIFICA_O_TITULO:
            return{ ...state, titulo: action.payload }
        
        case CADASTRO_FEED_SUCESSO:
            return {...state,titulo:'', carregando_cadastro: false}

        case CADASTRO_FEED_ERRO:
            return { ...state, carregando_cadastro: false }
        
        case CADASTRO_ESTA_CARREGANDO:
            return { ...state, carregando_cadastro: true}
        
        case MODIFICAR_TITULO_POST:
            return {...state, titulo_post: action.payload}
        
        case MODIFICAR_DESCRICAO_POST:
            return {...state, descricao_post: action.payload}

        case CADASTRO_POST_SUCESSO:
            return {...state, titulo_post:'', descricao_post:'', carregando_cadastro: false}

        case CADASTRO_POST_ERRO:
            return { ...state, carregando_cadastro: false }
            

        default:
            return state;
    }
}