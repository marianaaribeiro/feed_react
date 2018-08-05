import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import Routes from './Routes';
import reducers from './reducers';

class App extends Component {

    componentWillMount() {

        firebase.initializeApp({
            apiKey: "AIzaSyDzd202yVkJZRCpbIoi_I97xTHzLUsuk0g",
            authDomain: "app5-a6056.firebaseapp.com",
            databaseURL: "https://app5-a6056.firebaseio.com",
            projectId: "app5-a6056",
            storageBucket: "app5-a6056.appspot.com",
            messagingSenderId: "695695121469"
        });
    }

    render() {
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <Routes />
            </Provider>
        );
    }
}

export default App;
