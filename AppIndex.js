import React from 'react'
// import {ScrollView,Image} from 'react-native'
import LoginRouter from './Router/StackRouter/Login'
import {Provider} from 'react-redux'
import store from './Store/StoreRedux'
class AppIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
         }
    }
    componentWillUnmount(){
        console.log('卸载了app页面')
        if(store.getState().musicAction.musicObj!=''&&store.getState().musicAction.musicObj!=null){
            store.getState().musicAction.musicObj.release();
            store.getState().musicAction.musicObj=null;
        }
    }
    render() { 
        return ( 
            <Provider store={store}>
                <LoginRouter />
            </Provider>
         );
    }
}
 
export default AppIndex;