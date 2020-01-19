import React from 'react'
import { View, Text, ScrollView, Image, TouchableOpacity ,ToastAndroid} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import CollectiongSong from './MineItems/Tabs/CollectiongSong'
import CreateSong from './MineItems/Tabs/CreateSong'
import Axios from 'axios';
import config from '../../config'
import {Icon} from '@ant-design/react-native'
class MineIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show:0,
            userdetail:{},
            CollectiongSongPanel: false,
            CreateSongPanel: true,
            OptionsItems: [
                { src: require('../../Asserts/Icons/Mine/本地音乐.png'), name: '本地音乐',goName:'LSAF'},
                { src: require('../../Asserts/Icons/Mine/我的电台.png'), name: '我的电台',goName:'MyAudio'},
                { src: require('../../Asserts/Icons/Mine/我的收藏.png'), name: '我的收藏',goName:'MyCollection'},
                { src: require('../../Asserts/Icons/Mine/关注新歌.png'), name: '关注新歌',goName:'FocusMusic' },
            ]
        };
    }
    componentDidMount(){
        let user=this.getData()
        // console.log(user)
        this.setState({
            userdetail:user
        })
    }
    static navigationOptions = {
        tabBarLabel: ({ focused, tintColor }) => {
            return <Text style={{ fontWeight: focused ? 'bold' : 'normal'}}>我的</Text>
        },
        headerMode: 'none',
        
    }
    goback=(pageno)=>{
        this.setState({
            show:pageno
        })
    }
    getData = async () => {
        try {
            var userdetail_name = await AsyncStorage.getItem('userdetail_name')
            var userdetail_level = await AsyncStorage.getItem('userdetail_level')
            var userdetail_mobile = await AsyncStorage.getItem('userdetail_mobile')
            var userdetail_tooken = await AsyncStorage.getItem('userdetail_tooken')
            var userdetail_signed = await AsyncStorage.getItem('userdetail_signed')
            var userdetail_foncuser = await AsyncStorage.getItem('userdetail_foncuser')
            var userdetail_fans = await AsyncStorage.getItem('userdetail_fans')
            return {
              name:userdetail_name,
              level:userdetail_level,
              mobile:userdetail_mobile,
              tooken:userdetail_tooken,
              signed:userdetail_signed,
              foncuser:userdetail_foncuser,
              fans:userdetail_fans
            } 
        } catch(e) {
          // error reading value
        }
      }
      panelno=(pageno)=>{
          this.setState({
              show:pageno
          })
      }
      stackNavigation(routername){
        //   console.log(routername)
        this.props.navigation.navigate(routername)
      }
      SR_FM=()=>{
          let ramd=parseInt(Math.random()*10)+1;
          Axios.get(`${config.serverUrl}/Music/List/searchMusic?id=${ramd}`).then(res=>{
            if(res.status==200){
                this.props.navigation.navigate('PlayerMusic',{
                    musicDetail:res.data,
                    soundObj:this.state.soundObj,
                    timeOut:this.state.timeOut,
                    callback:(playId,soundObj,timeOut)=>{
                        this.setState({
                            playId,
                            soundObj,
                            timeOut,
                        }
                            )},
                    // listenToProgress:(musicprogress)=>{
                    //     this.setState({
                    //         musicprogress
                    //     })
                    // }   
                })
            }
            else{
                ToastAndroid.show("服务器异常！",2000)
            }
            
        }).catch(e=>{
            ToastAndroid.show(e,2000)
        })
      }
      selectTab=(goname)=>{
          if(goname!=undefined&&goname!='')
          this.props.navigation.navigate(goname)
          
      }
    render() {
        return (
            <ScrollView>
                <View style={{  backgroundColor: '#131111', flexDirection: 'column',marginBottom:150 }}>
                    <View style={{ flexDirection: 'row', padding: 20, justifyContent: 'space-between' }}>
                        <TouchableOpacity style={{ flexDirection: 'row' }}  onPress={this.stackNavigation.bind(this,'UserDetail')}>
                            {/* <Image source={require('../../Asserts/Icons/User/user.png')} style={{ width: 70, height: 70, borderRadius: 35 }} /> */}
                            <Icon name='user' size='lg' color='white' style={{padding:10,borderRadius:30,backgroundColor:'#ccc'}}/>
                            <View style={{ alignSelf:'center', marginLeft: 20 }}>
                                <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>{this.state.userdetail.name}</Text>
                                <Text style={{ color: 'white', fontSize: 10, backgroundColor: '#888', textAlign: 'center', padding:this.state.userdetail.level? 2:0, borderRadius: 10, marginTop: 5 }}>{this.state.userdetail.level?'Lv.'+this.state.userdetail.level:''}</Text>
                            </View>
                        </TouchableOpacity>
                        <Text style={{ color: '#ccc', fontSize: 10, alignSelf: 'center' }}>新客仅5元 ></Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        {
                            this.state.OptionsItems.map((item, index) =>
                                <TouchableOpacity onPress={()=>this.selectTab(item.goName)} key={index} style={{ flexDirection: 'column', alignItems: 'center' }}>
                                    <Image source={item.src} style={{ width: 25, height: 25 }} />
                                    <Text style={{ fontSize: 12, color: 'white', marginTop: 5 }}>{item.name}</Text>
                                </TouchableOpacity>
                            )
                        }
                    </View>
                    <View style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10, backgroundColor: 'white', padding: 10, marginTop: 20 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 14, fontWeight: 'bold' }}>我的音乐</Text>
                            <View>
                                <Text style={{ color: 'grey' }}>></Text>
                            </View>
                        </View>

                        <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ height: 230 }}>
                                <TouchableOpacity onPress={this.stackNavigation.bind(this,'MyLoveMusic')}>
                                <View>
                                    <Image source={{uri:config.resourceServer+'/WebView/Mine/M1.jpg'}} style={{ width: 160, height: 100, borderRadius: 5 }} />
                                    <View style={{ zIndex: 1000, top: -70, left: 20 }}>
                                        <Image source={require('../../Asserts/Icons/Mine/我喜欢的音乐.png')} style={{ width: 30, height: 26 }} />
                                        <Text style={{ color: 'white', fontSize: 10, marginTop: 5 }} >我喜欢的音乐</Text>
                                        {/* <View style={{backgroundColor:'white',padding:2,borderRadius:6,opacity:0.4}}> */}
                                        <Text style={{ color: '#fff', fontSize: 10, backgroundColor: 'rgba(200,200,200,0.5)', padding: 2, borderRadius: 8, marginLeft: 70, width: 60 }}>▷心动模式</Text>
                                        {/* </View> */}
                                    </View>
                                </View>
                                </TouchableOpacity>
                               
                                <View style={{ backgroundColor: '#ffeeee', width: 160, height: 100, borderRadius: 5, top: -50 }}>
                                    <TouchableOpacity onPress={()=>ToastAndroid.show('暂未开通!',2000)}>
                                    <View style={{ marginTop: 10, marginLeft: 20 }}>
                                        <Text style={{ marginLeft: '70%', fontSize: 10, color: '#ff8888' }}>推荐</Text>
                                        <Image source={require('../../Asserts/Icons/Mine/我喜欢的音乐.png')} style={{ width: 30, height: 26 }} />
                                        <Text style={{ color: '#ff5555', fontSize: 10, marginTop: 5 }}>私藏推荐</Text>
                                        {/* <View style={{backgroundColor:'white',padding:2,borderRadius:6,opacity:0.4}}> */}
                                        <Text style={{ color: '#ff8888', fontSize: 10, left: '50%' }}>▷心动模式</Text>
                                        {/* </View> */}
                                    </View>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={{ height: 230 }}>
                                <TouchableOpacity  onPress={()=>this.SR_FM()}>
                                <View>
                                    <Image source={{uri:config.resourceServer+'/WebView/Mine/M2.jpg'}} style={{ width: 160, height: 100, borderRadius: 5}} />
                                    <View style={{ zIndex: 1000, top: -75, left: 20 }}>
                                        <Image source={require('../../Asserts/Icons/Mine/私人FM.png')} style={{ width: 35, height: 30 }} />
                                        <Text style={{ color: 'white', fontSize: 10, marginTop: 5 }}>私人FM</Text>
                                        {/* <View style={{backgroundColor:'white',padding:2,borderRadius:6,opacity:0.4}}> */}
                                        <Text style={{ color: '#fff', fontSize: 10, backgroundColor: '#rgba(200,200,200,0.5)', padding: 2, borderRadius: 8,  marginLeft: 70, width: 60 }}>▷心动模式</Text>
                                        {/* </View> */}
                                    </View>
                                </View>
                                </TouchableOpacity>
                                <View style={{ backgroundColor: '#ffeeee', width: 160, height: 100, borderRadius: 5, top: -50 }}>
                                <TouchableOpacity onPress={()=>ToastAndroid.show('暂未开通!',2000)}>
                                    <View style={{ marginTop: 10, marginLeft: 20 }}>
                                        <Text style={{ marginLeft: '70%', fontSize: 10, color: '#ff8888' }}>推荐</Text>
                                        <Image source={require('../../Asserts/Icons/Mine/私人FM.png')} style={{ width: 30, height: 26 }} />
                                        <Text style={{ color: '#ff5555', fontSize: 10, marginTop: 5 }}>因乐交友</Text>
                                        {/* <View style={{backgroundColor:'white',padding:2,borderRadius:6,opacity:0.4}}> */}
                                        <Text style={{ color: '#ff8888', fontSize: 10, left: '50%' }}>找到音乐交友</Text>
                                        {/* </View> */}
                                    </View>
                                </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        <View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ fontSize: 14, fontWeight: 'bold' }}>最近播放</Text>
                                <View>
                                    <Text onPress={()=>this.props.navigation.navigate('NearlyPlay')} style={{ color: 'grey' }}>更多></Text>
                                </View>
                            </View>
                            <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                                <TouchableOpacity onPress={()=>this.props.navigation.navigate('NearlyPlay')} style={{ flexDirection: 'row' }}>
                                    <Image source={{uri:config.resourceServer+'/WebView/Mine/M3.jpg'}} style={{ width: 60, height: 60 }} />
                                    <View style={{ alignSelf: 'center', marginLeft: 5 }}>
                                        <Text style={{ fontSize: 12, width: '98%' }}>全部已播歌曲</Text>
                                        <Text style={{ fontSize: 10, color: '#888' }}>300首</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={()=>this.props.navigation.navigate('SongList')} style={{ flexDirection: 'row' }}>
                                    <Image source={{uri:config.resourceServer+'/WebView/Mine/M4.jpg'}} style={{ width: 60, height: 60 }} />
                                    <View style={{ alignSelf: 'center', marginLeft: 5 }}>
                                        <Text style={{ fontSize: 12, width: '98%' }}>歌单：云音乐热歌榜</Text>
                                        <Text style={{ fontSize: 10, color: '#888' }}>继续播放</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View>
                            <View style={{ flexDirection: 'row', paddingTop: 10, paddingBottom: 10, paddingRight: 10 }}>
                                <TouchableOpacity
                                    ref="CreateSong"
                                    onPress={() => { this.refs.CollectiongSong.setOpacityTo(0.5, 0.2); this.refs.CreateSong.setOpacityTo(1, 0.2); this.setState({ CreateSongPanel: true, CollectiongSongPanel: false }) }}
                                >
                                    <Text style={{ fontSize: 14, fontWeight: 'bold' }}>创建歌单</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={{ marginLeft: 10, opacity: 0.5 }}
                                    ref="CollectiongSong"
                                    onPress={() => { this.refs.CollectiongSong.setOpacityTo(1, 0.2); this.refs.CreateSong.setOpacityTo(0.5, 0.2); this.setState({ CreateSongPanel: false, CollectiongSongPanel: true }) }}
                                >
                                    <Text style={{ fontSize: 14, fontWeight: 'bold' }}>收藏歌单</Text>
                                </TouchableOpacity>
                            </View>
                            <View >
                                <CollectiongSong ref="CollectiongSongPanel" show={this.state.CollectiongSongPanel} />
                                <CreateSong ref="CreateSongPanel" show={this.state.CreateSongPanel} />
                            </View>
                        </View>

                    </View>

                </View>
            </ScrollView>
        );
    }
}

export default MineIndex;