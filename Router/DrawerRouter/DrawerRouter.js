import {createDrawerNavigator } from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation'

//用于重定向跳转抽屉路由组件
import Index from '../../Pages/DrawerMenu/Index'

//抽屉的路由子组建
import ShowPlay from '../../Pages/DrawerMenu/ShowPlay'
import Supermaket from '../../Pages/DrawerMenu/Supermaket'
import NearByPeople from '../../Pages/DrawerMenu/NearByPeople'
import GameProduce from '../../Pages/DrawerMenu/GameProduce'
import PoketMusic from '../../Pages/DrawerMenu/PoketMusic'
import MyWorkSpace from '../../Pages/DrawerMenu/MyWorkSpace'
import MyOrder from '../../Pages/DrawerMenu/MyOrder'
import SetTimeToStop from '../../Pages/DrawerMenu/SetTimeToStop'
import ScanImage from '../../Pages/DrawerMenu/ScanImage'
import AlarmOfMusic from '../../Pages/DrawerMenu/AlarmOfMusic'
import MusicCloudSpace from '../../Pages/DrawerMenu/MusicCloudSpace'
import FreeListenOnline from '../../Pages/DrawerMenu/FreeListenOnline'
import Coupon from '../../Pages/DrawerMenu/Coupon'
import YouthModel from '../../Pages/DrawerMenu/YouthModel'


    const DrawerRouter=createDrawerNavigator({
        Index,
        ShowPlay,
        Supermaket,
        NearByPeople,
        GameProduce,
        PoketMusic,
        MyWorkSpace,
        MyOrder,
        SetTimeToStop,
        ScanImage,
        AlarmOfMusic,
        MusicCloudSpace ,
        FreeListenOnline,
        Coupon,
        YouthModel,
    },{
        // tabBarOptions: {
        //     activeTintColor:'#000',
        //     inactiveTintColor:'#888',
        //     tabStyle:{
        //         backgroundColor:'white'
        //     },
        //     labelStyle:{
        //         fontSize:14
        //     }
        //   },
    })

export default createAppContainer(DrawerRouter);