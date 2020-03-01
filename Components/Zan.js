import React from 'react'
import {View,Text,Image} from 'react-native'
import {resourceServer} from '../config'
class Discussion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <View>
                <Text style={{position:'absolute',fontSize:9,color:'#888',left:10,top:-8,minWidth:60}}>{this.props.account}</Text>
                <Image source={{uri:`${resourceServer}/Asserts/Icons/Discovery/赞.png`}} style={{width:16,height:16}}/>
                </View>
         );
    }
}
 
export default Discussion;