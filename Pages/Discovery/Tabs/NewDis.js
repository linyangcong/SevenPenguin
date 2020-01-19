import React from 'react'
import {View,Text,Image} from 'react-native'
import config from '../../../config'
class NewDis extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
         }
    }
    render() { 
        return ( 
            <View style={{display:this.props.show?'flex':'none',flexDirection:'row',justifyContent:'space-between'}}>
                <View style={{alignItems:'center'}}>
                    <Image source={{uri:config.resourceServer+'/WebView/discovery/d11.jpg'}} style={{height:100,width:100,borderRadius:5}}></Image>
                    <Text style={{color:'#333',fontSize:12}}>是我不懂</Text>
                    <Text style={{color:'#888',fontSize:12}}>小魂</Text>
                </View>
                <View style={{alignItems:'center'}}>
                    <Image source={{uri:config.resourceServer+'/WebView/discovery/d12.jpg'}} style={{height:100,width:100,borderRadius:5}}></Image>
                    <Text style={{color:'#333',fontSize:12}}>待机</Text>
                    <Text style={{color:'#888',fontSize:12}}>杨胖雨</Text>
                </View>
                <View style={{alignItems:'center'}}>
                    <Image source={{uri:config.resourceServer+'/WebView/discovery/d13.jpg'}} style={{height:100,width:100,borderRadius:5}}></Image>
                    <Text style={{color:'#333',fontSize:12}}>太多Tidal</Text>
                    <Text style={{color:'#888',fontSize:12}}>Casper卡斯柏/NIN...</Text>
                </View>
            </View>
         );
    }
}
 
export default NewDis;