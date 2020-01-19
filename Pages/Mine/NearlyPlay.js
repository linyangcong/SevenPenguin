import React from 'react'
import { View, Text,ScrollView ,TouchableOpacity,ToastAndroid} from 'react-native'
import { Icon } from '@ant-design/react-native';
import Axios from 'axios'
import config from '../../config'
import Sound from 'react-native-sound'
class NearlyPlay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            NearlyMusic: [],
        }
    }
    componentDidMount() {
        Axios.get(`${config.serverUrl}/Music/List`).then(res => {
            if (res.status == 200) {
                this.setState({
                    NearlyMusic: res.data
                })
            }
            else {
                ToastAndroid.show("服务器异常！", 2000)
            }

        }).catch(e => {
            ToastAndroid.show(e, 2000)
        })
    }
    playnearlymusic(musicObject){
        let m_uri=`${config.resourceServer}/WebView/${musicObject.name}.${musicObject.music_type}`
        if(this.sound||this.sound!=undefined){
            if(this.state.m_uri==m_uri){ //播放路径一样时-表示暂停
                this.sound.pause()
            }
            else{ //播放路径不一样，表示换曲
                this.sound.release()
                this.sound=null
                this.playnearlymusic(musicObject.name,musicObject.music_type)
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
    componentWillUnmount(){
        if(this.sound){
            this.sound.release()
            this.sound=null
        }
    }
    render() {
        return (
            <View>
                <View style={{ flexDirection: 'row', padding: 12, justifyContent: 'space-between', alignItems: 'center', borderBottomColor: '#ccc', borderBottomWidth: 0.5 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Icon name='arrow-left' color='#333' size='md' />
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#333' }}>  最近播放</Text>
                    </View>
                    <Text style={{ fontSize: 15, color: '#000', marginRight: 10 }}>清空</Text>
                </View>
                <ScrollView style={{padding:10}}>
                    {this.state.NearlyMusic.map((item,index)=>
                        <View key={index} style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginBottom:16}}>
                            <View>
                                
                                <Text style={{fontSize:16}}>{item.name}</Text>
                                <View style={{flexDirection:'row',alignItems:'center'}}>
                                <Text style={{display:item.flag.only?'flex':'none',borderColor:'red',borderWidth:0.5,color:'red',fontSize:6,padding:2}}>独家</Text>
                                <Text style={{display:item.flag.SQ?'flex':'none',borderColor:'red',borderWidth:0.5,color:'red',fontSize:6,marginLeft:2,padding:2}}>SQ</Text>
                                <Text style={{color:"#aaa",fontSize:10}}>{item.author}-{item.description}</Text>
                                </View>
                            </View>
                            <View  style={{flexDirection:'row'}}>
                                <TouchableOpacity onPress={()=>this.playnearlymusic(item)}>
                                    <Icon name='play-circle' />
                                </TouchableOpacity>
                                <Icon name='ellipsis' style={{marginLeft:10,marginRight:10}}/>
                            </View>
                        </View>
                        )}
                </ScrollView>
            </View>
        );
    }
}

export default NearlyPlay;