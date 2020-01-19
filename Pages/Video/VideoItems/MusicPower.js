import React from 'react'
import {View,Text} from 'react-native'
class MusicPower extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <View style={{display:this.props.isshow?'flex':'none',backgroundColor: '#f2f2f2', marginBottom: 120 }}>
            <Text>音乐的力量</Text>
            </View>

         );
    }
}
 
export default MusicPower;