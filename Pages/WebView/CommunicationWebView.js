import React from 'react'
import { WebView } from 'react-native-webview';
import config from '../../config'
class CommunicationWebView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            // <Text>HELLO WEBVIEW</Text>
            <WebView source={{ uri: `${config.webviewServer}/#/login/fromApp?username=13106986209&password=123456` }} />
         );
    }
}
 
export default CommunicationWebView;