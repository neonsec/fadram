import React from 'react';
import {  Text, View, Modal } from 'react-native';
import { CardSection } from  './CardSection';
import { Button } from  './Button';
//------------------------------------------------
const ModalView = ({ children, visible, onAccept, onDecline }) => {
  return(
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={ () => {} }
      >
      <View style={styles.container}>
        <View style={{height:200,width:'90%',backgroundColor:'#fff',justifyContent:'center',borderRadius:20}}>
        <CardSection style={styles.cardsection}>
          <Text style={styles.text}>{ children }</Text>
        </CardSection>
        <CardSection style={{borderColor: '#fff'}}>
          <Button onPress={onAccept} >Yes</Button>
          <Button onPress={onDecline} >No</Button>
        </CardSection>
      </View>
      </View>
    </Modal>
  );
}
//------------------------------------------------
const styles = {
  cardsection:{
    justifyContent:'center',
    alignItems:'center',
    height:90,
    paddingTop:0,
    borderColor: '#fff'
  },
  container:{
    backgroundColor: 'rgba(0,0,100,0.75)',
    position:'relative',
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  text:{
    flex:1,
    fontSize:18,
    textAlign:'center'
  }
}
//------------------------------------------------
export { ModalView };
