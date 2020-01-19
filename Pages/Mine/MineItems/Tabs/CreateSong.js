import React from 'react'
import {View,Text} from 'react-native'
class CreateSong extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
         }
    }
    render() { 
        return ( 
            <View style={{display:this.props.show?'flex':'none'}}>
                <Text style={{padding:10,borderColor:'#aaa',borderWidth:0.5,color:'#888',textAlign:'center'}}>+导入外部歌单</Text>
            </View>
         );
    }
}
 
export default CreateSong;