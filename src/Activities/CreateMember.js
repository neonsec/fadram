import React, { Component } from 'react';
import {  Text, View, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { createMember, clearForm } from '../actions';
import { Card, CardSection, Button, Spinner } from '../components/Common';
import Common from './Common';
//--------------------------------------------------
class CreateMember extends Component {
//--------------------------------------------------
componentWillMount(){
  this.props.clearForm();
}
//--------------------------------------------------
onCreateButton(text){
  this.props.createMember({ name:this.props.name, phone:this.props.phone, data:this.props.data || 'Web Dev' })
}
//--------------------------------------------------
renderCreateButton(){
  if(!this.props.creatloading){
    return(
      <Button
        onPress={this.onCreateButton.bind(this)}
        >
        Create
      </Button>
    );
  }return(
    <Spinner/>
  );
}
//--------------------------------------------------
  render(){
    // console.log(this.props.listData);
    // console.log(this.props.name+".."+this.props.phone+".."+this.props.data);
    return(
      <View>
        <StatusBar
           backgroundColor="blue"
         />
        <Card>
          <Common {...this.props} />
          <CardSection>
            {this.renderCreateButton()}
          </CardSection>
        </Card>
        </View>
    );
  }
}
//--------------------------------------------------
const mapStateToprops = (state) => {
  return(state.memberreducer);
}
//--------------------------------------------------
export default connect(mapStateToprops,{ createMember, clearForm })(CreateMember);
