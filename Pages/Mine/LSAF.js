import React from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
// import MineTopTap from '../../Router/StackRouter/Item/Mine'
// import MineStack from '../../Router/StackRouter/Item/Mine'
import Localplay from './MineItems/LocalMusic/LocalPlay'
import Singer from './MineItems/LocalMusic/Singer'
import SingerAlbum from './MineItems/LocalMusic/SingerAlbum'
import Fold from './MineItems/LocalMusic/Fold'


import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation'
import { Icon } from '@ant-design/react-native';
class LSAFMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <ScrollView scrollEnabled={false}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', fontSize: 20, borderBottomColor: '#bbb', borderBottomWidth: 0.3, backgroundColor: 'skyblue', padding: 20, alignItems: 'center' }}>
                    <TouchableOpacity style={{ flexDirection: 'row' }}>
                        <Icon name='arrow-left' size='md' color='#fff' />
                        <Text onPress={() => this.props.navigation.pop()} style={{ color: '#FFF', fontSize: 20 }}>本地音乐</Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row' }}>
                        <Icon name='search' color='#fff' size='md' />
                        <Icon name='ellipsis' color='#fff' size='md' style={{ marginLeft: 10 }} />
                    </View>
                </View>
                <LSAF />
            </ScrollView>
        );
    }
}

// export default LSAF;

const LSAF = createAppContainer(
    createMaterialTopTabNavigator({
        '单曲': Localplay,
        '歌手': Singer,
        '专辑': SingerAlbum,
        '文件夹': Fold
    },
        {
            initialRouteName: '单曲',
            tabBarOptions: {
                style: {
                    backgroundColor: 'skyblue',
                },
                labelStyle: {
                    fontSize: 16
                }
            },
        }
    )
)

export default LSAFMain;