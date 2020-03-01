import React from 'react'
import { WebView } from 'react-native-webview';
import config from '../../config'
import store from '../../Store/StoreRedux'
import { View, StyleSheet, ProgressBarAndroid, Modal, Text,Button,Dimensions } from 'react-native'
const {height,width}=Dimensions.get('window')
class CommunicationWebView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            progress: 0,
            modalVisible:false,
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
    onError = (e) => {
        console.log('出错了')
        this.setState({
            modalVisible:true
        })
        // console.log(e)
    }
    render() {
        return (
            // <Text>HELLO WEBVIEW</Text>
            <View style={styles.container}>
                {/* <View style={styles.titleBar}/> */}
                {this.state.progress !== 1 && <ProgressBarAndroid
                    //这是进度条颜色
                    progressTintColor="green"
                    progress={this.state.progress} 
                    style={{marginTop:height/2.5}}
                    />}
                <WebView
                    onLoadProgress={({ nativeEvent }) =>
                        this.setState({ progress: nativeEvent.progress })}
                    // onLoadStart={this.onLoadStart} 
                    // onLoadEnd={this.onLoadEnd} 
                    onError={this.onError}
                    source={{ uri: `${config.webviewServer}/#/login/fromApp?username=${store.getState().loginAction.loginDetail.username}&password=${store.getState().loginAction.loginDetail.password}` }} />
                
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
    },
});
export default CommunicationWebView;