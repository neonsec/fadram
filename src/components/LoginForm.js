import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebase from 'firebase';
import { emailchanged, pwdchanged,
   verifypwdchanged, loginuser,
   signupuser, createuser, pwdmismatch } from '../actions';
import { Text, View, StatusBar } from 'react-native';
import { Card, CardSection, Input, Button, Spinner } from './Common';
//---------------------------------------------
class LoginForm extends Component {
//---------------------------------------------
// componentWillMount(){
//   this.props.loginChanged();
// }
//---------------------------------------------
onEmailChange(text){
  this.props.emailchanged(text);
}
//---------------------------------------------
onPwdChange(text){
  this.props.pwdchanged(text);
}
//---------------------------------------------
onverifyPwdChange(text){
  this.props.verifypwdchanged(text);
}
//--------------------------------------------
onpressLoginButton(){
  this.props.loginuser(this.props.email,this.props.pwd);
}
//---------------------------------------------
onpressSignupButton(){
  this.props.signupuser();
}
//---------------------------------------------
onpressCreateButton(){
  if(this.props.pwd===this.props.verifypwd){
  this.props.createuser(this.props.email,this.props.pwd);
}else{
  this.props.pwdmismatch();
}
}
//---------------------------------------------
renderButton(){
  if(this.props.loading){
    return(
     <CardSection>
      <Spinner/>
     </CardSection>
    );
  }
  if(this.props.loginbutton){
  return(
    <CardSection>
    <Button onPress={this.onpressLoginButton.bind(this)}>Login</Button>
    </CardSection>
  );
}
}
//---------------------------------------------
renderVerifyPwd(){
  if(this.props.verifypwdip){
    return(
      <CardSection>
        <Input
          secureTextEntry
          lable="Confirm"
          placeholder="verify password"
          onChangeText={this.onverifyPwdChange.bind(this)}
        />
      </CardSection>
    );
  }
}
//---------------------------------------------
renderErrtext(){
  if(this.props.error!==''){
    return(
      <Text style={{alignSelf:'center',fontSize:16,color:'#f00'}}>{this.props.error}</Text>
    );
  }
}
//---------------------------------------------
rendersignupButton(){
  if(this.props.signupbutton&&!this.props.loading){
    return(
      <CardSection>
      <Button onPress={this.onpressSignupButton.bind(this)}>Signup</Button>
      </CardSection>
    );
  }
}
//---------------------------------------------
rendercreateButton(){
  if(this.props.createbutton){
    return(
      <CardSection>
      <Button onPress={this.onpressCreateButton.bind(this)}>Create Account</Button>
      </CardSection>
    );
  }
}
//---------------------------------------------
  render(){
    // console.log(this.props.email+"--"+this.props.pwd+"--"+this.props.verifypwd);
    return(
      <View>
        <StatusBar
           backgroundColor="blue"
         />
      <Card>
        <CardSection>
          <Input
            value={this.props.email}
            lable="Email"
            placeholder="user@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
          />
        </CardSection>
        <CardSection>
          <Input
            value={this.props.pwd}
            secureTextEntry
            lable="Password"
            placeholder="password"
            onChangeText={this.onPwdChange.bind(this)}
          />
        </CardSection>

          {this.renderVerifyPwd()}

          {this.renderErrtext()}

          {this.renderButton()}

          {this.rendersignupButton()}

          {this.rendercreateButton()}

      </Card>
      </View>
    );
  }
}
//---------------------------------------------
const mapStateToprops = (state) => {
  return(state.authreducer);
}
//---------------------------------------------
export default connect(mapStateToprops,{ emailchanged,
   pwdchanged,loginuser, signupuser, createuser,
   verifypwdchanged, pwdmismatch })(LoginForm);
