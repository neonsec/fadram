import firebase from 'firebase';
// import { Actions } from 'react-native-router-flux';
//-------------------------------------------
 export const loginChanged = () => {
   return (dispatch)=>{
     dispatch({type:'app_loading', payload:true});
     firebase.auth().onAuthStateChanged((user) => {
         if (user) {
           dispatch({type: 'login_change',payload:true});
         } else {
           dispatch({type: 'login_change',payload:false});
         }
       });
   }
 }
//-------------------------------------------
 export const emailchanged = (text) => {
   return({
     type: 'email_changed',
     payload: text
   });
 }

 export const pwdchanged = (text) => {
   return({
     type: 'pwd_changed',
     payload: text
   });
 }

 export const verifypwdchanged = (text) => {
   return({
     type: 'verifypwd_changed',
     payload: text
   });
 }

 export const pwdmismatch = () => {
   return({
     type: 'pwd_mismatch'
   });
 }

 export const loginuser =  ( email, pwd ) => {
   return (dispatch) => {
     dispatch({type: 'loading'});
   firebase.auth().signInWithEmailAndPassword(email,pwd)
   .then((user) => loginSuccess(dispatch,user))
   .catch(()=> loginfail(dispatch));
 };
};

export const createuser = ( email,pwd ) => {
  return (dispatch) => {
    dispatch({type: 'loading'});
    firebase.auth().createUserWithEmailAndPassword(email,pwd)
    .then((user) => signupSuccess(dispatch,user))
    .catch(() => signupfail(dispatch));
  };
};

export const signupuser = () => {
  return({
    type: 'signup'
  });
};


 const loginSuccess= (dispatch,user) => {
   dispatch({
     type: 'loginSuccess'
   });
 }

 const loginfail= (dispatch) => {
   dispatch({
     type: 'loginfail'
   });
 }

 const signupSuccess= (dispatch,user) => {
   dispatch({
     type: 'creatuserSuccess'
   });
 }

 const signupfail= (dispatch) => {
   dispatch({
     type: 'createuserfail'
   });
 }
