const InitialState = {
  data:{},
  detailloding:true
}
//---------------------------------------------
export default (state= InitialState,action) => {
  // console.log(action);
  switch (action.type) {
    case 'fetch_succces':
    return{...state, data:action.payload};
    case 'detail_loding':
    return{...state, detailloding:action.payload};
    default:
    return state;
  }
}
