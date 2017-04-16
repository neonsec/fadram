import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
//----------------------------------------------------------
class ListItem extends Component {
  //----------------------------------------------------------
  onPressRow(){
    Actions.EditMember({ listData:this.props.listData });
  }
  //----------------------------------------------------------
  render(){
    return(
      <TouchableOpacity
        onPress={this.onPressRow.bind(this)}
        >
      <View style={styles.containerstyle}>
        <Text style={styles.titlestyle}>
          {this.props.listData.name}
        </Text>
      </View>
      </TouchableOpacity>
    );
  }
}
//----------------------------------------------------------
const styles={
  containerstyle:{
    width:'100%',
    borderBottomWidth:1,
    borderColor:'#7fc2ef'
  },
  titlestyle:{
    fontSize:18,
    paddingLeft:15,
    paddingTop:10,
    paddingBottom:10
  }
}
//----------------------------------------------------------
export default ListItem;
