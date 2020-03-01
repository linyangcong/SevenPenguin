import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation'

import Tuijian from '../../Pages/Video/VideoItems/tuijian'
import Look from '../../Pages/Video/VideoItems/Look'
import FYZX from '../../Pages/Video/VideoItems/feiyunzhixia'
import MusicPower from '../../Pages/Video/VideoItems/MusicPower'
// import WXC from '../../Pages/Video/VideoItems/WangXC'
// import XianChang from '../../Pages/Video/VideoItems/XianChang'
// import ListenBGM from '../../Pages/Video/VideoItems/ListenBGM'
// import BaiWP from '../../Pages/Video/VideoItems/BaiWP'
// import ReSing from '../../Pages/Video/VideoItems/ReSing'
// import GroundPeople from '../../Pages/Video/VideoItems/Ground'
import {Dimensions} from 'react-native'
// import React from 'react'
const {width}=Dimensions.get('window')

    const TabRouter=createAppContainer(createMaterialTopTabNavigator({
        '推荐':Tuijian,
        'Look直播':Look,
        '飞云之下':FYZX,
        '音乐的力量':MusicPower,
        // '王小潮':WXC,
        // '现场直播':XianChang,
        // '听音乐':ListenBGM,
        // '百万平':BaiWP,
        // '翻唱':ReSing,
        // '广场':GroundPeople
    },{
        initialRouteName:"Look直播",
        swipeEnabled: true,
        tabBarOptions: {
            activeTintColor:'#F00',
            inactiveTintColor:'#888',
            tabStyle:{
                backgroundColor:'white',
                padding:5,
            },
            style:{
                width:width,
                // height:16
            },
            labelStyle:{
                fontSize:14,
                // lineHeight:20,
                // overflow:'scroll',
            },
            
          },
          
    }))

    // class TabRouterView extends React.Component{
    //     constructor(props){
    //         super(props)
    //     }
    //     render(){
    //         return(
    //             <ScrollView horizontal={true}>
    //                 <TabRouter></TabRouter>
    //             </ScrollView>
    //         )
    //     }
    // }

export default TabRouter;