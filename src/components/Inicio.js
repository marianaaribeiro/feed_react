import React,  { Component } from 'react';
import { View, 
         Button,
         Text,
         ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';


export default class Inicio extends Component {
    render() {
        return(
            <ImageBackground 
                style={{ flex: 1, 
                        width: null, 
                        backgroundColor: '#000' }} 
                        source={require('../imgs/3.jpg')} >


               <View style={{flex: 2,
                            justifyContent: 'center', 
                            alignItems: 'center'}}> 
                

                        <View style={{ flex: 0,
                                    paddingTop: 90}}>

                            <Text style={{ fontSize: 50,
                                           color:"#fff"  }}> 
                                Seja Bem Vindo!
                            </Text>
                        
                        </View>


                        <View style={{ flex: 1, 
                                       marginEnd: 50, 
                                       justifyContent: 'center', 
                                       alignItems: 'center'}}>

                            <Text style={{ fontSize: 30, 
                                          marginLeft: 60, 
                                          color:"#fff"}}> 
                                 Inicie suas conversas criptografadas com o ZAP ZAP Corporation! 
                            </Text>

                        </View>


                        <View style={{ flex: 1,
                                        width: 240,
                                        paddingTop: 50}}>
                            <Button 
                                title="Acessar"
                                color='#D67A7A'
                                onPress={() =>  Actions.Login() } />
                        </View>

                </View>
            </ImageBackground>
        );
    }
}