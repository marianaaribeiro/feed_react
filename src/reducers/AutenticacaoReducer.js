import { MODIFICA_EMAIL,
    MODIFICA_SENHA,
    MODIFICA_NOME,
    ERRO_DE_CADASTRO, 
    CADASTRO_COM_SUCESSO,
    LOGIN_EFETUADO_COM_ERRO,
    LOGIN_ESTA_CARREGANDO,
    CADASTRO_ESTA_CARREGANDO                               
 } from '../actions/types';


const INITIAL_STATE = {
    nome: '',
    email: '',
    senha: '',
    textoErro: '',
    textoErroLogin: '',
    carregando_login: false,
    carregando_cadastro: false
}

export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch(action.type){
        case MODIFICA_EMAIL:
            return { ...state, email: action.payload }
        case MODIFICA_SENHA:
            return { ...state, senha: action.payload }
        case MODIFICA_NOME:
            return { ...state, nome: action.payload }
        case ERRO_DE_CADASTRO:
            return { ...state, textoErro: action.payload, carregando_cadastro: false }
        case CADASTRO_COM_SUCESSO:
            return { ...state, senha:'', nome:'', carregando_cadastro: false }
        case LOGIN_EFETUADO_COM_ERRO:
            return { ...state, textoErroLogin: action.payload, carregando_login: false}
        case LOGIN_ESTA_CARREGANDO:
            return { ...state, carregando_login: true}
        case CADASTRO_ESTA_CARREGANDO:
            return { ...state, carregando_cadastro: true}

        default:
            return state;
        
    }
 
  

}