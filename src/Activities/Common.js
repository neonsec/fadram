import React, { Component } from 'react';
import { Text, View, Picker } from 'react-native';
import { connect } from 'react-redux';
import { ondatachanged } from '../actions';
import { Card, CardSection, Input } from '../components/Common';
//--------------------------------------------------------------
class Common extends Component {
//--------------------------------------------------------------
  onnamechange(text){
    this.props.ondatachanged({ prop: 'name', value:text })
  }
  onphonechange(text){
    this.props.ondatachanged({ prop: 'phone', value:text })
  }
//--------------------------------------------------------------
    render(){
      // console.log(this.props.listData);
      // console.log(this.props.name+".."+this.props.phone+".."+this.props.data);
      return(
        <View>
        <CardSection>
          <Input
            value={this.props.name}
            lable="Name"
            placeholder= "user"
            onChangeText={this.onnamechange.bind(this)}
          />
        </CardSection>
        <CardSection>
          <Input
            value={this.props.phone}
            lable="Phone"
            placeholder= "000-000-0000"
            onChangeText={this.onphonechange.bind(this)}
          />
        </CardSection>
        <CardSection>
          <Text style={{fontSize:18,paddingTop:12,paddingRight:60,paddingLeft:18}}>Work</Text>
          <Picker
            style={{ flex: 1,alignItems:'center' }}
            selectedValue={this.props.data}
            onValueChange={data=> this.props.ondatachanged({ prop: 'data', value:data })}
            >
            <Picker.Item label="Web Dev" value="Web Dev" />
            <Picker.Item label="ReactNative" value="ReactNative" />
            <Picker.Item label="UI Builder" value="UI Builder" />
            <Picker.Item label="BackEnd Dev" value="BackEnd Dev" />
            <Picker.Item label="Allrounder" value="Allrounder" />
          </Picker>
        </CardSection>
        </View>
    );
  }
}
//--------------------------------------------------
const mapStateToprops = (state) => {
  return(state.memberreducer);
}
//--------------------------------------------------
export default connect(mapStateToprops,{ ondatachanged })(Common);
