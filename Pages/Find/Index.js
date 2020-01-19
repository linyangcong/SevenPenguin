import React from 'react'
import { View, Text, TextInput, ScrollView, Image, TouchableOpacity ,ToastAndroid} from 'react-native'
import Axios from 'axios'
import { Icon } from '@ant-design/react-native'
import config from '../../config'
class FindIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            TextInputValue: "",
            HotSearch: [],
            currentplay: [],
            searchlist: []
            // [{"id":1,"music_type":"mp4","author":"作者1","image":"1","img_type":"jpg","description":"我花了一整个童年在寻找这首歌","newflag":"0","hotflag":"0","support_count":5454,"cplaytime":"2009-06-07T16:00:00.000Z","name":"BeaTsGOy - Piano Beat","flag":{"only":true,"SQ":false}},{"id":2,"music_type":"mp4","author":"作者2","image":"2","img_type":"jpg","description":"听完像恋爱了","newflag":"0","hotflag":"1","support_count":875,"cplaytime":"2015-06-07T16:00:00.000Z","name":"Diana Boncheva - Purple Passion","flag":{"only":false,"SQ":true}},{"id":3,"music_type":"mp4","author":"作者3","image":"3","img_type":"jpg","description":"大概孤独的人会与这首歌产生共鸣","newflag":"1","hotflag":"0","support_count":42345,"cplaytime":"2019-05-07T16:00:00.000Z","name":"Janet Leon - Missing You","flag":{"only":true,"SQ":true}},{"id":4,"music_type":"mp4","author":"作者4","image":"4","img_type":"jpg","description":"一身正气荡人间 除暴安良我心愿","newflag":"0","hotflag":"0","support_count":54546,"cplaytime":"2016-06-23T16:00:00.000Z","name":"Joy Gruttmann - Schnappi","flag":{"only":false,"SQ":false}},{"id":5,"music_type":"mp4","author":"作者5","image":"5","img_type":"jpg","description":"以温柔对抗黑暗 以理解驱散抑郁","newflag":"0","hotflag":"1","support_count":658,"cplaytime":"2019-12-07T16:00:00.000Z","name":"Lovey James - Just So","flag":{"only":false,"SQ":true}},{"id":6,"music_type":"mp4","author":"作者6","image":"6","img_type":"jpg","description":"老薛是那一片最认真的雪","newflag":"1","hotflag":"0","support_count":9554,"cplaytime":"2019-01-07T16:00:00.000Z","name":"message","flag":{"only":true,"SQ":true}},{"id":7,"music_type":"mp4","author":"作者7","image":"7","img_type":"jpg","description":"《海绵宝宝》音乐精选集来喽","newflag":"0","hotflag":"0","support_count":125,"cplaytime":"2019-11-15T16:00:00.000Z","name":"Nigel Silin - Sakura Tears","flag":{"only":false,"SQ":false}},{"id":8,"music_type":"mp4","author":"作者8","image":"8","img_type":"jpg","description":"faidhe大魔王给你讲个笑话","newflag":"0","hotflag":"1","support_count":212455,"cplaytime":"2020-01-02T16:00:00.000Z","name":"ProleteR - Faidherbe square","flag":{"only":false,"SQ":false}}],
        }
    }
    static navigationOptions = {
        tabBarLabel: ({ focused, tintColor }) => {
            return <Text style={{ fontWeight: focused ? 'bold' : 'normal' }}>🔍</Text>
        },
    }

    filtecplaytime = (author, playtime) => {
        playtime.split('T')
        //    let date= new Date(playtime)
        return author + '  ' + playtime.split('T')[0]
    }

    componentDidMount() {
        Axios.get(config.serverUrl + '/SearchMusic/find').then(res => {
            // res.data.current_search[1].map(item=>{
            //     item.name=item.music_path;
            // })
            this.setState({
                currentplay: res.data.current_search[0],
                HotSearch: res.data.current_search[1]
            })
            // console.log(this.state.currentplay)
        }
        ).catch(e => { console.log(e) })
    }
    gotolistening(item, flag) {
        if(item==''||item==undefined){
            this.setState({
                searchlist:[]
            })
            return;
        }
        if (flag) {
            Axios.get(`${config.serverUrl}/Music/List/searchMusic?name=${item}`).then(res => {
                if (res.status == 200) {
                    this.setState({
                        searchlist: res.data
                    })
                }
                else {
                    ToastAndroid.show("服务器异常！", 2000)
                }

            }).catch(e => {
                ToastAndroid.show(e, 2000)
            })
        }
        else {
            Axios.get(`${config.serverUrl}/Music/List/searchMusic?id=${item.id}`).then(res => {
                if (res.status == 200) {
                    this.props.navigation.navigate('PlayerMusic', {
                        musicDetail: res.data,
                        soundObj: this.state.soundObj,
                        timeOut: this.state.timeOut,
                        shutdown: true,
                        callback: (playId, soundObj, timeOut) => {
                            this.setState({
                                playId,
                                soundObj,
                                timeOut,
                            }
                            )
                        },
                    })
                }
                else {
                    ToastAndroid.show("服务器异常！", 2000)
                }

            }).catch(e => {
                ToastAndroid.show(e, 2000)
            })
        }

    }
    findmusic = (findparam) => {
        setTimeout(() => {
            this.gotolistening(findparam, true)
        }, 1000);
    }
    render() {
        return (

            <View style={{ display: 'flex', padding: 5 }}>
                <View >
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, backgroundColor: 'rgba(255,255,255,0.5)' }}>
                        <Text style={{ fontSize: 25, flex: 1, textAlign: 'center' }} onPress={() => this.props.navigation.pop()}>←</Text>
                        <TextInput
                            // autoCompleteType="password"
                            keyboardAppearance='dark'
                            clearButtonMode="always"
                            placeholder="  找音乐"
                            onChangeText={data => this.findmusic(data)}
                            style={{ flex: 9, borderBottomWidth: 1, borderColor: '#666', borderRadius: 10, fontSize: 16, color: '#666' }}
                        />
                    </View>
                    <ScrollView style={{ maxHeight: 500, zIndex: 999, position: 'absolute', top: 55, left: 40, backgroundColor: '#f8f8f8', borderColor: '#eee' }}>
                        {
                            this.state.searchlist.map((item, index) =>
                                <TouchableOpacity onPress={()=>this.gotolistening(item)} key={index} style={{ marginBottom: 10, borderBottomWidth: item != undefined & item != null ? 1 : 0, borderColor: '#ccc', padding: 20 }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <Text style={{ color: '#333', fontSize: 14 }}>{item.name}</Text>
                                        <Text style={{ color: '#6aa', fontSize: 12, marginLeft: 30 }}>{item.author}</Text>
                                    </View>
                                    <Text style={{ color: '#aaa', fontSize: 8, marginBottom: 10 }}>{item.description}</Text>
                                </TouchableOpacity>
                            )
                        }
                    </ScrollView>
                </View>
                <ScrollView>
                    <Image source={require('../../Asserts/Icons/User/user.png')} style={{ width: '100%', height: 80, marginBottom: 10, borderRadius: 10, zIndex: 100 }} />
                    <View style={{ marginBottom: 10 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>历史记录</Text>
                            <Icon name='delete' size='sm' color='#333' />
                            {/* <Image source={require('../../Asserts/Icons/User/user.png')} style={{ width: 20, height: 20 }} /> */}
                        </View>
                        <ScrollView horizontal={true} >
                            {
                                this.state.currentplay.map((item, index) =>
                                    <TouchableOpacity onPress={() => this.gotolistening(item)} key={index} style={{ marginLeft: 20, borderRadius: 8, padding: 5, backgroundColor: '#f8f8f8' }}>
                                        <Text key={index} style={{ fontSize: 12, color: '#333' }}>{item.music_path}</Text>
                                        <Text style={{ fontSize: 8, textAlign: 'center', color: '#666' }}>{this.filtecplaytime(item.author, item.cplaytime)}</Text>
                                    </TouchableOpacity>
                                )
                            }

                        </ScrollView>
                    </View>
                    <View>
                        <Text style={{ fontWeight: 'bold', fontSize: 16, marginBottom: 10 }}>热搜榜</Text>
                        <View style={{ padding: 10 }}>
                            {this.state.HotSearch.map((item, index) =>
                                <TouchableOpacity onPress={() => this.gotolistening(item)} key={index} style={{ marginBottom: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{ fontSize: 16, color: (index + 1) <= 3 ? 'red' : '#888' }}>{index + 1}</Text>
                                        <View style={{ marginLeft: 10 }}>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Text>{item.music_path}</Text>
                                                <Text style={{ marginLeft: 10, color: 'red' }}>{item.newflag != 0 ? 'NEW' : ''} {item.hotflag != 0 ? 'HOT' : ''}</Text>
                                            </View>
                                            <Text style={{ fontSize: 10, color: '#aaa' }}>{item.description}</Text>
                                        </View>
                                    </View>
                                    <Text style={{ fontSize: 10, color: '#aaa' }}>{item.support_count}</Text>
                                </TouchableOpacity>
                            )}
                        </View>
                    </View>
                </ScrollView>
            </View>

        );
    }
}

export default FindIndex;