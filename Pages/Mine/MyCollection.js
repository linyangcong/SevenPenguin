import React from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
// import MineTopTap from '../../Router/StackRouter/Item/Mine'
// import MineStack from '../../Router/StackRouter/Item/Mine'
import My_Album from './MineItems/MyCollection/Album'
import My_Singer from './MineItems/MyCollection/Singer'
import My_Video from './MineItems/MyCollection/Video'
import My_PProject from './MineItems/MyCollection/PProject'
import My_Mlog from './MineItems/MyCollection/Mlog'


import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation'
import { Icon } from '@ant-design/react-native';
class MyCollection extends React.Component {
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
        '专辑': My_Album,
        '歌手': My_Singer,
        '视频': My_Video,
        '专栏': My_PProject,
        'Mlog': My_Mlog
    },
        {
            initialRouteName: '专辑',
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

export default MyCollection;