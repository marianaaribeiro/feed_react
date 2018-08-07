import React, { Component } from 'react';
import { View, 
         TextInput, 
         Button, 
         ImageBackground, 
         Text, 
         ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { 
    modificaOTitulo,
    cadastrarFeed,
} from '../actions/OutrasActions';
import _ from 'lodash';

class CadastroFeed extends Component {

    _cadastrarFeed() {

        const { titulo } = this.props;

        this.props.cadastrarFeed({ titulo });
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
                            onPress={() => this._cadastrarFeed()} 
                        />
        )
    }
     

    render() {  
        
        return (
            <ImageBackground style={{ flex: 1, width: null }} source={require('../imgs/3.jpg')}>
                <View 
                    style={{ flex: 1, padding: 10}}>

                    <View style={{ flex: 3, justifyContent: 'center', }}>
                      <View style={{backgroundColor: "#FFD7D7", height: 180, borderRadius:10, justifyContent: 'center', padding:10 }}>
                        <TextInput
                            value={this.props.titulo} 
                            placeholder="Titulo" 
                            placeholderTextColor='#000' 
                            style={{ fontSize: 20, height: 45 }} 
                            onChangeText={texto => this.props.modificaOTitulo(texto)} 
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
            titulo: state.OutrosReducer.titulo,
            carregando_cadastro: state.OutrosReducer.carregando_cadastro
            
        }
    );
}

export default connect(
    mapStateToProps, 
    {
        modificaOTitulo,
        cadastrarFeed
    }
)(CadastroFeed);