import React from 'react'
import config from '../../config'
import { View, Text, Image, Dimensions, Animated, Easing, StyleSheet, TouchableOpacity, StatusBar } from 'react-native'
// import ProgressItem from './ProgressItem'
import Sound from 'react-native-sound';
// import Axios from 'axios'
import { Icon, Progress } from '@ant-design/react-native';
const { height, width } = Dimensions.get('window')
const imgwidth = width * 0.58;
class PlayMusic extends React.Component {
    constructor(props) {
        super(props);
        this.sliderEditing = false;
        this.state = {
            shutdown:false,
            musicname: "",
            playSeconds:0,
            musciPath:{
                uri:`${config.resourceServer}/WebView/${this.props.navigation.getParam('musicDetail').name}.${this.props.navigation.getParam('musicDetail').music_type}`},
            playState: 'paused', //playing, paused
            durations: 0,
            operationtools: [
                { name: 'heart' },
                { name: 'download' },
                { name: 'bell' },
                { name: 'message' },
                { name: 'ellipsis' },
            ],
            playtools: [
                { name: 'reload' },
                { name: 'step-backward' },
                { name: 'pause', name1: 'caret-right' },
                { name: 'step-forward' },
                { name: 'menu-unfold' },
            ],
            longtime: '04:32',
            percent: 0,
        };
        this.spinValue = new Animated.Value(0)
        this.playbarVallue=new Animated.Value(0)
    }
    componentDidMount() {
    //    console.log(this.props.navigation.getParam('musicDetail'))
        // if(this.props.navigation.getParam('soundObj')&&this.props.navigation.getParam('soundObj')!=undefined){
        //     this.sound=this.props.navigation.getParam('soundObj')
        //     this.setState({
        //         durations:this.sound.getDuration()
        //     })
        //     return ;
        // }
        this.setState({
            shutdown:this.props.navigation.getParam('shutdown')
        })
        if(this.sound||this.sound!=undefined){
            this.sound.release();
            this.sound = null;
            clearTimeout(this.timeout)
        }
        this.sound = new Sound(this.state.musciPath,(error) => {
            if (error) {
                this.setState({ playState: 'paused' });
                return;
            }
            this.setState({
                durations:this.sound.getDuration()
            })
        });
    }
    componentWillUnmount(){
        if(this.state.shutdown){
            this.sound.release();
            this.sound = null;
        }
    }
    // componentWillUnmount(){
    //     if(this.sound){
    //         this.sound.release();
    //         this.sound = null;
    //     }
    //     if (this.timeout) {
    //         clearInterval(this.timeout);
    //     }
    // }
    spin = () => {
        this.spinValue.setValue(0)
        // if(this.state.playState == 'playing')
            Animated.timing(this.spinValue, {
                toValue: 1, // 最终值 为1，这里表示最大旋转 360度
                duration: this.state.durations*1000,
                easing: Easing.linear
            }).start()
    }
    stopspin = () => {
        this.spinValue.setValue(0)
        // if(this.state.playState == 'playing')
            Animated.timing(this.spinValue, {
                toValue: 0, // 最终值 为1，这里表示最大旋转 360度
                duration: 0,
                easing: Easing.linear
            }).stop()
    }
    clickBottomTool(index){
        switch(index){
            case 0:this.rePlay();break;
            case 1:this.lastPlay();break;
            case 2:this.playmusic();break;
            case 3:this.nextPlay();break;
            case 4:this.playMenu();break;
        }
    }
    rePlay(){
        // console.log(0)
    }
    lastPlay(){
        // console.log(1)
    }
    playmusic() {
            if (this.state.playState == 'playing') {
                if (this.sound) {
                    this.stopspin()
                    setTimeout(() => {
                        this.stopplaybar()
                    },500)

                    this.sound.release();
                    this.sound = null;
                }

                if (this.timeout) {
                    clearInterval(this.timeout);
                }
                this.setState({
                    playState: 'paused'
                })
            }
            else if (this.state.playState == 'paused') {
                if(this.props.navigation.getParam('soundObj')!=undefined&&this.props.navigation.getParam('soundObj').release()!=undefined){
                    this.props.navigation.getParam('soundObj').release()
                }
                if(this.props.navigation.getParam('timeOut')){
                    clearTimeout(this.props.navigation.getParam('timeOut'))
                }
                if(!this.sound){
                    this.sound = new Sound(this.state.musciPath,(error) => {
                        if (error) {
                            this.setState({ playState: 'paused' });
                            return;
                        }
                        this.setState({
                            durations:this.sound.getDuration()
                        })
                    });
                }
                this.props.navigation.state.params.callback(this.props.navigation.getParam('musicDetail').id,this.sound,this.timeout)
                this.playbar();
                setTimeout(() => {
                    this.play();
                    this.spin();
                    this.CurrentTimer();
                }, 1000);  
            }
        
        
    }
    CurrentTimer=()=>{
        this.timeout = setInterval(() => {
            if (this.sound && this.sound.isLoaded() && this.state.playState == 'playing' && !this.sliderEditing) {
                this.sound.getCurrentTime((seconds, isPlaying) => {
                    this.setState({percent:(this.state.playSeconds/this.state.durations)*100, playSeconds: seconds });
                    // this.props.navigation.state.params.listenToProgress(this.state.percent)
                })
            }
        }, 1000);
    }
    play =() => {
            // this.setState({ durations: this.sound.getDuration()});
            this.sound.play((success) => {
                if(success){
                    setTimeout(() => {
                        this.stopplaybar();
                    }, 800);
                    this.stopspin();
                    if (this.timeout) {
                        clearInterval(this.timeout);
                    }
                    this.setState({ playState: 'paused', playSeconds: 0 });
                    this.sound.setCurrentTime(0);
                    if (this.sound) {
                        this.sound.release();
                        this.sound = null;
                    }
                }
            });
            this.setState({ playState: 'playing' });
    }
    nextPlay(){
        // console.log(3)
    }
    playMenu(){
        // console.log(4)
    }
    // pause = () => {
    //     if(this.sound){
    //         this.sound.pause();
    //     }

