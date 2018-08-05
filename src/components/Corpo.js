import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, ScrollableTab, TabHeading, Icon, Text } from 'native-base';
import { StatusBar, View, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';    

import firebase from 'firebase';

import Conversa from './Conversa';
import Contato from './Contato';
import Game from './Game';


const Corpo = props => {
    //style={{ backgroundColor: "#D1A4F4", elevation: 0 }}
  //render() { 49216B
    return (
    
      <Container>
         <StatusBar backgroundColor="#551E7F" />
        <Header hasTabs  
                style={{ backgroundColor: "#A449EA", elevation: 0,  }}>

            <View  style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{height: 50, justifyContent: 'center'}}>
                    <Text style={{ fontSize:30 , marginTop:10}}>#FALA AE MANO</Text>
                </View>
                
                    <View style={{ flexDirection: 'row', marginRight: 20 }}>
                    
                        <View style={{justifyContent: 'center', width: 70, alignItems: 'center'}} >
                            <TouchableHighlight onPress={() => { Actions.AddContato()}} 
                            underlayColor="#114D44">
                                <Icon name="person" />
                            </TouchableHighlight>
                        </View>
                    

                        <View style={{ justifyContent:  'center'}}>

                            <TouchableHighlight onPress={
                            () => firebase.auth().signOut().then(() => Actions.Login())}>
                            <Text style={{ fontSize:25 , marginTop:10}}>#FUI</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                
            </View> 
        </Header>
        

        <Tabs 
        renderTabBar={()=> <ScrollableTab  />} >

            <Tab  heading={ <TabHeading><Icon 
                name="chatboxes" 
                
                />
                <Text>Conversas</Text></TabHeading>} >
                    <Conversa />

             </Tab>

            <Tab heading={ <TabHeading><Icon 
                name="person" 
                />
                <Text>Contato</Text></TabHeading>} >
                    <Contato />
            </Tab>

            <Tab heading={ <TabHeading><Icon 
                name="baseball" 
                />
                <Text>Game</Text></TabHeading>} >
                     <Game />
            </Tab>
         
        </Tabs>
      </Container>
    );
  }
//}
export default connect(null, {  })(Corpo);