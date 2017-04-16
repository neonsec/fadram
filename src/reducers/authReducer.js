//-------------------------------------
const InitialState={
  apploading:true,
  loggedin:false,
  email: '',
  pwd: '',
  verifypwd: '',
  error: '',
  loading: false,
  signupbutton:true,
  loginbutton:true,
  verifypwdip:false,
  createbutton:false
};
//-------------------------------------
export default (state=InitialState,action) => {
  // console.log(action);
  switch (action.type) {
    case 'app_loading':
    return{...state, apploading:action.payload}
    case 'login_change':
    return{...state, loggedin:action.payload, apploading:false};
    case 'email_changed':
    return{...state, email: action.payload};
    case 'pwd_changed':
    return{...state, pwd: action.payload};
    case 'verifypwd_changed':
    return{...state, verifypwd: action.payload};
    case 'pwd_mismatch':
    return{...state, error: 'Confirm correct passsword '};
    case 'loginSuccess':
    return{...state, loading:false, error: ''};
    case 'loginfail':
    return{...state, error: 'Autentication failed',loading: false};
    case 'loading':
    return{...state, loading:true };
    case 'creatuserSuccess':
    return{...state, loading:false, error:''};
    case 'createuserfail':
    return{...state, loading:false, error: 'Failed to create account'};
    case 'signup':
    return{...state,error:'', verifypwdip:true, loginbutton:false,signupbutton:false,createbutton:true};
    default:
    return state;
  }
};
