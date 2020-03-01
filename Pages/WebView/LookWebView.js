import React from 'react'
import {ProgressBarAndroid,View,StyleSheet, Modal, Text,Button,Dimensions ,ToastAndroid} from 'react-native'
import { WebView } from 'react-native-webview';
const {height}=Dimensions.get('window')
class LookWebView extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            modalVisible:false,
            progress:0
         }
    }
    // onLoadStart=(e)=>{
    //     console.log('开始加载')
    // }
    // onLoad=(e)=>{
    //     console.log('加载中')
    //     console.log(e.nativeEvent.loading)
        
    // }
    // onLoadEnd=(e)=>{
    //     console.log('加载完成')
    //     // console.log(e)
    // }
    onError=(e)=>{
        console.log('出错了')
        // console.log(e)
        this.setState({
            modalVisible:true
        })
    }
   
    render() { 
        return ( 
            // <Text>HELLO WEBVIEW</Text>
            <View style={styles.container}>
            {this.state.progress !== 1 && <ProgressBarAndroid
                //这是进度条颜色
                style={{marginTop:height/2.5}}
                progressTintColor="green"
                progress={this.state.progress}
                // style={{marginTop:height/2.5}}
                />}
            <WebView 
            // onLoadStart={this.onLoadStart} 
            // onLoadEnd={this.onLoadEnd} 
            // onLoad={this.onLoad} 
            onLoadProgress={({ nativeEvent }) =>
            {
                this.setState({ progress: nativeEvent.progress })
                ToastAndroid.show('视频加载超过10秒，可能主播没开播',5000)
            }}
            onError={this.onError} 
            source={{ uri: `${this.props.navigation.getParam('playurl')}?type=app` }} 
            />

            <Modal
                animationType="slide"
                transparent={false}
                visible={this.state.modalVisible}
                // onRequestClose={}
                >
                    <View style={{display:'flex',flexDirection:'column',alignItems:'center',marginTop:height/2.5}}>
                        <View style={{marginBottom:20,flexDirection:'column',alignItems:'center'}}>
                        <Text style={{color:'#666',fontSize:18,}}>很奇怪，加载出错了...</Text>
                        <Text style={{color:'#ccc',fontSize:10,}}>请点击返回按钮！</Text>
                        </View>
                        <Button onPress={()=>this.props.navigation.pop()} title='返回'/>
                    </View>
                </Modal>
            </View>
         );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
});
export default LookWebView;