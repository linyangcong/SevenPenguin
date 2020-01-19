import React from 'react'
import { View, Text, DrawerLayoutAndroid, ScrollView, TouchableOpacity, Image, StatusBar } from 'react-native'
// import store from '../../Store/StoreRedux'
// import TabRouter from '../../Router/TabRouter/TabRouter'
import { Icon } from '@ant-design/react-native'
import Mine from '../Mine/Index'
import Discovery from '../Discovery/Index'
import CloudCountry from '../CloudCountry/Index'
import Video from '../Video/Index'
import config from '../../config'
// import Find from '../Find/Index'
class DrawerIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playstate: false,
      lastPanel: 'Mine',
      activePanel: 'Mine',
      Avatar: { Img: require('../../Asserts/Icons/User/user.png'), name: 'ServletAction', level: 5 },
      DrawerPagesMy: [
        { tag: '', path: require('../../Asserts/Icons/DrawerPageMy/我的消息.png'), name: '我的消息' },
        { tag: '', path: require('../../Asserts/Icons/DrawerPageMy/我的好友.png'), name: '我的好友' },
        { tag: '', path: require('../../Asserts/Icons/DrawerPageMy/听歌识曲.png'), name: '听歌识曲' },
        { tag: '', path: require('../../Asserts/Icons/DrawerPageMy/个性装扮.png'), name: '个性装扮' },
      ],
      DrawerPages: [
        { icon: require("../../Asserts/Icons/演出.png"), name: "演出", path: "../../Pages/DrawerMenu/ShowPlay", description: '' },
        { icon: require("../../Asserts/Icons/商城.png"), name: "商城", path: "../../Pages/DrawerMenu/Supermaket", description: '5折抢购' },
        { icon: require("../../Asserts/Icons/附近的人.png"), name: "附近的人", path: "../../Pages/DrawerMenu/NearByPeople", description: '' },
        { icon: require("../../Asserts/Icons/游戏推荐.png"), name: "游戏推荐", path: "../../Pages/DrawerMenu/GameProduce", description: '' },
        { icon: require("../../Asserts/Icons/口袋彩铃.png"), name: "口袋彩铃", path: "../../Pages/DrawerMenu/PoketMusic", description: '' },
        { icon: require("../../Asserts/Icons/创作者中心.png"), name: "创作者中心", path: "../../Pages/DrawerMenu/MyWorkSpace", description: '' },
        { icon: require("../../Asserts/Icons/我的订单.png"), name: "我的订单", path: "../../Pages/DrawerMenu/MyOrder", description: '' },
        { icon: require("../../Asserts/Icons/定时停止播放.png"), name: "定时停止播放", path: "../../Pages/DrawerMenu/SetTimeToStop", description: '' },
        { icon: require("../../Asserts/Icons/扫一扫.png"), name: "扫一扫", path: "../../Pages/DrawerMenu/ScanImage", description: '' },
        { icon: require("../../Asserts/Icons/音乐闹钟.png"), name: "音乐闹钟", path: "../../Pages/DrawerMenu/AlarmOfMusic", description: '' },
        { icon: require("../../Asserts/Icons/音乐云盘.png"), name: "音乐云盘", path: "../../Pages/DrawerMenu/MusicCloudSpace", description: '' },
        { icon: require("../../Asserts/Icons/在线听歌免流量.png"), name: "在线听歌免流量", path: "../../Pages/DrawerMenu/FreeListenOnline", description: '' },
        { icon: require("../../Asserts/Icons/优惠券.png"), name: "优惠券", path: "../../Pages/DrawerMenu/Coupon", description: '' },
        { icon: require("../../Asserts/Icons/青少年模式.png"), name: "青少年模式", path: "../../Pages/DrawerMenu/YouthModel", description: '未开启' },
        { icon: require("../../Asserts/Icons/青少年模式.png"), name: "退出登录", path: "../../Pages/DrawerMenu/YouthModel", description: '' },
      ],
    }
  }
  // static navigationOptions={
  //   tabBarLabel:({focused,tintColor})=>{
  //     return <Text style={{fontWeight:focused?'bold':'normal'}}>三</Text>
  // }
  // }
  componentDidMount() {
    this.refs[this.state.activePanel].setOpacityTo(1, 0);
  }
  changeTab = (tabname) => {
    this.setState({
      lastPanel: this.state.activePanel,
      activePanel: tabname
    }, () => {
      this.refs[this.state.lastPanel].setOpacityTo(0.6, 0);
      this.refs[this.state.activePanel].setOpacityTo(1, 0);
    })



  }
  render() {
    const navigationView = (
      <ScrollView>
        <StatusBar hidden={true} />
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
          <View style={{ flexDirection: 'column', backgroundColor: '#eee', paddingBottom: 30, paddingLeft: 20, paddingTop: 20 }}>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('UserDetail')} >
              <Icon name='user' size='lg' color='white' style={{ padding: 10, borderRadius: 30, backgroundColor: '#ccc', maxWidth: 60 }} />
              {/* <Image source={this.state.Avatar.Img} style={{ width: 80, height: 80, borderRadius: 40 }} /> */}
            </TouchableOpacity>
            <View style={{ flexDirection: "row", justifyContent: 'space-between', marginTop: 10 }}>
              <TouchableOpacity >
                <View style={{ flexDirection: "row", justifyContent: 'space-around' }}>
                  {/* <Text>{this.state.userdetail.name}</Text> */}
                  {/* <Text style={{ marginLeft: 5, borderRadius: 9, padding: 4,borderColor:'#ccc', backgroundColor: '#aaa', fontSize: 10 }}>Lv.{this.state.userdetail.level}</Text> */}
                </View>
              </TouchableOpacity>
              {/* <TouchableOpacity style={{backgroundColor:this.state.userdetail.signed=='1'?'rgba(255,255,255,0)':'#f00'}}>
                  <Text onPress={this.updatesigned} style={{borderWidth:this.state.userdetail.signed=='1'?1:0,borderColor:'#aaa', marginRight: 10, borderRadius: 10, padding: 5, fontSize: 10, color:this.state.userdetail.signed=='1'?'#888':'#fff' }}>{this.state.userdetail.signed=='1'?'已签到':'签到'} ></Text>
                </TouchableOpacity> */}
            </View>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10, marginTop: 20 }}>
            {this.state.DrawerPagesMy.map((item, index) =>
              <View key={index} style={{ flexDirection: 'column', alignItems: 'center' }}>
                <Image source={item.path} style={{ width: 25, height: 25 }} />
                <Text style={{ fontSize: 12 }}>{item.name}</Text>
              </View>
            )}
          </View>

          <View style={{ padding: 10 }}>
            {
              this.state.DrawerPages.map((item, index) =>
                <View key={index} style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 20, width: '100%' }}>
                  <View style={{ flexDirection: 'row' }}>
                    <Image source={item.icon} style={{ width: 20, height: 20 }} />
                    <Text style={{ fontSize: 13, color: '#333', marginLeft: 8 }} onPress={() => {
                      if (item.name == '退出登录') {
                        this.setState({
                          loginstatus: 0
                        })
                      }
                    }}>{item.name}</Text>
                  </View>
                  <Text style={{ fontSize: 10, color: '#888', alignSelf: 'center' }}>{item.description}</Text>
                </View>
              )
            }
          </View>

        </View>
      </ScrollView>);
    return (
      <DrawerLayoutAndroid
        ref="drawerLayout"
        // drawerPosition={DrawerLayoutAndroid.positions.Left}
        drawerPosition='left'
        renderNavigationView={() => navigationView}
        drawerWidth={280}
      // drawerLockMode={this.state.loginstatus===1?"unlocked":"locked-closed"}
      >
        {/* <TabRouter/> */}
        <View>
          <View style={{ flexDirection: 'row', paddingTop: 20, paddingBottom: 20, paddingRight: 10, justifyContent: 'space-around', backgroundColor: this.state.activePanel == 'Mine' ? 'black' : 'white' }}>
            <TouchableOpacity
              style={{ marginLeft: 10, opacity: 0.6 }}
              ref="Drawer"
              onPress={() => {
                this.refs.drawerLayout.openDrawer();
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: 'bold', color: this.state.activePanel == 'Mine' ? 'white' : 'black' }}>三</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ marginLeft: 10, opacity: 0.6 }}
              ref="Mine"
              onPress={() => this.changeTab('Mine')
              }
            >
              <Text style={{ color: this.state.activePanel == 'Mine' ? 'white' : 'black', fontSize: 18, fontWeight: this.state.activePanel == 'Mine' ? 'bold' : 'normal' }}>我的</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ marginLeft: 10, opacity: 0.6 }}
              ref="Discovery"
              onPress={() => this.changeTab('Discovery')
              }
            >
              <Text style={{ color: this.state.activePanel == 'Mine' ? 'white' : 'black', fontSize: 18, fontWeight: this.state.activePanel == 'Discovery' ? 'bold' : 'normal' }}>发现</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ marginLeft: 10, opacity: 0.6 }}
              ref="CloudCountry"
              onPress={() => this.changeTab('CloudCountry')
              }
            >
              <Text style={{ color: this.state.activePanel == 'Mine' ? 'white' : 'black', fontSize: 18, fontWeight: this.state.activePanel == 'CloudCountry' ? 'bold' : 'normal' }}>云村</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ marginLeft: 10, opacity: 0.6 }}
              ref="Video"
              onPress={() => this.changeTab('Video')
              }
            >
              <Text style={{ color: this.state.activePanel == 'Mine' ? 'white' : 'black', fontSize: 18, fontWeight: this.state.activePanel == 'Video' ? 'bold' : 'normal' }}>视频</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ marginLeft: 10, opacity: 0.6 }}
              ref="Find"
              onPress={() => this.changeTab('Find')
              }
            >
              <Text style={{ fontSize: 18,color:this.state.activePanel == 'Mine' ? 'white' : 'black', fontWeight: this.state.FindPanel ? 'bold' : 'normal' }}onPress={() => this.props.navigation.navigate('Find')}>
                搜索
              </Text>
            </TouchableOpacity>
          </View>
          <ScrollView style={{ display: this.state.activePanel == 'Mine' ? 'flex' : 'none' }}>
            <Mine navigation={this.props.navigation} />
          </ScrollView>
          <ScrollView style={{ display: this.state.activePanel == 'Discovery' ? 'flex' : 'none' }}>
            <Discovery navigation={this.props.navigation} />
          </ScrollView>
          <ScrollView style={{ display: this.state.activePanel == 'CloudCountry' ? 'flex' : 'none' }}>
            <CloudCountry navigation={this.props.navigation} />
          </ScrollView>
          <ScrollView style={{ display: this.state.activePanel == 'Video' ? 'flex' : 'none' }}>
            <Video navigation={this.props.navigation} />
          </ScrollView>
          <ScrollView style={{ display: this.state.activePanel == 'Find' ? 'flex' : 'none' }}>
            {/* <Find navigation={this.props.navigation}/> */}
          </ScrollView>



        </View>
        {/* 播放器 */}
        <View style={{ opacity: (this.state.loginstatus == 0 || this.state.loginstatus == 4 || this.state.loginstatus == 5) ? 0 : 1, width: '100%', bottom: 0, height: 60, position: 'absolute', zIndex: 9999, borderTopWidth: 0.3, borderTopColor: '#eee', flexDirection: 'row', justifyContent: 'space-between', padding: 10, alignItems: 'center', backgroundColor: 'white' }}>
          <View style={{ flexDirection: 'row' }}>
            <Image source={{ uri: config.resourceServer + '/WebView/Imgs/4.jpg' }} style={{ width: 40, height: 40, borderRadius: 20 }} />
            <View style={{ marginLeft: 5 }}>
              <Text style={{ fontSize: 14 }}>Attention</Text>
              <Text style={{ fontSize: 10, color: '#aaa' }}>横屏可以切换上下首</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <Icon name={this.state.playstate ? 'pause-circle' : 'right-circle'} size='md' style={{ marginRight: 10 }} />
            <Icon name='heart' size='md' style={{ marginRight: 10 }} />
            {/* <Image source={require('../../Asserts/Icons/User/user.png')} style={{ width: 40, height: 40, borderRadius: 20 }} />
            <Image source={require('../../Asserts/Icons/User/user.png')} style={{ width: 40, height: 40, borderRadius: 20 }} /> */}
          </View>
        </View>
      </DrawerLayoutAndroid>
    )
  }
}

export default DrawerIndex;