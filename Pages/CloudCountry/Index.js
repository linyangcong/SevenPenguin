import React from 'react'
import { View, Text ,TouchableOpacity,ScrollView} from 'react-native'

import Activity from './Tabs/Activity'
import Ground from './Tabs/Ground'
class CloudCountryIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ActivityPanel:true,
            GroundPanel:false
        }
    }
    static navigationOptions = {
        tabBarLabel: ({ focused, tintColor }) => {
            return <Text style={{ fontWeight: focused ? 'bold' : 'normal' }}>云村</Text>
        }
    }
    render() {
        return (
            <View style={{display:'flex',marginBottom:150}}>
                <View style={{ flexDirection: 'row',justifyContent:'space-around',marginLeft:80,marginRight:80 }}>
                                <TouchableOpacity
                                    ref="Activity"
                                    style={{ opacity: 1 ,borderBottomWidth:this.state.ActivityPanel?2:0,padding:10,borderBottomColor:'red'}}
                                    onPress={() => { this.refs.Ground.setOpacityTo(0.5, 0.2); this.refs.Activity.setOpacityTo(1, 0.2); this.setState({ ActivityPanel: true, GroundPanel: false }) }}
                                >
                                    <Text style={{ fontSize: 14, fontWeight:this.state.ActivityPanel? 'bold':'normal',color:this.state.ActivityPanel?'red':'black' }}>广场</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={{ marginLeft: 10, opacity: 0.5 ,borderBottomWidth:this.state.ActivityPanel?0:2,padding:10,borderBottomColor:'red'}}
                                    ref="Ground"
                                    onPress={() => { this.refs.Ground.setOpacityTo(1, 0.2); this.refs.Activity.setOpacityTo(0.5, 0.2); this.setState({ ActivityPanel: false, GroundPanel: true }) }}
                                >
                                    <Text style={{ fontSize: 14, fontWeight:this.state.ActivityPanel?'normal': 'bold',color:this.state.ActivityPanel?'black':'red' }}>动态</Text>
                                </TouchableOpacity>

                            </View>
                            <ScrollView>
                <View style={{flexDirection:'row',backgroundColor:'#f6f6f6'}}>
                    <Activity navigation={this.props.navigation} ref="ActivityPanel" show={this.state.ActivityPanel} />
                    <Ground navigation={this.props.navigation} ref="GroundPanel" show={this.state.GroundPanel} />
                </View>
                </ScrollView>
            </View>
           
        );
    }
}

export default CloudCountryIndex;