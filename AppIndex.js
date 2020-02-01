import React from 'react'
import {ScrollView,Image} from 'react-native'
import LoginRouter from './Router/StackRouter/Login'
class AppIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
                <LoginRouter />
              
         );
    }
}
 
export default AppIndex;