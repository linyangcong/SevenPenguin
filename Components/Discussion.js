import React from 'react'
import {View,Text,Image} from 'react-native'
class Discussion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <View>
                <Text style={{position:'absolute',fontSize:9,color:'#888',left:25,top:-5,minWidth:60}}>{this.props.account}</Text>
                <Image source={require('../Asserts/Icons/Discovery/评论.png')} style={{width:20,height:20,marginLeft:15,marginRight:15}}/>
            </View>
         );
    }
}
 
export default Discussion;