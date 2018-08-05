import React from 'react';
    import { View, Text, ImageBackground, StyleSheet, Image } from 'react-native';
    import { Container, Content, Card, CardItem, Body } from 'native-base';
    
    
    export default Contato = props => {
       
        return(
            <ImageBackground 
            style={styles.container} 
                    source={require('../imgs/13.jpg')} >
                    
                     
        <Container>
          
          <Content style={{borderRadius:20, marginTop:20, marginLeft: 20,
        marginRight: 20,}}>
            <Card style={{flex: 0,  justifyContent: 'center',
        alignItems: 'center', borderRadius:20}}>
              <CardItem>
                <Body>
                  <Image source={require('../imgs/4.jpg')} style={{height: 250, width: 330, flex: 1, alignItems: 'center'}}/>
                  <View>
                            
                            <Text style={styles.txt}>
                           texto

                            </Text>

                    </View>
                </Body>
              </CardItem>
            </Card>
          </Content>
        </Container>
        </ImageBackground>
      );
  
  

        
}

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        width: null, 
        backgroundColor: '#000'
    },
    card: {
        
        backgroundColor: '#fff',
        borderRadius: 10,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    txt:{
        fontSize: 20,
        color: 'green',
        marginLeft: 10,
    },
    txt2:{
        fontSize: 30,
        color: 'red',
        marginLeft: 20
    }
})

//<View style={[styles.container, { backgroundColor: '#ff4081' }]} />

       