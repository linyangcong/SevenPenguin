import React from 'react'
import {View,Text,Dimensions,ScrollView} from 'react-native'
const {height}= Dimensions.get('screen')
import { Button } from '@ant-design/react-native';
class Album extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <ScrollView style={{height:height,overflow:'scroll'}}>
                
                <View style={{alignItems:'center',marginTop:'60%'}}>
                    <Text style={{padding:20,color:'#aaa'}}>暂无收藏</Text>
                </View>
            </ScrollView>
         );
    }
}
 
export default Album;