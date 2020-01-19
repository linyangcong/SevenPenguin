import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation'

import Localplay from '../../../Pages/Mine/MineItems/LocalPlay'
import Singer from '../../../Pages/Mine/MineItems/Singer'
import SingerAlbum from '../../../Pages/Mine/MineItems/SingerAlbum'
import Fold from '../../../Pages/Mine/MineItems/Fold'
export default createAppContainer(
    createMaterialTopTabNavigator({
        '单曲':Localplay,
        '歌手':Singer,
        '专辑':SingerAlbum,
        '文件夹':Fold
    },
    {
        initialRouteName:'单曲',
        // headerMode: 'none',
    }
    )
)