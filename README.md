#SevenPenguin Front

My First React-Native App,Just debuged Android!

This is a about React-Native,Sound,Video,React-Navigation(Stack,Drawer,TopTab),Antd,

It's Rear is an Easy Project named SevenPenguinSever ;

Visit https://github.com/linyangcong to learn more, and welcome to send message to me.


发布app:
1.修改android/app/src/build.gandle中：
buildTypes{
     release {
            // signingConfig signingConfigs.debug 
            signingConfig signingConfigs.release
            minifyEnabled enableProguardInReleaseBuilds
            proguardFiles getDefaultProguardFile("proguard-android.txt"), "proguard-rules.pro"
        }
        ...
}
2.根目录输入，生成app/src/assets目录中的bundle文件：
react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
（这个过程报错什么删除什么，一般是android/app/main/res/跟raw新增文件）
3.在到安卓根目录输入打包发布指令：
./gradlew assembleRelease

打包发布报错问题：
1.没生成bundle文件在app assets或者没有相关本地图片生成在res中
2.如果一切调试没问题，有可能是java中全局变量没初始化；在react native中可能是store