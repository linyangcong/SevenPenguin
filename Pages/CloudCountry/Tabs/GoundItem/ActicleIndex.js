import React from 'react'
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native'
// import {WebView } from 'react-native-webview'
import config from '../../../../config'
class ActicleIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            detail: {}
        }
    }
    componentDidMount() {
        this.setState({
            detail: this.props.navigation.getParam('detail')
        })
        // console.log(this.props.navigation.getParam('detail'))
    }
    render() {
        return (
            <ScrollView >
                <View style={{ backgroundColor: "#333", padding: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',marginTop:10 }}>
                        <Text style={{ fontSize: 30, color: 'white' }} onPress={() => this.props.navigation.pop()}>←</Text>
                        <Text style={{ fontSize: 16, color: 'white', textAlign: 'center', maxWidth: '70%' }}>{this.state.detail.title}</Text>
                        <Text >   </Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginTop: 10 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ color: '#aaa', fontSize: 10 }}>作者: </Text>
                            <Image source={{ uri: config.resourceServer + this.state.detail.author_img }} style={{ display: this.state.detail.author_name ? 'flex' : 'none', height: 20, width: 20, borderRadius: 10 }} />
                            <Text style={{ display: this.state.detail.author_name ? 'flex' : 'none', marginLeft: 5, color: '#aaa', fontSize: 12 }}>{this.state.detail.author_name}</Text>
                            <Text style={{ display: this.state.detail.author_name ? 'none' : 'flex', color: '#aaa', fontSize: 12 }}>匿名</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ color: '#aaa', fontSize: 10 }}>{this.state.detail.share_count ? '分享:' + this.state.detail.share_count : ''}</Text>
                            <Text style={{ marginLeft: 10, color: '#aaa', fontSize: 10 }}>{this.state.detail.supportor ? '赞:' + this.state.detail.supportor : ''}</Text>
                        </View>
                    </View>
                </View>

                <View style={{ padding: 10 }}>
                    <View>
                        <Image source={{ uri: config.resourceServer + this.state.detail.img_path }} style={{ height: 200 }} />
                    </View>
                    <View style={{ marginTop: 10 }}>
                        {/* <WebView
                            originWhitelist={['*']}
                            source={{ html: '<div>aaaaaaaaa</div>' }}
                        /> */}
                        <Text style={{ fontSize: 12 }}>{this.state.detail.content}</Text>
                    </View>
                </View>

            </ScrollView>

        );
    }
}

const style = StyleSheet.create({

})

export default ActicleIndex;