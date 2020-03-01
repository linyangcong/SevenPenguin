import React from 'react'
import { View, Text, Dimensions, TextInput,ToastAndroid,ActivityIndicator } from 'react-native'
// import AsyncStorage from '@react-native-community/async-storage'
import Axios from 'axios'
import config from '../../config'
// import { Button } from '@ant-design/react-native';
import {connect} from 'react-redux'
import {setLogin} from '../../Store/actionList'
import store from '../../Store/StoreRedux'
const { height,width } = Dimensions.get('window')
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username:'19925956050',
            password:'123456',
            loading:false
        }
    }
    // setData = async (userdetail) => {
    //     let userdetail_name=userdetail.name
    //     let userdetail_level=userdetail.level
    //     let userdetail_mobile=userdetail.mobile
    //     let userdetail_tooken=userdetail.tooken
    //     let userdetail_foncuser=userdetail.foncuser
    //     let userdetail_fans=userdetail.fans
    //     try {
    //       await AsyncStorage.setItem('userdetail_name', userdetail_name)
    //       await AsyncStorage.setItem('userdetail_level', userdetail_level)
    //       await AsyncStorage.setItem('userdetail_mobile', userdetail_mobile)
    //       await AsyncStorage.setItem('userdetail_tooken', userdetail_tooken)
    //       await AsyncStorage.setItem('userdetail_signed', userdetail_signed)
    //       await AsyncStorage.setItem('userdetail_foncuser', userdetail_foncuser)
    //       await AsyncStorage.setItem('userdetail_fans', userdetail_fans)
    //     } catch (e) {
    //       // saving error
    //     }
    //   }
    tologin=()=>{ //192.168.0.112
        this.setState({
            loading:true
        })
            Axios.get(`${config.serverUrl}/login/logon?username=${this.state.username}&password=${this.state.password}`).then(res=>{
                if(res.status==200){
                    this.setState({loading:false},()=>{
                        this.props.setLogin(res.data[0])
                        ToastAndroid.show('登录成功',2000)
                        this.props.navigation.navigate('MainRouter')
                    })
                    // this.props.changstackpage(1)
                }
                // else if(res.status==201){
                //     ToastAndroid.show(res.data.message,2000)
                // }
                else{
                    ToastAndroid.show("服务器异常！",2000)
                }
                
            }).catch(e=>{
                ToastAndroid.show(e,2000)
            })
       
    }
    render() {
        return (
            <View style={{ backgroundColor: 'red', height: height }}>
                <View style={{position:'absolute',left:width/2.2,top:height/2,zIndex:this.state.loading?999:0}}>
                <ActivityIndicator size={50} color="#a0a"  animating={this.state.loading} />
                </View>
                <View style={{ padding:20, backgroundColor: 'white',alignItems:'center',marginVertical:200,marginLeft:30,marginRight:30,borderRadius:10}}>
                    <Text style={{fontSize:20,fontWeight:'bold',color:'#f0f'}}>登录</Text>
                    <Text style={{fontSize:10,color:'#f0f'}}>七只企鹅音乐APP</Text>
                    <TextInput placeholder="用户名:" defaultValue={this.state.username} onChangeText={text=>{this.setState({username:text})}} placeholderTextColor='#f0f' style={{ borderWidth: 1, borderColor: '#eee', borderRadius: 10, fontSize: 14, paddingLeft: 10, paddingTop: 5, paddingBottom: 5,width:'100%' ,marginTop:10,marginBottom:10}} />
                    <TextInput placeholder="密码:" defaultValue={this.state.password}  onChangeText={text=>{this.setState({password:text})}} secureTextEntry={true}  placeholderTextColor='#f0f' style={{ borderWidth: 1, borderColor: '#eee', borderRadius: 10, fontSize: 14, paddingLeft: 10, paddingTop: 5, paddingBottom: 5,width:'100%',marginBottom:10}} />
                    <Text style={{fontSize:16,color:'white',width:'100%',backgroundColor:'#FAF',textAlign:'center',padding:8,borderRadius:10}} onPress={this.tologin}>登录</Text>
                    <View style={{flexDirection:'row' ,justifyContent:'space-between',width:'100%',marginTop:10}}>
                        <Text style={{fontSize:12,color:'#f0f'}}>切换登陆方式</Text>
                        <Text style={{fontSize:12,color:'#f0f'}}>忘记密码</Text>
                    </View>
                </View>
            </View>
        );
    }
}
const mapStateToProps=state=>{
    if(state!=undefined||state!=null){
        return {state}
    }
}
export default connect(mapStateToProps,{setLogin})(Login);