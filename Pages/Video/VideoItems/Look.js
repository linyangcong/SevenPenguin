import React from 'react'
import { View, Text, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import config from '../../../config'
class Look extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <View style={{ display: this.props.isshow ? 'flex' : 'none', marginBottom: 150, marginLeft: 10, marginRight: 10 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10 }}>
                    <View style={{ borderColor: '#eee', borderWidth: 1, padding: 20, borderRadius: 10 }}>
                        <Text>明星榜</Text>
                        <View style={{ flexDirection: 'row', marginTop: 5 }}>
                            <Image source={{uri: config.resourceServer + '/WebView/User/u2.jpg'}} style={{ width: 30, height: 30, borderRadius: 15 }} />
                            <Image source={{uri: config.resourceServer + '/WebView/User/u5.jpg'}} style={{ width: 30, height: 30, borderRadius: 15, marginLeft: 5, marginRight: 5 }} />
                            <Image source={{uri: config.resourceServer + '/WebView/User/u6.jpg'}} style={{ width: 30, height: 30, borderRadius: 15 }} />
                        </View>
                    </View>
                    <View style={{ borderColor: '#eee', borderWidth: 1, padding: 20, borderRadius: 10 }}>
                        <Text>我的关注</Text>
                        {/* <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                        <Image source={require('../../../Asserts/Icons/User/user.png')} style={{width:30,height:30}}/>
                        <Image source={require('../../../Asserts/Icons/User/user.png')} style={{width:30,height:30}}/>
                        <Image source={require('../../../Asserts/Icons/User/user.png')} style={{width:30,height:30}}/>
                    </View> */}
                        <View style={{ marginTop: 5 }}>
                            <Text style={{ fontSize: 12, color: '#aaa' }}>暂无关注主播开播</Text>
                        </View>
                    </View>
                </View>

                <ScrollView horizontal>
                    <View style={{ flexDirection: 'row' }}>
                        {
                            this.props.look.hotflags.map((item, index) =>
                                <Text key={index} style={{ padding: 4, marginRight: 20, backgroundColor:index==0?'pink': '#e8e8e8',color:index==0?'red':'black', borderRadius: 10, fontSize: 12 }}>  {item}  </Text>
                            )
                        }
                    </View>
                </ScrollView>

                <View style={{ marginTop: 20 }}>
                    {
                        this.props.look.lists.map((item, index) =>
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