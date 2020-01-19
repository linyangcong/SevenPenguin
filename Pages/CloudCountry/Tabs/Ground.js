import React from 'react'
import { View, Text, Image, ScrollView ,TouchableOpacity} from 'react-native'
import config from '../../../config'
import Axios from 'axios';
class Ground extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            groundDetail_one: [],
            groundDetail_two: []
        }
    }
    componentDidMount() {
        let g1=[],g2=[];
        Axios.get(`${config.serverUrl}/Acticle/List/cloudcountryside`).then((res) => {
            res.data.map((item,index)=>{
                if(index%2==0){
                    g1.push(item)
                }
                else{
                    g2.push(item)
                }
            }
            )
            this.setState({
                groundDetail_one:g2,
                groundDetail_two:g1
            })
        })
    }
    render() {
        return (
            <ScrollView>
                <View style={{ display: this.props.show ? 'none' : 'flex', padding: 5, flexDirection: 'row', marginBottom: 100 }}>
                    <View style={{ flexDirection: 'column', marginBottom: 10 }}>
                        {this.state.groundDetail_one.map((item, index) =>
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate('ActicleIndex',{detail:item})} key={index} style={{ borderRadius: 10, backgroundColor: '#fff', marginBottom: 10 }}>
                                <Image source={{uri:config.resourceServer+item.img_path}} style={{ width: '98%', height: 300 }} />
                                <View style={{ width: 180, padding: 5 }}>
                                    <Text style={{ width: 180, padding: 10, fontSize: 13, color: '#333' }}>{item.title}</Text>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Image source={{uri:config.resourceServer+item.author_img}} style={{ width: 20, height: 20, borderRadius: 10 }} />
                                            <Text style={{ padding: 5, fontSize: 10, color: '#888' }}>{item.author_name}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Text style={{ padding: 5, fontSize: 10, color: '#888' }}>{item.supportor ? item.supportor + '赞' : '0赞'}</Text>
                                            <Image source={require('../../../Asserts/Icons/Discovery/点点.png')} style={{ width: 15, height: 15 }} />
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )}
                    </View>
                    {/* 第二列 */}
                    <View  style={{ flexDirection: 'column' }}>
                    {
                        this.state.groundDetail_two.map((item, index) =>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('ActicleIndex',{detail:item})}  key={'g'+index} style={{ borderRadius: 10, backgroundColor: '#fff', marginBottom: 10 }}>
                                    <Image source={{uri:config.resourceServer+item.img_path}} style={{ width: '95%', height: 180 }} />
                                    <View style={{ width: 180, padding: 5 }}>
                                        <Text style={{ width: 180, padding: 10, fontSize: 13, color: '#333' }}>{item.title}</Text>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <Image source={{uri:config.resourceServer+item.author_img}} style={{ width: 20, height: 20, borderRadius: 10 }} />
                                                <Text style={{ padding: 5, fontSize: 10, color: '#888' }}>{item.author_name}</Text>
                                            </View>
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <Text style={{ padding: 5, fontSize: 10, color: '#888' }}>{item.supportor ? item.supportor + '赞' : '0赞'}</Text>
                                                <Image source={require('../../../Asserts/Icons/Discovery/点点.png')} style={{ width: 15, height: 15 }} />
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                           
                        )
                    }
                    </View>
                </View>
            </ScrollView>
        );
    }
}

export default Ground;