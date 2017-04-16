import React, { Component } from 'react';
import _ from 'lodash';
import {  Text, View, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import { saveMember, ondatachanged, deleteMember } from '../actions';
import { Card, CardSection, Button, Spinner, ModalView } from '../components/Common';
import Common from './Common';
//--------------------------------------------------
class EditMember extends Component {
//--------------------------------------------------
state = { showModal:false };
//--------------------------------------------------
componentWillMount(){
  _.each(this.props.listData, (value,prop) => {
    this.props.ondatachanged({prop,value});
  });
}
//--------------------------------------------------
onCreateButton(text){
  const {name,phone,data,id}=this.props
  this.props.saveMember({ name, phone, data, id });
  // console.log(name,phone,data,id);
  return(null);
}
//--------------------------------------------------
onTextButton(text){
  const {name,phone,data,id}=this.props
  Communications.text(phone,`Hi ${name}. You have successfullu registered. Your id :${id}`);
}
//--------------------------------------------------
onAccept(){
  const {id}=this.props
  this.props.deleteMember({ id });
  this.setState({ showModal: !this.state.showModal });
}
//--------------------------------------------------
onDecline(){
  this.setState({ showModal: !this.state.showModal });
}
//--------------------------------------------------
renderCreateButton(){
  if(!this.props.creatloading){
    return(
      <View>
      <CardSection>
      <Button
        onPress={this.onCreateButton.bind(this)}
        >
        Save
      </Button>
      </CardSection>
      <CardSection>
      <Button
        onPress={this.onTextButton.bind(this)}
        >
        Text him
      </Button>
      </CardSection>
      <CardSection>
      <Button
        onPress={ () => this.setState({ showModal: !this.state.showModal })}
        >
        Delete
      </Button>
      </CardSection>
      </View>
    );
  }return(
    <CardSection>
    <Spinner/>
    </CardSection>
  );
}
//--------------------------------------------------
  render(){
    console.log(this.props.listData);
    // console.log(this.props.name+".."+this.props.phone+".."+this.props.data);
    return(
      <View>
        <StatusBar
           backgroundColor="blue"
         />
        <Card>
          <Common/>
          {this.renderCreateButton()}
        </Card>
        <ModalView
          visible={this.state.showModal}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
        >
        Are you sure want to delete !
        </ModalView>
      </View>
    );
  }
}
//--------------------------------------------------
const mapStateToprops = (state) => {
  return(state.memberreducer);
}
//--------------------------------------------------
export default connect(mapStateToprops,{ saveMember, ondatachanged, deleteMember })(EditMember);
