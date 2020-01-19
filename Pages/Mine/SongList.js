import React from 'react'
import {View,Text} from 'react-native'
class SongList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <View>
                <Text>
                    HELLO,热歌单
                </Text>
            </View>
         );
    }
}
 
export default SongList;