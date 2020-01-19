import React from 'react'
import {Image} from 'react-native'
class Expansion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
                <Image source={require('../Asserts/Icons/Discovery/点点.png')} style={{width:15,height:15}}/>
         );
    }
}
 
export default Expansion;