import React from 'react'
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import Zan from '../../../Components/Zan'
import Discussion from '../../../Components/Discussion'
import Expansion from '../../../Components/Expansion'
import config from '../../../config'
import Axios from 'axios'
import Video from 'react-native-video'
import { Icon } from '@ant-design/react-native'
// import { TouchableOpacity } from 'react-native-gesture-handler';
class tuijian extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playstatus: 0, // 1:播放第一个视频
            tuijianContents: []
            // tuijianContents: [
            // { name: '《感谢你曾经来过》', nameimg: {uri: config.resourceServer + '/WebView/Video/推荐/a.jpg'}, played: '12万', timelong: '00:58',  authorImg:  {uri: config.resourceServer + '/WebView/User/u3.jpg'}, author: '念宁', supportor: '20015', discussion: '1205', flag: '直播中的美少女' },
            // { name: '《感谢你曾经来过》', nameimg: {uri: config.resourceServer + '/WebView/Video/推荐/b.jpg'}, played: '12万', timelong: '00:58',  authorImg:  {uri: config.resourceServer + '/WebView/User/u4.jpg'}, author: '念宁', supportor: '20015', discussion: '1205', flag: '直播中的美少女' },
            // { name: '《感谢你曾经来过》', nameimg: {uri: config.resourceServer + '/WebView/Video/推荐/c.jpg'}, played: '12万', timelong: '00:58',  authorImg:  {uri: config.resourceServer + '/WebView/User/u5.jpg'}, author: '念宁', supportor: '20015', discussion: '1205', flag: '直播中的美少女' },
            // { name: '《感谢你曾经来过》', nameimg: {uri: config.resourceServer + '/WebView/Video/推荐/d.jpg'}, played: '12万', timelong: '00:58',  authorImg:  {uri: config.resourceServer + '/WebView/User/u6.jpg'}, author: '念宁', supportor: '20015', discussion: '1205', flag: '直播中的美少女' },
            // { name: '《感谢你曾经来过》', nameimg: {uri: config.resourceServer + '/WebView/Video/推荐/e.jpg'}, played: '12万', timelong: '00:58',  authorImg:  {uri: config.resourceServer + '/WebView/User/u7.jpg'}, author: '念宁', supportor: '20015', discussion: '1205', flag: '直播中的美少女' },

            // ],
        }
    }
    componentDidMount() {
        Axios.get(`${config.serverUrl}/Video/List/tuijianContents`).then(res => {
            // console.log(res.data)
            this.setState({
                tuijianContents: res.data
            })
        })
    }
    componentWillUnmount() {
        this.setState({
            playstatus:-1
        })
    }
    filter_flag = (flag) => {
        switch (flag) {
            case '1': return '直播中的美少女';
            case '2': return '阳光灿烂的少年';
            case '3': return '神秘家族的嫡系';
            case '4': return '默默无闻的贡献者';
        }
    }
    onBuffer(eee) {
        console.log('this is buffer')
        console.log(eee)
    }
    videoError(e) {
        // console.log(e)
    }
    changplaystatus = (id) => {
        if (id == this.state.playstatus)
            this.setState({
                playstatus: -1
            })
        else {
            this.setState({
                playstatus: id
            })

        }
    }
    render() {
        return (
            <View style={{ backgroundColor: '#f2f2f2', marginBottom: 120 }}>
                {
                    this.state.tuijianContents.map((item, index) =>
                        <View key={index} style={{ backgroundColor: 'white', padding: 10, marginBottom: 10 }}>
                            <View>
                                <TouchableOpacity onLongPress={() => this.props.navigation.navigate('PlayerVedio', { playuri: config.resourceServer + '/WebView/VideoPlay/' + item.video_path + '.' + item.video_type })}>
                                <View style={{ position: 'absolute', left: '40%', top: '40%', zIndex: 999 }}>
                                    <TouchableOpacity onPress={() => this.changplaystatus(item.id)} style={{ zIndex: 1000 }}>
                                        <Icon name='right-circle' size='max' color='#fff' style={{ display: this.state.playstatus == item.id ? 'none' : 'flex' }} />
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => this.changplaystatus(item.id)} style={{ zIndex: 1000 }}>
                                        <Icon name='pause-circle' size='max' color='#fff' style={{ display: this.state.playstatus == item.id ? 'flex' : 'none' }} />
                                    </TouchableOpacity>
                                </View>
                                
                                    <Video source={{ uri: config.resourceServer + '/WebView/VideoPlay/' + item.video_path + '.' + item.video_type }}   // Can be a URL or a local file.
                                        paused={this.state.playstatus != item.id}                                   // Store reference
                                        onBuffer={this.onBuffer}                // Callback when remote video is buffering
                                        onError={this.videoError}               // Callback when video cannot be loaded
                                        style={{ display: this.state.playstatus != item.id ? 'none' : 'flex', height: 160, width: '100%', borderRadius: 10 }}
                                        resizeMode='cover'
                                    />
                               
                                <View>
                                    <Image source={{ uri: config.resourceServer + '/WebView/Video/推荐/' + item.show_img + '.' + item.show_img_type }} style={{ display: this.state.playstatus !== item.id ? 'flex' : 'none', width: '100%', height: 160, borderRadius: 10 }} />
                                    <Text style={{ position: 'absolute', top: this.state.playstatus == item.id ? -150 : 10, fontSize: 12, color: 'white', right: 10, borderRadius: 15, paddingLeft: item.gain_flag ? 5 : 0, paddingRight: item.gain_flag ? 2 : 0, backgroundColor: '#f00' }}>{this.filter_flag(item.gain_flag)}</Text>
                                    <View style={{ position: 'absolute', bottom: 20, width: '100%' }}>
                                        <Text style={{ fontSize: 12, color: 'white', position: 'absolute', left: 10 }}>{item.played_count ? '播放次数：' + item.played_count : ''}</Text>
                                        {/* <Text style={{ fontSize: 12, color: 'white', position: 'absolute', right: 10 }}>全屏</Text> */}
                                    </View>
                                </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                                <Text>{item.video_name}</Text>
                                <Image source={{ uri: config.resourceServer + '/WebView/Video/推荐/' + item.show_img + '.' + item.show_img_type }} style={{ width: 30, height: 30, borderRadius: 15 }} />
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5, paddingTop: 10, marginBottom: 10, borderTopWidth: 1, borderTopColor: '#eee' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Image source={{ uri: config.resourceServer + '/WebView/User/' + item.video_author_img + '.' + item.video_author_img_type }} style={{ width: 30, height: 30, borderRadius: 15 }} />
                                    <Text style={{ marginLeft: 10 }}>{item.author}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Zan account={item.supportor} />
                                    <Discussion account='1000+' />
                                    <Expansion />
                                </View>
                            </View>
                        </View>
                    )
                }
            </View>
        );
    }
}

export default tuijian;