import React, { Component } from 'react';
import firebase from 'firebase';
import { View, Text } from 'react-native';
import { loginChanged } from './actions';
import { connect } from 'react-redux';
import LoginForm from './components/LoginForm'
import RouterComponent from './Router';
import { CardSection, Spinner, Header } from './components/Common'
//----------------------------------------
class Handler extends Component {
//------------------------------------------
  componentWillMount() {
    this.props.loginChanged();
  }
//------------------------------------------
  render(){
    // console.log("loggedin:"+this.props.loggedin+",,apploading:"+this.props.apploading);
    if(this.props.apploading){
      return(
        <View style={{flex:1}}>
          <Header headerText="Loading...."/>
          <Spinner/>
        </View>
      );
    }else
    if(this.props.loggedin){
      return(
        <RouterComponent/>
      );
    }
    return(
      <View style={{flex:1}}>
        <Header headerText="Please Login"/>
        <LoginForm/>
      </View>
    );
  }
}
//----------------------------------------
//-----------------------------------------------------
const mapStateToprops = (state)=> {
  return(state.authreducer);
}
//-----------------------------------------------------
export default connect(mapStateToprops,{ loginChanged })(Handler);
