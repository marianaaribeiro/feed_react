import React, { Component } from 'react';
import { View, 
         TextInput, 
         Button, 
         ImageBackground, 
         Text, 
         ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { 
    modificaEmail, 
    modificaSenha,
    modificaNome, 
    cadastraUsuario
} from '../actions/AutenticacaoActions';

class Cadastro extends Component {

    _cadastraUsuario() {

        const { nome, email, senha } = this.props;

        this.props.cadastraUsuario({ nome, email, senha });
    }


    renderBtCadastro() {

        if(this.props.carregando_cadastro) {
            return (
                <ActivityIndicator size="large"/>
            )
        }

        return (
            <Button 
                            title="Cadastrar" 
                            color='#D67A7A' 
                            onPress={() => this._cadastraUsuario()} 
                        />
        )
    }
     

    render() {  
        
        return (
            <ImageBackground style={{ flex: 1, width: null }} source={require('../imgs/12.jpg')}>
                <View 
                    style={{ flex: 1, 
                             padding: 10,
                              }}>

                    <View style={{ flex: 3, justifyContent: 'center', }}>
                      <View style={{backgroundColor: "#FFD7D7", height: 180, borderRadius:10, justifyContent: 'center', padding:10 }}>
                        <TextInput
                            value={this.props.nome} 
                            placeholder="Nome" 
                            placeholderTextColor='#000' 
                            style={{ fontSize: 20, height: 45 }} 
                            onChangeText={texto => this.props.modificaNome(texto)} 
                        />
                        <TextInput 
                            value={this.props.email} 
                            placeholder="E-mail" 
                            placeholderTextColor='#000' 
                            style={{ fontSize: 20, height: 45 }} 
                            onChangeText={texto => this.props.modificaEmail(texto)} 
                        />
                        <TextInput 
                            secureTextEntry 
                            value={this.props.senha} 
                            placeholder="Senha" 
                            placeholderTextColor='#000' 
                            style={{ fontSize: 20, height: 45 }} 
                            onChangeText={texto => this.props.modificaSenha(texto)} 
                        />                       
                     </View>
                    
                     <View>
                            <Text style={{ color: "#ff0000", fontSize: 20 }}> {this.props.textoErro} </Text>
                    </View>
                    

                    </View>
                    <View style={{ flex: 1 }}>
                        {this.renderBtCadastro()}
                    </View>
                </View>
            </ImageBackground>
        );

        
    }
}

const mapStateToProps = state => { 
    console.log(state);
    
    return (
        {
            nome: state.AutenticacaoReducer.nome,
            email: state.AutenticacaoReducer.email,
            senha: state.AutenticacaoReducer.senha,
            textoErro: state.AutenticacaoReducer.textoErro,
            carregando_cadastro: state.AutenticacaoReducer.carregando_cadastro
            
        }
    );
}

export default connect(
    mapStateToProps, 
    {
        modificaEmail,
        modificaSenha, 
        modificaNome,
        cadastraUsuario
    }
)(Cadastro);