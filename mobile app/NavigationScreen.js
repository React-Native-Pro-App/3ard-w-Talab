import React from 'react'
import {Text , View} from 'react-native'
import {
    createStackNavigator,
    createBottomTabNavigator,
    createAppContainer,
  } from "react-navigation";
  import Profile from './Screens/Profile';
  import Home from "./Screens/Home";
  import Offers from './Screens/Offers'
  import CameraScreen from './Screens/CameraScreen'
  import { Ionicons , MaterialCommunityIcons} from '@expo/vector-icons';


  const HomeStack = createStackNavigator({
    Home
  });
  
  HomeStack.navigationOptions = {    
      tabBarLabel:'Home',
      tabBarIcon: ({ tintColor }) => (
        <MaterialCommunityIcons color={tintColor}  name="home-outline" size={32} />
      )

  };
  const CameraStack = createStackNavigator({
    CameraScreen
  })
  CameraStack.navigationOptions={
    tabBarLabel : 'Camera',
    tabBarIcon : (porp)=> <MaterialCommunityIcons  color={porp.tintColor} name="camera" size={32} /> 
  
  }
  const ProfileStack = createStackNavigator({
    Profile
  });
  ProfileStack.navigationOptions = {
    tabBarLabel : 'Profile',
    tabBarIcon : (prop)=> <MaterialCommunityIcons name="account" color={prop.tintColor} size={32} ></MaterialCommunityIcons>
  };
  const OfferStack = createStackNavigator({
    Offers
  })
  
  OfferStack.navigationOptions ={
   tabBarLabel : 'Offer',
   tabBarIcon : (prop)=> <MaterialCommunityIcons name='tag' color={prop.tintColor} size={32} ></MaterialCommunityIcons>
  };
  const tabNavigator = createBottomTabNavigator({
    HomeStack,
    CameraStack,
    OfferStack,
    ProfileStack,
  });
  

 
  const container = createAppContainer(tabNavigator);
  export default container;
  