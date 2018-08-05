import React, {Component} from 'react';
import { View, 
         Text, 
         TextInput, 
         Button, 
         TouchableHighlight, 
         ImageBackground,
         ActivityIndicator } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { modificaEmail,
         modificaSenha,
         autenticandoUsuario } from '../actions/AutenticacaoActions';

class Login extends Component {
    
    _autenticandoUsuario() {
        //recuperando os valores dos objetos
        const {email, senha} = this.props;

        //enviando os valores dos objetos via props para esta função
        this.props.autenticandoUsuario({email, senha})
    };

    renderBtLogin() {

        if(this.props.carregando_login){
            return (
                <ActivityIndicator size="large"/>
            )
        }
        return (
        <Button title="Acessar" 
                            color='#D67A7A' 
                            onPress={() => this._autenticandoUsuario() } />
        )
    }



    render() {
    return (
        <ImageBackground style={{ flex: 1,
                                 width: null }} 
                         source={require('../imgs/1.jpg')}>

            <View style={{ flex: 1,
                           padding: 30 }}>


                <View style={{ flex: 1, 
                               justifyContent: 'center', 
                               alignItems: 'center' }}>

                    <Text style={{ fontSize: 25, 
                                   color: '#fff' }}>ZAP ZAP Corporation </Text>
                </View>


                <View style={{ flex: 1, 
                               justifyContent: 'center', 
                               alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, 
                                   color: '#fff' }}>#FALA AE MANO</Text>
                </View>


                <View style={{ flex: 2}}>
                    <TextInput value={this.props.email} 
                               style={{ fontSize: 20, 
                                        height: 45, 
                                        color:"#fff"}} 
                               placeholder='E-mail' 
                               placeholderTextColor='#fff' 
                               onChangeText={texto => this.props.modificaEmail(texto) } />

                    <TextInput secureTextEntry 
                               value={this.props.senha} 
                               style={{ fontSize: 20, 
                                        height: 45, 
                                        color:"#fff" }} 
                               placeholder='Senha' 
                               placeholderTextColor='#fff' 
                               onChangeText={texto => this.props.modificaSenha(texto) } />
                    
                    <TouchableHighlight onPress={() => Actions.Cadastro() }>
                        <Text style={{ fontSize: 20, 
                                       color: '#fff', 
                                       paddingTop:40 }}>
                                       Ainda não tem cadastro? Cadastre-se</Text>
                    </TouchableHighlight>
                </View>


                <View>
                            <Text style={{ color: "#ff0000", fontSize: 20 }}> {this.props.textoErroLogin} </Text>
                </View>

                <View style={{ flex: 1}}>
                    {this.renderBtLogin()}
                </View>

            </View>
        </ImageBackground>
    );
}
}

const mapStateToProps = state => (
    {
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha,
        textoErroLogin: state.AutenticacaoReducer.textoErroLogin,
        carregando_login: state.AutenticacaoReducer.carregando_login
    }
)

export default connect(mapStateToProps, 
                              { modificaEmail, 
                                modificaSenha,
                                autenticandoUsuario 
                              })
                              (Login);