import React from 'react'
import { View, Text, Image } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import config from '../../../config'
class Look extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            look:
            {
                hotflags: ['热门', '颜值', '才艺', '舞蹈', '好声音', '情感', '二次元', '音乐人', '萌新', '附近'],
                lists:
                    [
                        [{ acting: true, imgurl: {uri: config.resourceServer + '/WebView/Video/LOOK直播/v1.jpg'}, flag: '美少女', played: '35.4万', content: '【亿达学长】搞事情喽', author: '亿达学长',paiming:1,playurl:config.LookServer },
                        { acting: true, imgurl: {uri: config.resourceServer + '/WebView/Video/LOOK直播/v2.jpg'}, flag: '美少女', played: '35.4万', content: '【亿达学长】搞事情喽', author: '亿达学长',paiming:2 ,playurl:config.LookServer}],
                        [{ acting: true, imgurl: {uri: config.resourceServer + '/WebView/Video/LOOK直播/v3.jpg'}, flag: '美少女', played: '35.4万', content: '【亿达学长】搞事情喽', author: '亿达学长',paiming:3,playurl:config.LookServer },
                        { acting: true, imgurl:{uri: config.resourceServer + '/WebView/Video/LOOK直播/v4.jpg'}, flag: '美少女', played: '35.4万', content: '【亿达学长】搞事情喽', author: '亿达学长',paiming:4 ,playurl:config.LookServer}],
                        [{ acting: true, imgurl: {uri: config.resourceServer + '/WebView/Video/LOOK直播/v5.jpg'}, flag: '美少女', played: '35.4万', content: '【亿达学长】搞事情喽', author: '亿达学长',paiming:5,playurl:config.LookServer },
                        { acting: true, imgurl:{uri: config.resourceServer + '/WebView/Video/LOOK直播/v6.jpg'}, flag: '美少女', played: '35.4万', content: '【亿达学长】搞事情喽', author: '亿达学长',paiming:6 ,playurl:config.LookServer}],
                    ]
            },
        }
    }
    // componentDidMount(){
    //     console.log(config.LookServer)
    // }
    // goRouter=()=>{
    //     this.props.navigation.navigate('LookWebView',{playurl:config.LookServer})
    // }
    render() {
        return (
            <View style={{  marginBottom: 150, marginLeft: 10, marginRight: 10 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10 }}>
                    <View  style={{ borderColor: '#eee', borderWidth: 1, padding: 20, borderRadius: 10 }}>
                        <Text>明星榜</Text>
                        <View style={{ flexDirection: 'row', marginTop: 5 }}>
                            <Image source={{uri: config.resourceServer + '/WebView/User/u2.jpg'}} style={{ width: 30, height: 30, borderRadius: 15 }} />
                            <Image source={{uri: config.resourceServer + '/WebView/User/u5.jpg'}} style={{ width: 30, height: 30, borderRadius: 15, marginLeft: 5, marginRight: 5 }} />
                            <Image source={{uri: config.resourceServer + '/WebView/User/u6.jpg'}} style={{ width: 30, height: 30, borderRadius: 15 }} />
                        </View>
                    </View>
                    <View style={{ borderColor: '#eee', borderWidth: 1, padding: 20, borderRadius: 10 }}>
                        <Text>我的关注</Text>
                        <View style={{ marginTop: 5 }}>
                            <Text style={{ fontSize: 12, color: '#aaa' }}>暂无关注主播开播</Text>
                        </View>
                    </View>
                </View>

                <ScrollView horizontal>
                    <View style={{ flexDirection: 'row' }}>
                        {
                            this.state.look.hotflags.map((item, index) =>
                                <Text key={index} style={{ padding: 4, marginRight: 20, backgroundColor:index==0?'pink': '#e8e8e8',color:index==0?'red':'black', borderRadius: 10, fontSize: 12 }}>  {item}  </Text>
                            )
                        }
                    </View>
                </ScrollView>

                <View style={{ marginTop: 20 }}>
                    {
                        this.state.look.lists.map((item, index) =>
                            <View style={{ flexDirection: 'row' ,justifyContent:'space-around',marginBottom:10}} key={index}>
                                {
                                    item.map((list,listindex)=>
                                    <View key={listindex}>
                                    <Image source={list.imgurl} style={{ width: 150, height: 200, borderRadius: 10 }} />
                                    <Text style={{ color: 'white', fontSize: listindex== 0&&index == 0 ? 12 : 0, position: 'absolute', top: 10, left: 10, backgroundColor: '#808', borderRadius: 11, padding: listindex== 0&&index == 0 ? 2 : 0 }}>  {list.paiming == 1 ? '上小时第一' : ''}  </Text>
                                    <View style={{ position: 'absolute', top: 160, flexDirection: 'row', margin: 10 }}>
                                        <Text style={{ color: 'white', fontSize: 10, borderWidth: 1, borderColor: 'white', borderRadius: 10, padding: 2 }}> {list.flag} </Text>
                                        <Text style={{ color: 'white', fontSize: 12, right: 10, marginLeft: 60 }}>{list.played}</Text>
                                    </View>
                                    <View style={{ padding: 5 }}>
                                        <Text>{list.content}</Text>
                                        <Text style={{ fontSize: 12, color: '#888', marginLeft: 10 }}>{list.author}</Text>
                                    </View>
                                    </View>
                                    )
                                }
                                
                            </View>
                        )
                    }
                </View>
            </View>
        );
    }
}

export default Look;