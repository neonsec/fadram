import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
//------------------------------------------------------
export const ondatachanged = ({prop,value}) => {
  return({
    type: 'data_change',
    payload: {prop,value}
  });
}
//------------------------------------------------------
export const clearForm = () => {
  return({
    type:'clear_form',
    payload:true
  });
}
//------------------------------------------------------
export const createMember = ({name,phone,data}) => {
//------------------------------------------------------
  // console.log(name+phone+data);
//------------------------------------------------------
  return (dispatch)=>{
    //------------------------------------------------------
  dispatch({ type:'creat_loading', payload:true });
  //------------------------------------------------------
  const { currentUser } = firebase.auth();
  //------------------------------------------------------
  firebase.database().ref(`/user/${currentUser.uid}/members`)
  .push({ name, phone, data })
  .then( ()=>{
    //------------------------------------------------------
    dispatch({ type:'creat_sucess' });
    Actions.detail({ type: 'reset' });
    //------------------------------------------------------
  });
 };
}
//----------------------------------------------------------
export const saveMember = ({name,phone,data,id}) => {
//------------------------------------------------------
  // console.log(name+phone+data);
//------------------------------------------------------
  return (dispatch)=>{
    //------------------------------------------------------
  dispatch({ type:'creat_loading', payload:true });
  //------------------------------------------------------
  const { currentUser } = firebase.auth();
  //------------------------------------------------------
  firebase.database().ref(`/user/${currentUser.uid}/members/${id}`)
  .set({ name, phone, data })
  .then( ()=>{
    //------------------------------------------------------
    dispatch({ type:'creat_sucess' });
    Actions.detail({ type: 'reset' });
    //------------------------------------------------------
  });
 };
}
//----------------------------------------------------------
export const deleteMember = ({id}) => {
//------------------------------------------------------
  // console.log(name+phone+data);
//------------------------------------------------------
  return (dispatch)=>{
    //------------------------------------------------------
  dispatch({ type:'creat_loading', payload:true });
  //------------------------------------------------------
  const { currentUser } = firebase.auth();
  //------------------------------------------------------
  firebase.database().ref(`/user/${currentUser.uid}/members/${id}`)
  .remove()
  .then( ()=>{
    //------------------------------------------------------
    dispatch({ type:'creat_sucess' });
    Actions.detail({ type: 'reset' });
    //------------------------------------------------------
  });
 };
}
//----------------------------------------------------------
export const fetchDetail = () => {
//----------------------------------------------------------
  return (dispatch) =>{
    dispatch({type:'detail_loding', payload:true});
    const { currentUser } = firebase.auth();
    firebase.database().ref(`/user/${currentUser.uid}/members`)
    .on('value', snapshot => {
      dispatch({ type:'fetch_succces', payload: snapshot.val() });
      dispatch({type:'detail_loding', payload:false});
    });
  }
}
