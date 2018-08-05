import React from 'react';
import { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet, Image, Button,  } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Icon } from 'native-base';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { 
    modificaEmailContatoAdicionado
} from '../actions/OutrasActions';

    
    class AddContato extends Component {

        renderBtAdicionarContato(){
            if(this.props.carregando_cadastro) {
                return (
                    <ActivityIndicator size="large"/>
                )
            }
    
            return (
                <Button 
                title="Acessar"
                color='#D67A7A'
                onPress={() =>  Actions.Corpo() } />
            )
        }


        render() { 
        return(
            <ImageBackground 
            style={styles.container} 
                    source={require('../imgs/1.jpg')} >
                    
                     
        <Container>
          
            <Header />
            <Content>
            <Form style={styles.campos}>
                <Item floatingLabel  style={styles.txt2}>
                <Icon style={styles.txt} name='arrow-back' />
                <Label style={styles.txt}  > Email</Label>
                <Input style={ styles.txt}
                value={this.props.email_contato_adicionado}
                onChangeText={texto => this.props.modificaEmailContatoAdicionado(texto)}  />
                </Item>
            </Form>

            <View style={styles.txt2}>
            
                <View style={{ flex: 1,
                      width: 280,
                      paddingTop: 90}} >
                                {this.renderBtAdicionarContato()}
                </View>
            </View>


            </Content>
        </Container>
        </ImageBackground>
      );
  
    }

        
}


const mapStateToProps = state => { 
    console.log(state);
    
    return (
        {
            email_contato_adicionado: state.OutrosReducer.email_contato_adicionado,
           
            
        }
    );
}

export default connect(
    mapStateToProps, 
    {
        modificaEmailContatoAdicionado,
        
    }
)(AddContato);



const styles = StyleSheet.create({
    container:{
        flex: 1, 
        width: null, 
        backgroundColor: '#000'
    },
   
    campos:{
        justifyContent: 'center',
        height: 100,
        marginTop: 60,
       // alignItems: 'center'
    },
    txt:{
        fontSize: 20,
        color: '#fff',
        //marginLeft: 10,
    },
    txt2:{
        alignItems: 'center',
       // alignContent:'center'
    }
})


