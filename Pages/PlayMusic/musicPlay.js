import React from 'react';
import VideoPlayer from 'react-native-video-controls';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Dimensions,
    ScrollView
} from 'react-native';
import Orientation from 'react-native-orientation'
const { height, width } = Dimensions.get('window')
// import ProgressItem from './ProgressItem'
import ControlPlayer from './ControlPlayer'
import Video from 'react-native-video';
import config from '../../config'

class musicPlay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rate: 1,
            volume: 1,
            muted: false,
            resizeMode: 'stretch',
            paused: false,
            percent: 0,
            currentTime: 0,
            durationTime: 0,
            fullscreen: true,
            backgroundVideo: {
                height: 200
                //   backgroundColor:'pink'
            },

        };
        this.changstatus=this.changstatus.bind(this)
        this.changeOrientation=this.changeOrientation.bind(this)
        
    }
    componentDidMount() {

    }
    changeOrientation(){
        this.state.fullscreen ?
        Orientation.lockToLandscape() :
        Orientation.lockToPortrait();
    Orientation.getOrientation((err, orientation) => {
        if (err) return;
        if (orientation == 'LANDSCAPE') {
            this.setState({
                backgroundVideo: {
                    height: height
                }
            })
        }
        // console.log(orientation)
    })
    this.setState({
        fullscreen: !this.state.fullscreen,
    })
    }
    onProgress(time) {
        this.setState({
            currentTime: time.currentTime,
            durationTime: time.seekableDuration,
            // percent:this.getCurrentTimePercentage
            percent: (time.currentTime / time.seekableDuration) * 100
        })
    }
    changstatus(){
        // console.log(this.state.paused)
        this.setState({
            paused:!this.state.paused
        })
    }
    getCurrentTimePercentage() {
        if (this.state.currentTime > 0) {
            return parseFloat(this.state.currentTime) / parseFloat(this.state.duration);
        } else {
            return 0;
        }
    }
    formerTime(time) {
        let hours = parseInt(time / 60 / 60);
        let minus = parseInt(time / 60);
        let seconds = parseInt(time % 60);
        return (hours + ':' + (minus < 10 ? '0' + minus : minus) + ':' + (seconds < 10 ? '0' + seconds : seconds));
    }
    render() {
        const durationTime = this.formerTime(this.state.durationTime);
        const currentTime = this.formerTime(this.state.currentTime);
        return (
            <View style={{ display: this.props.show ? 'flex' : 'none', backgroundColor: '#333',minHeight:500 }}>
                <ScrollView>
                    {/* <View> */}
                    {/* <Video
                        ref={(ref) => { //方法对引用Video元素的ref引用进行操作
                            this.video = ref
                        }}
                        source={{ uri: 'https://gslb.miaopai.com/stream/HNkFfNMuhjRzDd-q6j9qycf54OaKqInVMu0YhQ__.mp4?ssig=bbabfd7684cae53660dc2d4c2103984e&time_stamp=1533631567740&cookie_id=&vend=1&os=3&partner=1&platform=2&cookie_id=&refer=miaopai&scid=HNkFfNMuhjRzDd-q6j9qycf54OaKqInVMu0YhQ__', type: 'mpd' }}
                        // source={require('./imgs/message.mp3')}//设置视频源  
                        repeat={true}
                        style={this.state.backgroundVideo}//组件样式
                        rate={this.state.rate}//播放速率
                        paused={this.state.paused}//暂停
                        volume={this.state.volume}//调节音量
                        muted={this.state.muted}//控制音频是否静音
                        resizeMode={this.state.resizeMode}//缩放模式
                        fullscreen={!this.state.fullscreen}
                        // onLoad={this.onLoad}//加载媒体并准备播放时调用的回调函数。
                        onProgress={this.onProgress.bind(this)}//视频播放过程中每个间隔进度单位调用的回调函数
                        // onEnd={this.onEnd}//视频播放结束时的回调函数
                        // onAudioBecomingNoisy={this.onAudioBecomingNoisy}//音频变得嘈杂时的回调 - 应暂停视频
                        // onAudioFocusChanged={this.onAudioFocusChanged}//音频焦点丢失时的回调 - 如果焦点丢失则暂停
                        repeat={false}//确定在到达结尾时是否重复播放视频。
                        
                    />
                    
                    {/* <ProgressItem durationTime={durationTime} currentTime={currentTime} percent={this.state.percent} paused={this.state.paused}
                    fullscreen={this.state.fullscreen} backgroundVideo={this.state.backgroundVideo} changeOrientation={this.changeOrientation}
                    changstatus={this.changstatus} 
                    /> */}
            <VideoPlayer
            source={{uri:`${config.resourceServer}/WebView/message.mp4`}}
            disableBack='off'
            disableFullscreen='off'

            />                  
                </ScrollView>
                {/* </View> */}
            </View>
        );
    }
}
export default musicPlay;