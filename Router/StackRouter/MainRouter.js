import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation'

import MainPage from '../../Pages/DrawerMenu/Index'
import Mine from '../../Pages/Mine/Index'
import Discovery from '../../Pages/Discovery/Index'
import CloudCountry from '../../Pages/CloudCountry/Index'
import Video from '../../Pages/Video/Index'
import Find from '../../Pages/Find/Index'
import UserDetail from '../../Pages/Mine/MineItems/UserDetail'
import MyLoveMusic from '../../Pages/Mine/MineItems/Mylovemusic'
// import PlayerVedio from '../../Pages/PlayVideo/ControlPlayer'
import PlayerVedio from '../../Pages/PlayVideo/PlayPageIndex'
import PlayerMusic from '../../Pages/PlayMusic/index'
import Videoindex from '../../Pages/Video/Index'
import ActicleIndex from '../../Pages/CloudCountry/Tabs/GoundItem/ActicleIndex'
import Ground from '../../Pages/CloudCountry/Tabs/Ground'
import PersonAlbum from '../../Pages/Discovery/Conponents/PersonAlbum'

import LSAF from '../../Pages/Mine/LSAF'
import MyAudio from '../../Pages/Mine/MyAudio'
import MyCollection from '../../Pages/Mine/MyCollection'
import FocusMusic from '../../Pages/Mine/FocusMusic'
import NearlyPlay from '../../Pages/Mine/NearlyPlay'
import SongList from '../../Pages/Mine/SongList'
// import LSAF from './Item/Mine'

import CommunicationWebView from '../../Pages/WebView/CommunicationWebView'
import LookWebView from '../../Pages/WebView/LookWebView'
export default createAppContainer(
    createStackNavigator({
        MainPage,
        Mine,
        Discovery,
        CloudCountry,
        Video,
        Find,
        UserDetail,
        MyLoveMusic,
        PlayerVedio,
        PlayerMusic,
        Videoindex,
        Ground,
        ActicleIndex,
        PersonAlbum,
        LSAF,
        MyAudio,
        MyCollection,
        FocusMusic,
        NearlyPlay,
        SongList,
        CommunicationWebView,
        LookWebView
    },
    {
        initialRouteName:'MainPage',
        headerMode: 'none',
    })
)