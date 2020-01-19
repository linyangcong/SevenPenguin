import React from 'react'
import {View,Text,Image} from 'react-native'
import config from '../../../config'
class NewSong extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
         }
    }
    render() { 
        return ( 
            <View style={{display:this.props.show?'flex':'none',flexDirection:'row',justifyContent:'space-between'}}>
                <View style={{alignItems:'center'}}>
                    <Image source={{uri:config.resourceServer+'/WebView/discovery/d14.jpg'}} style={{height:100,width:100,borderRadius:5}}></Image>
                    <Text style={{color:'#333',fontSize:12}}>好想爱这个世界啊</Text>
                </View>
                <View style={{alignItems:'center'}}>
                    <Image source={{uri:config.resourceServer+'/WebView/discovery/d15.jpg'}} style={{height:100,width:100,borderRadius:5}}></Image>
                    <Text style={{color:'#333',fontSize:12}}>念念有词</Text>
                    <Text style={{color:'#888',fontSize:12}}>周深</Text>
                </View>
                <View style={{alignItems:'center'}}>
                    <Image source={{uri:config.resourceServer+'/WebView/discovery/d16.jpg'}} style={{height:100,width:100,borderRadius:5}}></Image>
                    <Text style={{color:'#333',fontSize:12}}>从前</Text>
                    <Text style={{color:'#888',fontSize:12}}>大邱</Text>
                </View>
            </View>
         );
    }
}
 
export default NewSong;