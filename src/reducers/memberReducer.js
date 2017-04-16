const InitialState={
  name:'',
  phone:'',
  data: '',
  id:'',
  creatloading:false,
  fecheddata: ''
}
//-----------------------------------------------
export default (state=InitialState,action) => {
  // console.log(action);
  switch (action.type) {
    case 'clear_form':
    return{...state, name:'', phone:'',data:'',id:'' };
    case 'data_change':
    return{...state, [action.payload.prop]: action.payload.value };
    case 'creat_loading':
    return{...state, creatloading: action.payload };
    case 'creat_sucess':
    return{...state, creatloading:false, name:'', phone:'',data:'',id:'' };
    case 'fetch_succces':
    return{...state, fecheddata:action.payload};
    default:
    return state;
  };
}
//-----------------------------------------------
