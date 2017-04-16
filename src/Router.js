import React, { Component } from 'react';
import firebase from 'firebase';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Detail from './Activities/Detail';
import CreateMember from './Activities/CreateMember';
import EditMember from './Activities/EditMember';
//-----------------------------------------------------
class RouterComponent extends Component {
//------------------------------------------------------
render(){
//------------------------------------------------------
  return(
    <Router sceneStyle={{paddingTop: 55}}>
      <Scene key= "main"
        // panHandlers={null}
        >
              <Scene
                panHandlers={null}
                // onRight={ () => firebase.auth().signOut()}
                onRight={ () => Actions.CreateMember()}
                onLeft={ () => firebase.auth().signOut()}
                rightTitle="Add"
                leftTitle="LogOut"
                key= "detail"
                component= {Detail}
                title= "Details"
                initial
              />
              <Scene
                // panHandlers={null}
                key= "CreateMember"
                component={CreateMember}
                title= "Create"
              />
              <Scene
                // panHandlers={null}
                key= "EditMember"
                component={EditMember}
                title= "Edit"
              />
      </Scene>
    </Router>
  );
};
}
// -----------------------------------------------------
export default RouterComponent;
