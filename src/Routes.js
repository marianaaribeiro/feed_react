import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Login from './components/Login';
import Cadastro from './components/Cadastro';
import Inicio from './components/Inicio';
import Corpo from './components/Corpo';
import AddContato from './components/AddContato';



export default props => (
    <Router navigationBarStyle={{backgroundColor: '#000'}} titleStyle={{color: '#fff'}}>
        
        <Scene key='Login' component={Login} title="Login" hideNavBar={true}/>
        <Scene key='Corpo' component={Corpo} title="Corpo" hideNavBar={true}/>
        <Scene key='AddContato' component={AddContato} title="AddContato" hideNavBar={false}/>
        <Scene key='Cadastro' component={Cadastro} title="Cadastro" hideNavBar={false}/>
        <Scene key='Inicio' component={Inicio} hideNavBar={true} />
        


        
        
    
    </Router>
);
