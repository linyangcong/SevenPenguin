import {createStore} from 'redux'
function musicItem(state, action) {
    if (typeof state === 'undefined') {
      return 0
    }

    switch (action.type) {
      case 'ChangeState':
        return state =1
      default:
        return state
    }
  }

  export default createStore(musicItem)

//   function render() {
//     store.getState().toString()
//   }

//   render()
//   store.subscribe(render)
//   store.dispatch({ type: 'ChangeState' })