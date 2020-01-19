import React from 'react'
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