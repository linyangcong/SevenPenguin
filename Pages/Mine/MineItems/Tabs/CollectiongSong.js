import React from 'react'
import {View,Text} from 'react-native'
class CollectionSong extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
         }
    }
    render() { 
        return ( 
            <View style={{display:this.props.show?'flex':'none'}}>
                <Text style={{padding:10,color:'#888',textAlign:'center'}}>暂无收藏的歌单</Text>
            </View>
         );
    }
}
 
export default CollectionSong;