    //     this.setState({playState:'paused'});
    // }
    getAudioTimeString(seconds) {
        const m = parseInt(seconds % (60 * 60) / 60);
        const s = parseInt(seconds % 60);

        return ((m < 10 ? '0' + m : m) + ':' + (s < 10 ? '0' + s : s));
    }

    playbar=()=>{
        this.playbarVallue.setValue(0)
        Animated.timing(this.playbarVallue, {
            toValue: 1, // 最终值 为1，这里表示最大旋转 360度
            duration: 800,
            easing: Easing.linear
        }).start()
    }
    stopplaybar=()=>{
        this.playbarVallue.setValue(1)
        Animated.timing(this.playbarVallue, {
            toValue: 0, // 最终值 为1，这里表示最大旋转 360度
            duration: 800,
            easing: Easing.linear
        }).start()
    }
    render() {
        const currentTimeString = this.getAudioTimeString(this.state.playSeconds);
        const durationString = this.getAudioTimeString(this.state.durations); //获取播放时长必须开始播放play()才能获取getDuration()
        //映射 0-1的值 映射 成 0 - 360 度  
        const spin = this.spinValue.interpolate({
            inputRange: [0, 1],//输入值
            outputRange: ['0deg', `${this.state.durations*36}deg`] //输出值
        })
        const playbar = this.playbarVallue.interpolate({
            inputRange: [0, 1],//输入值
            outputRange: ['0deg', '40deg'] //输出值
        })
        return (
                <View style={{backgroundColor: '#333', height: height }}>
                    <StatusBar hidden={true} />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 25, color: '#fff', padding: 10 }} onPress={()=>this.props.navigation.pop()}>←</Text>
                            <Text style={{ fontSize: 16, color: '#fff', padding: 10, alignSelf: 'center' }}
                            >{this.props.navigation.getParam('musicDetail').name}</Text>
                        </View>
                        <Image source={require('../../Asserts/Icons/share.png')} style={{ width: 24, height: 24, alignSelf: 'center', margin: 10 }} />
                    </View>

                    <View style={{  backgroundColor: 'black', width: (width * 0.8),height:(width * 0.8), alignSelf: 'center', borderRadius: (width * 0.4), marginTop:120}} >
                        <Animated.Image ref="playdis" source={{uri:config.resourceServer+'/WebView/Imgs/'+this.props.navigation.getParam('musicDetail').image+'.'+this.props.navigation.getParam('musicDetail').img_type}} style={{alignSelf:'center',width: imgwidth, height: imgwidth,marginTop:(width * 0.4-imgwidth/2), borderRadius: (imgwidth / 2), transform: [{ rotate: spin }] }} />
                        <Animated.Image source={require('./imgs/播放条.png')} style={{ height: 130, width: 160, zIndex: 999,marginTop:-(imgwidth+130),marginLeft:130, transform: [{ rotate: playbar}] }} />
                    </View>
                    <Text> </Text>
                    <Text> </Text>
                    <Text> </Text>
                    <Text> </Text>
                    <View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10, alignItems: 'center' }}>
                            {
                                this.state.operationtools.map((item, index) =>
                                    <Icon name={item.name} key={index} size={index == 2 ? 'lg' : 'xs'} />
                                )
                            }
                        </View>
                        <View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={[progress.progressFont, { marginLeft: 20 }]}>{currentTimeString}</Text>
                                {/* <View style={{ backgroundColor: '#888', width: (width - 120), height: 1, alignSelf: 'center' }}>
                                    <View style={{ backgroundColor: '#ccc', height: 2, width: `${this.state.timing}%`, position: 'absolute' }}></View>
                                </View> */}
                                <Progress percent={this.state.playState=='playing'?this.state.percent:(this.state.playState=='paused'?0:100)} style={{ marginLeft: 20, marginRight: 20, height: 3 }} />
                                <Text style={[progress.progressFont, { marginRight: 20 }]}>{durationString}</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10, alignItems: 'center' }}>
                            {
                                this.state.playtools.map((item, index) =>
                                    <TouchableOpacity key={'operation' + index} onPress={() => this.clickBottomTool(index)}>
                                        <Icon name={index == 2 & this.state.playState == 'playing' ? item.name : (index == 2 & this.state.playState == 'paused' ? item.name1 : item.name)} key={index} size={index == 2 ? 'lg' : 'xs'} />
                                    </TouchableOpacity>
                                )
                            }
                        </View>
                    </View>
                </View>
        );
    }
}
const progress = StyleSheet.create({
    progressFont: {
        fontSize: 12,
        color: 'white'
    },
    progressimg: {
        height: 20,
        width: 20
    },
    progressimgMain: {
        height: 40,
        width: 40
    }
})
export default PlayMusic;