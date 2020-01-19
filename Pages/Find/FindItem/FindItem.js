import React from 'react'
import { View, Text, TextInput } from 'react-native'
class FindItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            TextInputValue:"",
            TextInputData:[
                {name:'把孤独当作晚餐'},
                {name:'把悲伤留给自己'},
                {name:'把音量调最大 有话对你说'},
                {name:'我爱你 爱你 爱你'},
                {name:'你还拍大雨吗'},
                {name:'你还好吗'},
            ]
        }
    }
    render() {
        return (
            <View >
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Text style={{ fontSize: 25 ,flex:1,textAlign:'center'}}>←</Text>
                    <TextInput
                    // clearButtonMode="always"
                        // autoComplete
                        // onChangeText={text =>console.log('aaa')}
                        placeholder="毛不易"
                        style={{flex:9, borderBottomWidth: 1, borderColor: '#666', borderRadius: 10 ,fontSize:16,color:'#666'}}
                    />
                </View>
            </View>
        );
    }
}

export default FindItem;