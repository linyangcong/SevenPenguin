import React from 'react'
import {View,Text,ScrollView,StatusBar} from 'react-native'
import ControlPlayer from './ControlPlayer'
class PlayPageIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            showstatus:false,//false展示评论区，true说明横屏，不展示评论区
         }
        this.showDiscussion=this.showDiscussion.bind(this)
    }
    showDiscussion(showstatus){
        // console.log(showstatus)
        this.setState({
            showstatus
        })
    }
    render() { 
        return ( 
        // <StatusBar hidden={true}>
        <ScrollView>
            <StatusBar hidden={true} />
            <ControlPlayer navigation={this.props.navigation} showDiscussion={this.showDiscussion}/>
            <View style={{display:this.state.showstatus?'none':'flex'}}>
                <Text>HELLO,VIDEO PLAYER!</Text>
            </View>
        </ScrollView>
        // </StatusBar>
         );
    }
}
 
export default PlayPageIndex;