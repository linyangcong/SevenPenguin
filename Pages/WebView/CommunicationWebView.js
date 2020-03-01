import React from 'react'
import { WebView } from 'react-native-webview';
import config from '../../config'
import store from '../../Store/StoreRedux'
import {connect} from 'react-redux'
class CommunicationWebView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            // <Text>HELLO WEBVIEW</Text>
            <WebView source={{ uri: `${config.webviewServer}/HeartBeat/#/login/fromApp?username=${store.getState().loginDetail.username}&password=${store.getState().loginDetail.password}` }} />
         );
    }
}
const mapStateToProps=(state)=>{
    if(state){
        return state
    }
}
 
export default connect(mapStateToProps)(CommunicationWebView);