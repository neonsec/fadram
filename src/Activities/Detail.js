import React, { Component } from 'react';
import { View, Text, StatusBar, ListView } from 'react-native';
import _ from 'lodash';
import { fetchDetail } from '../actions';
import { connect } from 'react-redux';
import ListItem from './ListItem';
import { CardSection, Spinner } from '../components/Common'
//-----------------------------------------------
class Detail extends Component {
  //----------------------------------------------
  componentWillMount(){
    this.props.fetchDetail();
    this.createDatasource(this.props.members);
  }
  //-----------------------------------------------
  componentWillReceiveProps(nextProps){
    this.createDatasource(nextProps.members);
  }
  //-----------------------------------------------
  createDatasource(members){
    const ds = new ListView.DataSource({rowHasChanged: (r1,r2)=> r1!==r2 });
    this.dataSource = ds.cloneWithRows(members);
  }
  //-----------------------------------------------
  renderRow(listData){
    // console.log(listData);
    return(
      <ListItem  listData={listData} />
    );
  }
  //-----------------------------------------------
  renderSpinner(){
    if(this.props.state.detailloding){
      return(
        <CardSection>
          <Spinner/>
        </CardSection>
      );
    }
  }
  //-----------------------------------------------
  render(){
    // console.log(this.props.members);
    // console.log(this.props.state.detailloding);
  return(
    <View>
      <StatusBar
         backgroundColor="blue"
       />
      <ListView
        enableEmptySections
        dataSource={ this.dataSource }
        renderRow={this.renderRow}
      />
      {this.renderSpinner()}
    </View>
  );
 };
}
//-----------------------------------------------
const mapStateToprops= (state) => {
  // console.log(state.fetchreducer);
  const members = _.map(state.fetchreducer.data,( val, id ) => {
    return{...val, id};
  });
  // console.log(members);
  return({ members:members, state:state.fetchreducer });
}
//-----------------------------------------------
export default connect(mapStateToprops,{ fetchDetail })(Detail);
