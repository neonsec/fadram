import React, { Component } from 'react';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';
import Handler from './Handler';
//-------------------------------------------
class App extends Component{
//-------------------------------------------
  componentWillMount(){
  const config = {
  apiKey: 'AIzaSyDqVkJIlETEnBqmWgumKxRxFO-MzAlbIIM',
  authDomain: 'manager-7dadf.firebaseapp.com',
  databaseURL: 'https://manager-7dadf.firebaseio.com',
  projectId: 'manager-7dadf',
  storageBucket: 'manager-7dadf.appspot.com',
  messagingSenderId: '255803963482'
};
firebase.initializeApp(config);
}
//-------------------------------------------
  render(){
    const store= createStore(reducers,{},applyMiddleware(ReduxThunk));
    return(
      <Provider store={ store }>

          <Handler/>

      </Provider>
    );
  }
}
//-------------------------------------------
export default App;
