import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView,ToastAndroid } from 'react-native'
import { Carousel, Icon } from '@ant-design/react-native'
import config from '../../config'
import NewDis from './Tabs/NewDis'
import NewSong from './Tabs/NewSong'
import Axios from 'axios'
// import console = require('console');
class DiscoveryIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            CollectiongSongPanel: false,
            CreateSongPanel: true,
            CarouselList:[]
        }
    }
    static navigationOptions = {
        tabBarLabel: ({ focused, tintColor }) => {
            return <Text style={{ fontWeight: focused ? 'bold' : 'normal' }}>发现</Text>
        }
    }
    componentDidMount(){
        Axios.get(config.serverUrl+'/Album/music').then(res=>{
            // console.log(res)
            if(res.status==200){
                this.setState({
                    CarouselList:res.data
                })
            }
            else {
                ToastAndroid.show('服务器异常：'+res.status,2000)
            }
        }).catch(e=>{
            ToastAndroid.show(e,2000)
        })
    }
    gotoPersonAlbum=(item)=>{
        Axios.get(config.serverUrl+'/Music/List/searchMusic?id='+item.musiclist).then(
            res=>{
                if(res.status==200){
                    this.props.navigation.navigate('PersonAlbum',
                    {albumdetail:{list:res.data,playerdetail:item}})
                }
                else {
                }
            }
        ).catch(e=>{
        })

    }
    render() {
        return (
            <View style={{  marginBottom: 80 }}>
                <TouchableOpacity  onPress={e=>this.props.navigation.navigate('CommunicationWebView')}  style={{position:'absolute',right:10,bottom:150,zIndex:999}}>
                <Image source={require('../../Asserts/kefu/kefu.png')} style={{width:50,height:60}} />
                </TouchableOpacity>
                <ScrollView style={{ paddingLeft: 10, paddingRight: 10, marginBottom: 100 }}>
                    <Carousel
                        // style={{borderRadius:10}}
                        selectedIndex={2}
                        autoplay
                        infinite
                    // afterChange={this.onHorizontalSelectedIndexChange}
                    >
                     {
                            this.state.CarouselList.map((item,index)=>
                                <TouchableOpacity key={index} onPress={()=>this.gotoPersonAlbum(item)}>
                                    <Image style={styles.containerHorizontal} source={{ uri: config.resourceServer + item.m_image_path}} />
                                </TouchableOpacity>
                                )
                        }
                    </Carousel>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, paddingBottom: 20, borderBottomWidth: 0.8, borderColor: '#eee' }}>
                        <View>
                            <View style={{ backgroundColor: 'red', alignItems: 'center', paddingTop: '10%', width: 50, height: 50, borderRadius: 25 }}>
                                <Icon size='lg' name='calendar' color='#fff' />
                            </View>
                            <Text style={{ fontSize: 12, alignSelf: 'center' }}>每日推荐</Text>
                        </View>
                        <View>
                            <View style={{ backgroundColor: 'red', alignItems: 'center', paddingTop: '10%', width: 50, height: 50, borderRadius: 25 }}>
                                <Icon size='lg' name='ordered-list' color='#fff' />
                            </View>
                            <Text style={{ fontSize: 12, alignSelf: 'center' }}>歌曲</Text>
                        </View>
                        <View>
                            <View style={{ backgroundColor: 'red', alignItems: 'center', paddingTop: '10%', width: 50, height: 50, borderRadius: 25 }}>
                                <Icon size='lg' name='bar-chart' color='#fff' />
                            </View>
                            <Text style={{ fontSize: 12, alignSelf: 'center' }}>排行榜</Text>
                        </View>
                        <View>
                            <View style={{ backgroundColor: 'red', alignItems: 'center', paddingTop: '10%', width: 50, height: 50, borderRadius: 25 }}>
                                <Icon size='lg' name='sound' color='#fff' />
                            </View>
                            <Text style={{ fontSize: 12, alignSelf: 'center' }}>电台</Text>
                        </View>
                        <View>
                            <View style={{ backgroundColor: 'red', alignItems: 'center', paddingTop: '10%', width: 50, height: 50, borderRadius: 25 }}>
                                <Icon size='lg' name='aliyun' color='#fff' />
                            </View>
                            <Text style={{ fontSize: 12, alignSelf: 'center' }}>直播</Text>
                        </View>



                    </View>

                    <View style={{ marginTop: 10 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>推荐歌单</Text>
                            <Text style={{ fontSize: 12, color: '#666', padding: 2, borderWidth: 0.5, borderColor: '#666', borderRadius: 10 }}>歌单广场</Text>
                        </View>
                        <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                            <View style={{ alignItems: 'center' }}>
                                <Image source={{ uri: config.resourceServer + '/WebView/discovery/d1.jpg' }} style={{ width: 100, height: 100, borderRadius: 10 }} />
                                <Text style={{ fontSize: 12 }}>[一周日语上新]</Text>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <Image source={{ uri: config.resourceServer + '/WebView/discovery/d2.jpg' }} style={{ width: 100, height: 100, borderRadius: 10 }} />
                                <Text style={{ fontSize: 12 }}>[一周日语上新]</Text>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <Image source={{ uri: config.resourceServer + '/WebView/discovery/d3.jpg' }} style={{ width: 100, height: 100, borderRadius: 10 }} />
                                <Text style={{ fontSize: 12 }}>[一周日语上新]</Text>
                            </View>
                        </View>
                        <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                            <View style={{ alignItems: 'center' }}>
                                <Image source={{ uri: config.resourceServer + '/WebView/discovery/d4.jpg' }} style={{ width: 100, height: 100, borderRadius: 10 }} />
                                <Text style={{ fontSize: 12 }}>[一周日语上新]</Text>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <Image source={{ uri: config.resourceServer + '/WebView/discovery/d5.jpg' }} style={{ width: 100, height: 100, borderRadius: 10 }} />
                                <Text style={{ fontSize: 12 }}>[一周日语上新]</Text>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <Image source={{ uri: config.resourceServer + '/WebView/discovery/d6.jpg' }} style={{ width: 100, height: 100, borderRadius: 10 }} />
                                <Text style={{ fontSize: 12 }}>[一周日语上新]</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ marginTop: 10, padding: 5 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row', paddingTop: 10, paddingBottom: 10, paddingRight: 10 }}>
                                <TouchableOpacity
                                    ref="CreateSong"
                                    onPress={() => { this.refs.CollectiongSong.setOpacityTo(0.5, 0.2); this.refs.CreateSong.setOpacityTo(1, 0.2); this.setState({ CreateSongPanel: true, CollectiongSongPanel: false }) }}
                                >
                                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>新歌</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={{ marginLeft: 10, opacity: 0.5 }}
                                    ref="CollectiongSong"
                                    onPress={() => { this.refs.CollectiongSong.setOpacityTo(1, 0.2); this.refs.CreateSong.setOpacityTo(0.5, 0.2); this.setState({ CreateSongPanel: false, CollectiongSongPanel: true }) }}
                                >
                                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>新碟</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{ alignSelf: 'center' }}>
                                <Text style={{ fontSize: 12, display: this.state.CreateSongPanel ? 'flex' : 'none', color: '#888' }}>新歌推荐</Text>
                                <Text style={{ fontSize: 12, display: this.state.CollectiongSongPanel ? 'flex' : 'none', color: '#888' }}>更多新碟</Text>
                            </View>

                        </View>
                        <View >
                            <NewDis ref="CollectiongSongPanel" show={this.state.CollectiongSongPanel} />
                            <NewSong ref="CreateSongPanel" show={this.state.CreateSongPanel} />
                        </View>
                    </View>

                    <View style={{ paddingTop: 10, paddingBottom: 10, backgroundColor: 'white' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 10, }}>
                            <Text style={{ fontSize: 14, fontWeight: 'bold' }}>云村精选</Text>
                            <Text style={{ fontSize: 12, color: '#666' }}>获取新内容</Text>
                        </View>

                        <View >
                            <View style={{ backgroundColor: 'white', marginBottom: 30, borderBottomWidth: 0.5, borderTopWidth: 0.5, borderColor: '#ccc' }}>
                                <Text style={{ padding: 10, color: '#aaa', fontSize: 10 }}>像麻雀一样脆弱而顽强的往前飞吧</Text>
                                <Image source={{ uri: config.resourceServer + '/WebView/discovery/d7.jpg' }} style={{ borderRadius: 10, height: 200, width: '100%' }} />
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', zIndex: 100, marginTop: -50, paddingLeft: 10, paddingRight: 10 }}>
                                    <Text style={{ color: 'white', fontSize: 12 }}>▷35万</Text>
                                    <Text style={{ color: 'white', fontSize: 12 }}>00.17</Text>
                                </View>
                                <View style={{ backgroundColor: '#eee', flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, alignItems: 'center', padding: 10, borderBottomRightRadius: 10, borderBottomLeftRadius: 10 }}>
                                    <Text style={{ fontSize: 12, fontWeight: 'bold' }}>恐怕每一个人都会羡慕这样的默契，...</Text>
                                    <Image source={{ uri: config.resourceServer + '/WebView/User/u1.jpg' }} style={{ width: 30, height: 30, borderRadius: 15 }} />
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 5 }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <View style={{ flexDirection: 'row', marginRight: 20, alignItems: 'center' }}><Image source={require('../../Asserts/Icons/Discovery/赞.png')} style={{ width: 16, height: 15 }} /><Text style={{ color: "#888", fontSize: 12 }}> 2218</Text></View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}><Image source={require('../../Asserts/Icons/Discovery/评论.png')} style={{ width: 20, height: 20 }} /><Text style={{ color: "#888", fontSize: 12 }}> 163</Text></View>
                                    </View>
                                    <View>
                                        <Image source={require('../../Asserts/Icons/Discovery/点点.png')} style={{ width: 15, height: 15 }} />
                                    </View>
                                </View>
                            </View>

                            <View style={{ backgroundColor: 'white', marginBottom: 30, borderBottomWidth: 0.5, borderTopWidth: 0.5, borderColor: '#ccc' }}>
                                <Text style={{ padding: 10, color: '#aaa', fontSize: 10 }}>像麻雀一样脆弱而顽强的往前飞吧</Text>
                                <Image source={{ uri: config.resourceServer + '/WebView/discovery/d8.jpg' }} style={{ borderRadius: 10, height: 200, width: '100%' }} />
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', zIndex: 100, marginTop: -50, paddingLeft: 10, paddingRight: 10 }}>
                                    <Text style={{ color: 'white', fontSize: 12 }}>▷35万</Text>
                                    <Text style={{ color: 'white', fontSize: 12 }}>00.17</Text>
                                </View>
                                <View style={{ backgroundColor: '#eee', flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, alignItems: 'center', padding: 10, borderBottomRightRadius: 10, borderBottomLeftRadius: 10 }}>
                                    <Text style={{ fontSize: 12, fontWeight: 'bold' }}>恐怕每一个人都会羡慕这样的默契，...</Text>
                                    <Image source={{ uri: config.resourceServer + '/WebView/User/u2.jpg' }} style={{ width: 30, height: 30, borderRadius: 15 }} />
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 5 }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <View style={{ flexDirection: 'row', marginRight: 20, alignItems: 'center' }}><Image source={require('../../Asserts/Icons/Discovery/赞.png')} style={{ width: 16, height: 15 }} /><Text style={{ color: "#888", fontSize: 12 }}> 2218</Text></View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}><Image source={require('../../Asserts/Icons/Discovery/评论.png')} style={{ width: 20, height: 20 }} /><Text style={{ color: "#888", fontSize: 12 }}> 163</Text></View>
                                    </View>
                                    <View>
                                        <Image source={require('../../Asserts/Icons/Discovery/点点.png')} style={{ width: 15, height: 15 }} />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>

                </ScrollView>
                
            </View>

        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#fff',
    },
    containerHorizontal: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 150,
        borderRadius:10
    },
})

export default DiscoveryIndex;