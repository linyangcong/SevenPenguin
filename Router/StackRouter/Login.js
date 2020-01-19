import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation'

import Login from '../../Pages/Login/Login'
// import DrawerMain from '../../Pages/DrawerMenu/Index'
// import DrawerIndex from '../../Pages/DrawerMenu/Index'
import MainRouter from './MainRouter'
export default createAppContainer(
    createStackNavigator({
        Login,
        MainRouter,
    },
    {
        initialRouteName:'Login',
        headerMode: 'none',
    })
)