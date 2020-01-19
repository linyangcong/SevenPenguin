import React from 'react'
import {View,Text,Dimensions,ScrollView} from 'react-native'
const {height}= Dimensions.get('screen')
import { Button } from '@ant-design/react-native';
class SingerAlbum extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <ScrollView style={{height:height,overflow:'scroll'}}>
                
            <View style={{alignItems:'center',marginTop:'60%'}}>
                <Text style={{padding:20,color:'#aaa'}}>暂无本地音乐</Text>
                <Button type='ghost' style={{borderColor:'skyblue' ,width:'50%',borderRadius:50}}>
                    <Text style={{color:'skyblue'}}>一键扫描</Text>
                </Button>
            </View>
        </ScrollView>
         );
    }
}
 
export default SingerAlbum;