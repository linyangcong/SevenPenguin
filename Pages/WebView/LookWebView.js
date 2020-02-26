import React from 'react'
import {ToastAndroid,ActivityIndicator} from 'react-native'
import { WebView } from 'react-native-webview';
// import console = require('console');
// import config from '../../config'
class LookWebView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    onLoadStart=(e)=>{
        console.log('开始加载')
    }
    onLoad=(e)=>{
        console.log('加载中')
        console.log(e.nativeEvent.loading)
        
    }
    onLoadEnd=(e)=>{
        console.log('加载完成')
        // console.log(e)
    }
    onError=(e)=>{
        console.log('出错了')
        // console.log(e)
    }
   
    render() { 
        return ( 
            // <Text>HELLO WEBVIEW</Text>
            <WebView onLoadStart={this.onLoadStart} onLoadEnd={this.onLoadEnd} onLoad={this.onLoad} onError={this.onError} source={{ uri: `${this.props.navigation.getParam('playurl')}?type=app` }} />
         );
    }
}
 
export default LookWebView;