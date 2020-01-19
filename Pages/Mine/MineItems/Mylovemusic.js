import React from 'react'
import { Text, View, Image, ScrollView, TouchableOpacity,ToastAndroid ,StatusBar} from 'react-native'
import Axios from 'axios'
import config from '../../../config'
import { Icon } from '@ant-design/react-native';
// const { height } = Dimensions.get('window').height
class MyLoveMusice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabflag: 0,
            topposition: true,
            dataflag: true,
            scrollflag: true,
            playId:0,
            playSeconds:0,
            musiclist: [
                // { name: '世间美好与你环环相扣', flag: { only: true, SQ: true }, author: '柏松-听闻余生' },
                // { name: '世间美好与你环环相扣', flag: { only: false, SQ: true }, author: '柏松-听闻余生' },
                // { name: '世间美好与你环环相扣', flag: { only: true, SQ: true }, author: '柏松-听闻余生' },
                // { name: '世间美好与你环环相扣', flag: { only: true, SQ: true }, author: '柏松-听闻余生' },
                // { name: '世间美好与你环环相扣', flag: { only: false, SQ: true }, author: '柏松-听闻余生' },
                // { name: '世间美好与你环环相扣', flag: { only: true, SQ: true }, author: '柏松-听闻余生' },
                // { name: '世间美好与你环环相扣', flag: { only: true, SQ: true }, author: '柏松-听闻余生' },
                // { name: '世间美好与你环环相扣', flag: { only: true, SQ: true }, author: '柏松-听闻余生' },
                // { name: '世间美好与你环环相扣', flag: { only: true, SQ: true }, author: '柏松-听闻余生' },
                // { name: '世间美好与你环环相扣', flag: { only: true, SQ: true }, author: '柏松-听闻余生' },
                // { name: '世间美好与你环环相扣', flag: { only: true, SQ: true }, author: '柏松-听闻余生' },
                // { name: '世间美好与你环环相扣', flag: { only: true, SQ: true }, author: '柏松-听闻余生' },
                // { name: '世间美好与你环环相扣', flag: { only: true, SQ: true }, author: '柏松-听闻余生' },
                // { name: '世间美好与你环环相扣', flag: { only: true, SQ: true }, author: '柏松-听闻余生' },
                // { name: '世间美好与你环环相扣', flag: { only: true, SQ: true }, author: '柏松-听闻余生' },
                // { name: '世间美好与你环环相扣', flag: { only: true, SQ: true }, author: '柏松-听闻余生' },
                // { name: '世间美好与你环环相扣', flag: { only: true, SQ: true }, author: '柏松-听闻余生' },
                // { name: '世间美好与你环环相扣', flag: { only: true, SQ: true }, author: '柏松-听闻余生' },
                // { name: '世间美好与你环环相扣', flag: { only: true, SQ: true }, author: '柏松-听闻余生' },
                // { name: '世间美好与你环环相扣', flag: { only: true, SQ: true }, author: '柏松-听闻余生' },
                // { name: '世间美好与你环环相扣', flag: { only: true, SQ: true }, author: '柏松-听闻余生' },
            ]
        }
    }
    componentDidMount(){
        Axios.get(`${config.serverUrl}/Music/List`).then(res=>{
            // console.log(res)
            if(res.status==200){
                this.setState({
                    musiclist:res.data
                })
            }
            else{
                ToastAndroid.show("服务器异常！",2000)
            }
            
        }).catch(e=>{
            ToastAndroid.show(e,2000)
        })
        // this.setState({
        //     musiclist
        // })
    }
    changepanel(item){
        this.setState({
            actplayId:item.id
        })
        // if(item.flag.only) 
        this.props.navigation.navigate('PlayerMusic',{
            musicDetail:item,
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
        // else this.props.navigation.navigate('PlayerVedio',{videoDetail:item})
    

    }
    render() {
        return (
            <View style={{ backgroundColor: 'black' }}>
                <StatusBar hidden={true} />
                <View style={{ backgroundColor: '#000' }}>
                    <ScrollView
                        onPress={() => { this.setState({ scrollflag: true }) }}
                        scrollEnabled={this.state.scrollflag}
                        showsVerticalScrollIndicator={false}
                        stickyHeaderIndices={[0]}
                        // scrollTo={() => { return { x: 100, y: 200, animated: true }; }}
                        onScroll={(event) => {
                            // console.log(event.nativeEvent.contentOffset.y)
                            if (event.nativeEvent.contentOffset.y >= 100) {
                                this.setState({ topposition: false })
                            }
                            else {
                                this.setState({ topposition: true })
                            }
                            // if(event.nativeEvent.contentOffset.y>=140){
                            //     this.setState({
                            //         scrollflag:false
                            //     })
                            // }
                            // else{
                            //     this.setState({
                            //         scrollflag:true
                            //     })
                            // }

                        }}
                    >
                        <View style={{ padding: 2, position: 'relative', backgroundColor: 'rgba(0,0,0,0.5)', width: '100%' }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ color: '#fff', fontSize: 30, alignSelf: 'center' }} onPress={() => this.props.navigation.pop()}>←</Text>
                                    <Text style={{ color: '#fff', fontSize: 20, alignSelf: 'center', marginLeft: 10 }}>{this.state.topposition ? '歌单' : '我喜欢的音乐'}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', display: this.state.topposition ? 'flex' : 'none', marginRight: 10 }}>
                                    <Text style={{ fontSize: 20, alignSelf: 'center', marginRight: 10 }}>🔍</Text>
                                    <Image source={require('../../../Asserts/Icons/Discovery/点点.png')} style={{ height: 20, width: 20, alignSelf: 'center' }} />
                                </View>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', marginLeft: 30, marginBottom: 50 }}>
                            <View>
                                <Image source={require('./Imgs/心.png')} style={{ height: 100, width: 100 }} />
                            </View>
                            <View style={{ marginLeft: 20 }}>
                                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>我喜欢的音乐</Text>
                                <TouchableOpacity style={{ flexDirection: 'row', marginTop: 10 ,display:this.props.navigation.getParam('userimg')?'flex':'none'}}  >
                                    <Image source={require('../../../Asserts/Icons/User/user.png')} style={{ width: 20, height: 20, borderRadius: 10 }} />
                                    {/* <Text onPress={() => { this.props.goback(3) }} style={{ color: 'white', fontSize: 14, color: '#888', alignSelf: 'center' }}>  {this.props.userdetail.name} ></Text> */}
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: 10, backgroundColor: '#fff' }}>
                            <View style={{ flexDirection: 'row', padding: 5 }}>
                                <Image source={require('./Imgs/音乐.png')} style={{ width: 20, height: 20, borderRadius: 10 }} />
                                <Text style={{ fontSize: 14, color: '#000', marginLeft: 10 }}>播放全部</Text>
                                <Text style={{ fontSize: 12, color: '#aaa' }}>(共15首)</Text>
                            </View>
                            <ScrollView
                                onPress={() => {
                                    this.setState({
                                        scrollflag: false
                                    })
                                }}
                                showsVerticalScrollIndicator={false}
                                // scrollEnabled={true}
                                scrollEnabled={!this.state.scrollflag}
                                style={{ maxHeight: 650 }}
                            // onScroll={(event) => {
                            //     console.log(event.nativeEvent.contentOffset.y)
                            //     if(event.nativeEvent.contentOffset.y<=300){
                            //         this.setState({
                            //             scrollflag:true
                            //         })
                            //     }
                            //     else{
                            //         this.setState({
                            //             scrollflag:false
                            //         })
                            //     }
                            // }}
                            >
                                <View style={{ marginBottom: 60 }}>
                                    {
                                        this.state.musiclist.map((item, index) =>
                                            <TouchableOpacity ref={'musiclist'+item.id} key={index} style={{ backgroundColor:this.state.actplayId==item.id?'#eef':'white', flexDirection: 'row', padding: 10, marginTop: 5 }} onPress={this.changepanel.bind(this,item)}
                                            >
                                                <Text style={{ alignSelf: 'center', color: '#888', fontSize: 14, flex: 1 }}>{index + 1}</Text>
                                                <View >
                                                    <Icon name='pause' key={index} size='lg' style={{opacity:this.state.playId==item.id?1:0,position:'absolute',zIndex:600,left:4}}/>
                                                    <View style={{opacity:this.state.playId==item.id?0:1}}>
                                                    <Image source={{uri:config.resourceServer+'/WebView/Imgs/'+item.image+'.'+item.img_type}} style={{height:40,width:40,borderRadius:5}}/>
                                                    </View>
                                                    
                                                </View>
                                                <View style={{ flex: 10 ,overflow:'scroll',marginLeft:10}}>
                                                    <Text style={{ color: '#333' }}>{item.name}</Text>
                                                    <View style={{ flexDirection: 'row' }}>
                                                        <Text style={{ display: item.flag.only ? 'flex' : 'none', color: '#f00', borderWidth: item.flag.only ?1:0, borderColor: '#f00', fontSize: 6, padding: item.flag.only ?0.5:0, alignSelf: 'center', textAlign: 'center' }}>独家</Text>
                                                        <Text style={{ display: item.flag.SQ ? 'flex' : 'none', color: '#f00', borderWidth: item.flag.SQ ?1:0, borderColor: '#f00', fontSize: 6, padding:item.flag.SQ ? 0.5:0, alignSelf: 'center', marginLeft: 2, textAlign: 'center' }}>SQ</Text>
                                                        <Text style={{ fontSize: 10, color: '#888' }}>{item.author}</Text>
                                                    </View>
                                                </View>
                                                <View style={{ flexDirection: 'row', flex: 1, alignSelf: 'center' }}>
                                                    {/* <Image source={require('./Imgs/音乐.png')} style={{ height: 20, width: 20, borderRadius: 5 }} /> */}
                                                    {/* <Icon type='pausecircleo'/> */}
                                                    <Icon name='caret-right' key={index} size='xxs' style={{borderWidth:1,borderColor:'#ccc',borderRadius:6,paddingLeft:3,paddingTop:3,paddingBottom:3}}/>
                                                    <Image source={require('../../../Asserts/Icons/Discovery/点点.png')} style={{ width: 20, height: 20 }} />
                                                </View>
                                            </TouchableOpacity>
                                        )
                                    }
                                </View>
                            </ScrollView>
                        </View>
                    </ScrollView>
                </View>
            </View>
        );
    }
}

export default MyLoveMusice;
