//import liraries
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

import React, { useEffect, useReducer, useRef, useState } from 'react';
import { View, Text, StyleSheet, Animated, StatusBar, Pressable, TouchableOpacity, Image, Dimensions } from 'react-native';
import Svg, { Path, Circle } from 'react-native-svg'

import Profile from './Src/Screens/profile';
import Home from './Src/Screens/home';
import Cart from './Src/Screens/cart';
import Order from './Src/Screens/order';
// create a component
const Tab = createBottomTabNavigator()

const AnimatedSvg = Animated.createAnimatedComponent(Svg)
const App = ({ navigation }) => {
  const tabOffsetValue = useRef(new Animated.Value(0)).current;

  function getWidth() {
    let width = Dimensions.get("window").width
    // Horizontal Padding = 20...
    width = width - 80
    // Total five Tabs...
    return width / 5
  }
  return (
    <>
     
      <NavigationContainer>

        <Tab.Navigator 
       
          screenOptions={{ tabBarStyle: { backgroundColor: '#fff', position: 'absolute', bottom: 0, height: "9%", paddingHorizontal: 5,overflow:"visible" } }}
       >
          <Tab.Screen name="home" component={Home} options={{
            headerShown: false, tabBarLabel: "Food", tabBarLabelStyle: { bottom: 15, fontSize: 13 }, tabBarIcon: ({ focused }) => {
              return (
                <>
                  {
                    focused ?
                      <View style={{ position: 'absolute', top: 2, backgroundColor: "blue", padding: 10, borderRadius: 20 }}>
                        <Image source={require("./Src/img2.png")} tintColor={"white"} style={styles.icon} />
                      </View>
                      :
                      <View style={{ position: 'absolute', top: 20 }}>
                        <Image source={require("./Src/img2.png")} style={styles.icon} />
                      </View>
                  }
                </>
              )
            }
          }} listeners={({ navigation, route }) => ({ tabPress: e => { Animated.spring(tabOffsetValue, { toValue: 0, useNativeDriver: true }).start() }, focus: e => { Animated.spring(tabOffsetValue, { toValue: 0, useNativeDriver: true }).start() }, })} />
          <Tab.Screen name="cart" component={Cart} options={{
            headerShown: false, headerTitleAlign: "center", headerTitle: "Cart", tabBarLabel: "Cart", tabBarLabelStyle: { position: "absolute", fontSize: 13, bottom: 14 }, tabBarIcon: ({ focused }) => {
              return (
                <>
                  {
                    focused ?
                      <View style={{ position: 'absolute', top: 2, backgroundColor: "red", padding: 10, borderRadius:100,overflow:"visible" }}>
                        <Image source={require("./Src/img1.png")} tintColor={"white"} style={styles.icon} />
                      </View>
                      :
                      <View style={{ position: 'absolute', top: 20 }}>
                        <Image source={require("./Src/img1.png")} style={styles.icon} />
                      </View>
                  }
                </>
              )
            }
          }} listeners={({ navigation, route }) => ({
            tabPress: e => {
              Animated.spring(tabOffsetValue, { toValue: getWidth() * 1.5, delay: 250, useNativeDriver: true }).start();
            }
            , focus: e => { Animated.spring(tabOffsetValue, { toValue: getWidth() * 1.5, delay: 250, useNativeDriver: true }).start() }
          })} />
          <Tab.Screen name="like" component={Order} options={{
            headerShown: false, tabBarLabel: "Like", tabBarLabelStyle: { bottom: 14, fontSize: 13 },
            tabBarIcon: ({ focused }) => {
              return (
                <>
                  {
                    focused ?
                      <View style={{ position: 'absolute', top: 2, backgroundColor: "green", padding: 10, borderRadius: 20 }}>
                        <Image source={require("./Src/lists.png")} tintColor={"white"} style={styles.icon} />
                      </View>
                      :
                      <View style={{ position: 'absolute', top: 20 }}>
                        <Image source={require("./Src/lists.png")} style={styles.icon} />
                      </View>
                  }
                </>
              )
            }

          }} listeners={({ navigation, route }) => ({
            tabPress: e => {
              Animated.spring(tabOffsetValue, { toValue: getWidth() * 3.05, delay: 250, useNativeDriver: true }).start();
            }, focus: e => { Animated.spring(tabOffsetValue, { toValue: getWidth() * 3.05, delay: 250, useNativeDriver: true }).start() }
          })} />
          <Tab.Screen name="profile" component={Profile} options={{
            headerShown: false, tabBarLabel: "Profile", tabBarLabelStyle: { bottom: 14, fontSize: 13 },
            tabBarIcon: ({ focused }) => {
              return (
                <>
                  {
                    focused ?
                      <View style={{ position: 'absolute', top: 2, backgroundColor: "#FF1493", padding: 10, borderRadius: 20 }}>
                        <Image source={require("./Src/user.png")} tintColor={"white"} style={styles.icon} />

                      </View>
                      :
                      <View style={{ position: 'absolute', top: 20 }}>
                        <Image source={require("./Src/user.png")} style={styles.icon} />
                      </View>
                  }
                </>
              )
            }
          }} listeners={({ navigation, route }) => ({
            tabPress: e => {
              Animated.spring(tabOffsetValue, { toValue: getWidth() * 4.4, delay: 250, useNativeDriver: true }).start();
            }, focus: e => { Animated.spring(tabOffsetValue, { toValue: getWidth() * 4.55, delay: 250, useNativeDriver: true }).start() }
          })} />
        </Tab.Navigator>
        {/* <Animated.View style={{
          alignSelf: "stretch",
          width: getWidth() * 1.4, height: 42, backgroundColor: 'rgba(20,159,290,0.2)', position: 'absolute', bottom: 14, left: 10, borderRadius: 20, transform: [{ translateX: tabOffsetValue }]
        }} /> */}
        <View style={{
          position: 'absolute', bottom: 143,
          overflow:"visible"
        }}>
          <AnimatedSvg
            width={110}
            height={70}
            viewBox="0 0 90 60"
            // transform="matrix(1,0,0,-1,0,0)"
            style={[styles.activeBackground, { transform: [{ translateX: tabOffsetValue }] }]}
          >
            <Circle
              fill="#fff"
              cx="45%"
              cy="125%"
              r="30"
              />

          </AnimatedSvg>
        </View>
      </NavigationContainer >
    </>
  )
};





// define your styles
const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: 'white',

  },
  activeBackground: {
    position: 'absolute',
  },
  tabBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  component: {
    height: 50,
    width: 50,
    marginTop: -5,
  },
  componentCircle: {
    flex: 1,
    borderRadius: 30,
    backgroundColor: 'white',
  },
  iconContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    height: 15,
    width: 15
  }
});

//make this component available to the app
export default App;
