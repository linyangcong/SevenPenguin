import React from 'react'
import {View,Text} from 'react-native'
class ActivityIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
         }
    }
    render() { 
        return ( 
            <View style={{display:this.props.show?'none':'flex',alignSelf:'center',marginLeft:'40%'}}>
                <Text style={{padding:10,color:'#888',alignSelf:'center'}}>暂未开放</Text>
            </View>
         );
    }
}
 
export default ActivityIndex;