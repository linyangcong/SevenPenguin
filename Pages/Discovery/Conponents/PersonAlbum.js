import React from 'react'
import { View, Text, ScrollView, Image,TouchableOpacity ,ToastAndroid} from 'react-native'
import { Icon } from '@ant-design/react-native'
import config from '../../../config'
import Sound from 'react-native-sound'
class PersonAlbum extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            albumlist: this.props.navigation.getParam('albumdetail').list,
            useralbum: this.props.navigation.getParam('albumdetail').playerdetail
        }
    }
    componentDidMount() {
       
    }
    componentWillUnmount(){
        if(this.sound){
        this.sound.release()
        this.sound=null
    }
    }
    playalbummusic=(musicname,musictype)=>{
        let m_uri=`${config.resourceServer}/WebView/${musicname}.${musictype}`
        if(this.sound||this.sound!=undefined){
            if(this.state.m_uri==m_uri){ //播放路径一样时-表示暂停
                this.sound.pause()
            }
            else{ //播放路径不一样，表示换曲
                this.sound.release()
                this.sound=null
                this.playalbummusic(musicname,musictype)
            }
        }

        else{
            this.setState({
                m_uri:m_uri
            },()=>{
                this.playmusic()
            })
        }
    }
    playmusic=()=>{
        this.sound = new Sound({uri:this.state.m_uri},(error) => {
            if (error) {
                ToastAndroid.show('加载音频出错了！',2000)
                return;
            }
            this.sound.play((success) => {
                if(success){
                    ToastAndroid.show('播放完毕！',2000)
                }
                else{
                    ToastAndroid.show('播放出错了',2000)
                }
            })

        });
    }

    render() {
        return (
            <View style={{ marginBottom: 80 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingTop: 10, paddingBottom: 10, margin: 10 }}>
                    <Text style={{ fontSize: 26 }} onPress={() => this.props.navigation.pop()}>←</Text>
                    <Text style={{ fontSize: 18 }}>{this.state.useralbum.author}-{this.state.useralbum.m_name}</Text>
                    <Icon size='md' name='share-alt' color='#666' />
                </View>
                <ScrollView style={{ backgroundColor: '#2e311a' }}>
                    <View style={{ padding: 10 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5, marginTop: 10, marginBottom: 10 }}>
                            <Text style={{ color: 'white' }}>七只企鹅音乐</Text>
                            <Icon name='ordered-list' size='md' color='white' />
                        </View>
                        <View style={{ alignItems: 'center', marginTop: 10, marginBottom: 20 }}>
                            <Image source={{ uri: config.resourceServer + this.state.useralbum.m_image_path }} style={{ height: 160, width: 260 }} />
                            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18, padding: 10 }}>{this.state.useralbum.m_name}</Text>
                            <Text style={{ color: '#ddd', fontSize: 12 }}>
                                {this.state.useralbum.author}
                                <Text style={{ fontSize: 16, color: '#999' }}> ></Text>
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', borderTopWidth: 0.5, borderBottomWidth: 0.5, borderColor: '#888', paddingTop: 20, paddingBottom: 20 }}>
                            <View>
                                <Text style={{ color: '#ea0' }}>￥{this.state.useralbum.sell}</Text>
                                <Text style={{ color: '#aaa' }}>已售
                           <Text style={{ color: '#fff' }}>  {this.state.useralbum.sold}  </Text>
                                    张专辑</Text>
                            </View>
                            <View>
                                <Text style={{ backgroundColor: '#fa0', padding: 8, borderRadius: 16, fontSize: 12, color: '#fff' }}>  立即支持  </Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Icon size='xxs' name='check-circle' color='#666' />
                                {/* style={{backgroundColor:'#aaa',borderRadius:10,padding:2}}  */}
                                <Text style={{ marginLeft: 10, fontSize: 12, color: '#aaa' }}>该专辑无损音质品质试听</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Icon size='xxs' name='check-circle' color='#666' />
                                <Text style={{ marginLeft: 10, fontSize: 12, color: '#aaa' }}>该专辑无损音质品质下载</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ backgroundColor: '#333', height: 20 }}></View>
                    <View style={{ padding: 10 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ color: '#fff', fontSize: 16, color: '#fa0', padding: 5, borderBottomWidth: 1, borderBottomColor: '#fa0', marginBottom: 10 }}>专辑详情</Text>
                            <Text style={{ color: '#fff', fontSize: 16, padding: 10 }}>粉丝活动</Text>
                            <Text style={{ color: '#fff', fontSize: 16, padding: 10 }}>评论</Text>
                        </View>
                        <View>
                            <Text style={{ color: '#ccc', fontSize: 12, }}>         {this.state.useralbum.detail}</Text>
                        </View>
                    </View>
                    <View style={{ margin: 20, borderTopWidth: 1, borderTopColor: '#888' }}>
                        <Text style={{ color: 'white', fontSize: 18, marginTop: 10, marginTop: 10, marginBottom: 20 }}>歌曲列表</Text>
                        {
                            this.state.albumlist.length >= 2 ? this.state.albumlist.map((item, index) =>
                                <TouchableOpacity onPress={()=>this.playalbummusic(item[0].music_path,item[0].music_type)} ke={index + 5} style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10, alignItems: 'center', borderBottomWidth: 0.5, borderBottomColor: '#888', paddingBottom: 5 }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{ color: '#fff', fontSize: 14 }}>{index + 1}</Text>
                                        <View>
                                            <Text style={{ color: '#fff', fontSize: 14, marginLeft: 10 }}>{item[0].music_path}</Text>
                                            <Text style={{ color: '#aaa', fontSize: 10, marginLeft: 20 }}>{item[0].description}</Text>
                                        </View>
                                    </View>
                                    <Icon name='play-circle' size='md' color='#fff' ref={'list'+index}/>
                                </TouchableOpacity>
                            ) :
                            <TouchableOpacity onPress={()=>this.playalbummusic(this.state.albumlist.name,this.state.albumlist.music_type)} style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10, alignItems: 'center', borderBottomWidth: 0.5, borderBottomColor: '#888', paddingBottom: 5 }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{ color: '#fff', fontSize: 14 }}>1</Text>
                                        <View>
                                            <Text style={{ color: '#fff', fontSize: 14, marginLeft: 10 }}>{this.state.albumlist.name}</Text>
                                            <Text style={{ color: '#aaa', fontSize: 10, marginLeft: 20 }}>{this.state.albumlist.description}</Text>
                                        </View>
                                    </View>
                                    <Icon name='play-circle' size='md' color='#fff' />
                                </TouchableOpacity>
                        }
                    </View>
                </ScrollView>

            </View>
        );
    }
}

export default PersonAlbum;