import {createStore,combineReducers} from 'redux'
import config from '../config'
var defaultMusic={
  // playStatus:false, //true正在播放，false暂停
  // musicDetail:{},
  // musicObj:{}
}
const musicAction=(state=defaultMusic, action)=>{
  switch (action.type) {
    case 'setMusic':
      state={
        ...state,
        musicDetail:action.payload.musicDetail,
        musicObj:action.payload.obj
      }
      return state
    default:
      return state
  }
}
var defaultLogin={}
const loginAction=(state=defaultLogin, action)=>{
  switch (action.type) {
    case 'setLogin':
      console.log(action.payload)
      state={
        ...state,
        loginDetail:action.payload
      }
      return state;
    default:
      return state
  }
}
var reducers=combineReducers({musicAction,loginAction})
export default createStore(reducers)



// function Action(state=defaultState, action) {
//     switch (action.type) {
//       case 'musicState':
//         return state.musicState;
//       case 'loginState':
//         return state.loginState;
//       default:
//         return defaultState
//     }
//   }
// export default createStore(Action)


//   function render() {
//     store.getState().toString()
//   }

//   render()
//   store.subscribe(render)
//   store.dispatch({ type: 'ChangeState' })