import React from 'react'
import { View,Text ,TouchableOpacity,Dimensions} from 'react-native';

import { Icon, Progress } from '@ant-design/react-native';

class ProgressItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
        <View style={{ position: 'absolute', width: '90%', marginLeft: '5%', marginRight: '5%', top:-60 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ color: '#fff', fontSize: 10 }}>{this.props.currentTime}</Text>
                            <Progress percent={this.props.percent} style={{ height: 3, marginLeft: 10, marginRight: 10 }} />
                            <Text style={{ color: '#fff', fontSize: 10, marginRight: 5 }}>{this.props.durationTime}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', margin: 10 ,width:'100%'}}>
                            <View style={{ flexDirection: 'row'}}>
                                <TouchableOpacity
                                style={{position:'absolute'}}
                                onPress={() => {
                                  this.props.changstatus()
                                    // this.setState({ paused: !this.props.paused })
                                }}>
                                    <Icon name={this.props.paused ? 'caret-right' : 'pause'} />
                                </TouchableOpacity>
                                <TouchableOpacity style={{ position:'absolute',left:50}} onPress={() => {
                                    //    this.setState({paused:!this.state.paused})
                                }}>
                                    <Icon name='step-forward' />
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity
                                style={{ position:'absolute',right:20}}
                                onPress={() => {
                                  this.props.changeOrientation()
                                }}>
                                <Icon name='block' />
                            </TouchableOpacity>
                        </View>
                    </View>
     );
  }
}
 
export default ProgressItem;
