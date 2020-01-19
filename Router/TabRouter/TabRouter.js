import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation'

// import MineRouter from '../StackRouter/Item/Mine'
import Mine from '../../Pages/Mine/Index'
// import MainRouter from '../StackRouter/Item/StackItemRouter'
import Discovery from '../../Pages/Discovery/Index'
import CloudCountry from '../../Pages/CloudCountry/Index'
import Video from '../../Pages/Video/Index'
import Find from '../../Pages/Find/Index'


    const TabRouter=createMaterialTopTabNavigator({
        // DrawerMenu,
        Mine,
        Discovery,
        CloudCountry,
        Video,
        Find
    },{
        // initialRouteName:"Mine",
        tabBarOptions: {
            activeTintColor:'#333',
            inactiveTintColor:'#888',
            tabStyle:{
                backgroundColor:'white',
            },
            labelStyle:{
                fontSize:16,
            },
            
          },
          
    })

export default createAppContainer(TabRouter);