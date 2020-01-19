import React from 'react'
import { View, Text, ScrollView, Image } from 'react-native'

// import Zan from '../../Components/Zan'
// import Discussion from '../../Components/Discussion'
// import Expansion from '../../Components/Expansion'

import config from '../../config'
import Tuijian from './VideoItems/tuijian'
import Look from './VideoItems/Look'
import FYZX from './VideoItems/feiyunzhixia'
import MusicPower from './VideoItems/MusicPower'
import WXC from './VideoItems/WangXC'
import XianChang from './VideoItems/XianChang'
import ListenBGM from './VideoItems/ListenBGM'
import BaiWP from './VideoItems/BaiWP'
import ReSing from './VideoItems/ReSing'
import Ground from './VideoItems/Ground'

// import Axios from 'axios'
class VideoIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activetab: 'tab0',
            tabs: [
                { name: '推荐', tabflag: 'tab0' },
                { name: 'LOOK直播', tabflag: 'tab1' },
                { name: '飞云之上', tabflag: 'tab2' },
                { name: '音乐的力量', tabflag: 'tab3' },
                { name: '王小潮', tabflag: 'tab4' },
                { name: '现场', tabflag: 'tab5' },
                { name: '翻唱', tabflag: 'tab5' },
                { name: '听BGM', tabflag: 'tab7' },
                { name: '广场', tabflag: 'tab8' },
                { name: 'MV', tabflag: 'tab9' },
                { name: '舞蹈', tabflag: 'tab10' },
                { name: 'ACG音乐', tabflag: 'tab11' },
                { name: '游戏', tabflag: 'tab12' },
            ],
            
            look:
            {
                hotflags: ['热门', '颜值', '才艺', '舞蹈', '好声音', '情感', '二次元', '音乐人', '萌新', '附近'],
                lists:
                    [
                        [{ acting: true, imgurl: {uri: config.resourceServer + '/WebView/Video/LOOK直播/v1.jpg'}, flag: '美少女', played: '35.4万', content: '【亿达学长】搞事情喽', author: '亿达学长',paiming:1 },
                        { acting: true, imgurl: {uri: config.resourceServer + '/WebView/Video/LOOK直播/v2.jpg'}, flag: '美少女', played: '35.4万', content: '【亿达学长】搞事情喽', author: '亿达学长',paiming:2 }],
                        [{ acting: true, imgurl: {uri: config.resourceServer + '/WebView/Video/LOOK直播/v3.jpg'}, flag: '美少女', played: '35.4万', content: '【亿达学长】搞事情喽', author: '亿达学长',paiming:3 },
                        { acting: true, imgurl:{uri: config.resourceServer + '/WebView/Video/LOOK直播/v4.jpg'}, flag: '美少女', played: '35.4万', content: '【亿达学长】搞事情喽', author: '亿达学长',paiming:4 }],
                        [{ acting: true, imgurl: {uri: config.resourceServer + '/WebView/Video/LOOK直播/v5.jpg'}, flag: '美少女', played: '35.4万', content: '【亿达学长】搞事情喽', author: '亿达学长',paiming:5 },
                        { acting: true, imgurl:{uri: config.resourceServer + '/WebView/Video/LOOK直播/v6.jpg'}, flag: '美少女', played: '35.4万', content: '【亿达学长】搞事情喽', author: '亿达学长',paiming:6 }],
                    ]
            },




        }
    }
    static navigationOptions = {
        tabBarLabel: ({ focused, tintColor }) => {
            return <Text style={{ fontWeight: focused ? 'bold' : 'normal' }}>视频</Text>
        }
    }
    
    // componentDidMount(){
    //     Axios.get(`${config.resourceServer}/Video/List/tuijianContents`).then(res=>{
    //         console.log(res.data)
    //         this.setState({
    //             tuijianContents:res.data
    //         })
    //     })
    // }
    render() {
        return (
            <View style={{ display:'flex' , marginBottom: 120, flexDirection: 'column' }}>
                <ScrollView horizontal >
                    {
                        this.state.tabs.map((item, index) =>
                            <Text key={index} ref={'tab' + index} style={{ fontSize: 14, fontWeight: (this.state.activetab == ('tab' + index)) ? 'bold' : 'normal', color: (this.state.activetab == ('tab' + index)) ? 'red' : '#666', padding: 10, borderBottomWidth: (this.state.activetab == ('tab' + index)) ? 2 : 1, borderBottomColor: (this.state.activetab == ('tab' + index)) ? 'red' : '#ddd' }} onPress={() =>
                                this.setState({ activetab: ('tab' + index) })
                            }>{item.name}</Text>
                        )
                    }
                </ScrollView>
                <ScrollView >
                    <Tuijian isshow={this.state.activetab == 'tab0'} navigation={this.props.navigation} />
                    <Look look={this.state.look} isshow={this.state.activetab == 'tab1'} />
                    <FYZX fyzx={this.state.tuijianContents} isshow={this.state.activetab == 'tab2'} />
                    <MusicPower musicpower={this.state.tuijianContents} isshow={this.state.activetab == 'tab3'} />
                    <WXC wxc={this.state.tuijianContents} isshow={this.state.activetab == 'tab4'} />
                    <XianChang xiaochang={this.state.tuijianContents} isshow={this.state.activetab == 'tab5'} />
                    <ListenBGM lisntenbgm={this.state.tuijianContents} isshow={this.state.activetab == 'tab6'} />
                    <BaiWP baiwp={this.state.tuijianContents} isshow={this.state.activetab == 'tab7'} />
                    <ReSing resing={this.state.tuijianContents} isshow={this.state.activetab == 'tab8'} />
                    <Ground ground={this.state.tuijianContents} isshow={this.state.activetab == 'tab9'} />
                </ScrollView>
            </View>
        );
    }
}

export default VideoIndex;