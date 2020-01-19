import React from 'react'
import { Text, View, Image } from 'react-native'
class UserDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabflag: 0,
            dataflag:true,
        }
    }
    render() {
        return (
            <View style={{backgroundColor: 'black' }}>
                <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'space-between' }}>
                    {/* <Button title='返回' onPress={() => { this.props.goback(2) }} style={{ flex: 1 }} /> */}
                    <Text style={{ color: 'white', fontSize: 30 }} onPress={()=>this.props.navigation.pop()} >←</Text>
                    <Image source={require('./Imgs/share.png')} style={{ height: 20, width: 20, alignSelf: 'center' }} />
                </View>
                <Text style={{ color: 'white', alignSelf: 'center', textAlign: 'center', fontSize: 16, fontWeight: 'bold' }}>用户信息中心</Text>
                <View style={{ padding: 20 }}>
                    <Image source={require('../../../Asserts/Icons/User/user.png')} style={{ height: 60, width: 60, borderRadius: 30 }} />
                    {/* <Text style={{ color: 'white', marginTop: 5 }}>{this.props.userdetail.name}</Text> */}
                    <View style={{ flexDirection: 'row' }}>
                        {/* <Text style={{ color: 'white', textAlign: 'center', marginRight: 10, fontSize: 10 }}>关注  {this.props.userdetail.foncuser}  </Text>
                        <Text style={{ color: 'white', textAlign: 'center', marginRight: 10, fontSize: 10 }}>粉丝  {this.props.userdetail.fans}</Text> */}
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        {/* <Text style={{ fontSize: 10, color: 'white', textAlign: 'center', backgroundColor: '#666', padding: 2, borderRadius: 8, alignSelf: 'center' }}>  {this.props.userdetail.level ? `Lv.${this.props.userdetail.level}` : `Lv.0`}  </Text> */}
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 12, color: 'white', backgroundColor: '#666', padding: 4, borderRadius: 10, textAlign: 'center' }}>  编辑  </Text>
                            <Text style={{ fontSize: 12, color: 'white', backgroundColor: '#666', padding: 4, borderRadius: 10, textAlign: 'center', marginLeft: 10 }}>  更换背景  </Text>
                        </View>
                    </View>
                </View>
                <View style={{ backgroundColor: '#fff', borderTopLeftRadius: 20, borderTopRightRadius: 20, flexDirection: 'column' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ textAlign: 'center', padding: 10, flex: 1, fontSize: 14, fontWeight: this.state.tabflag == 0 ? 'bold' : 'normal', color: this.state.tabflag == 0 ? '#f00' : '#000' }} onPress={() => { this.setState({ tabflag: 0 ,dataflag:true}) }}>主页</Text>
                        <Text style={{ textAlign: 'center', fontSize: 14, flex: 1, padding: 10, fontWeight: this.state.tabflag == 1 ? 'bold' : 'normal', color: this.state.tabflag == 1 ? '#f00' : '#000' }} onPress={() => { this.setState({ tabflag: 1 ,dataflag:false}) }}>动态</Text>
                    </View>
                    <View style={{ padding: 20 }}>
                        {/* 主页面板 */}
                        <View style={{display:this.state.tabflag==0?(this.state.dataflag?'flex':'none'):'none'}}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={require('./Imgs/音乐.png')} style={{ width: 50, height: 50, borderRadius: 5 }} />
                                <View style={{ marginLeft: 10, alignSelf: 'center' }}>
                                    <Text style={{ color: '#666' }}>听歌排行</Text>
                                    <Text style={{ color: '#aaa', fontSize: 12 }}>累计听歌722首</Text>
                                </View>
                            </View>

                            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                <Image source={require('./Imgs/心.png')} style={{ width: 50, height: 50, borderRadius: 5 }} />
                                <View style={{ marginLeft: 10, alignSelf: 'center' }}>
                                    <Text style={{ color: '#666' }}>我喜欢的音乐</Text>
                                    <Text style={{ color: '#aaa', fontSize: 12 }}>15首，播放11次</Text>
                                </View>
                            </View>
                            <View style={{ marginTop: 50 }}>
                                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                    <Text style={{ fontSize: 16, color: '#000', fontWeight: 'bold' }}>基本信息</Text>
                                    <Text style={{ color: '#aaa', fontSize: 10, alignSelf: 'center' }}>     (部分信息展示可在隐私设置中修改)</Text>
                                </View>
                                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                    <Text style={{ fontSize: 12, color: '#aaa' }}>村龄:</Text>
                                    <Text style={{ color: '#aaa', fontSize: 12 }}>1年(2018年5月注册)</Text>
                                </View>
                                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                    <Text style={{ fontSize: 12, color: '#aaa' }}>地区:</Text>
                                    <Text style={{ color: '#aaa', fontSize: 12 }}>广东省 中山市</Text>
                                </View>
                            </View>
                        </View>
                        
                        <View style={{display:this.state.dataflag?'none':'flex'}}>
                            <Text style={{color:'#aaa',fontSize:14,textAlign:'center'}}>暂无数据！</Text>
                        </View>

                    </View>
                </View>

            </View>

        );
    }
}

export default UserDetail;
