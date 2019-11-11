import React from 'react'
import {View , Text} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import Profile from './Profile'
import Home from './Home'
import {
    createStackNavigator,
    // createBottomTabNavigator,
    createNavigationContainer,
createMaterialTopTabNavigator
  } from "react-navigation";
// export default function Offers () {
//         return (
//             <View style={{marginTop:100}}>
//                 <Text>Offers Page</Text>
//                 <Ionicons name="md-home" size={32} color="green" />
//             </View>
//         )
//     }


const SellerStack = createStackNavigator({
    Profile
})
SellerStack.navigationOptions={
    title : 'Seller'
}
const BuyerStack = createStackNavigator({
    Home
})
BuyerStack.navigationOptions={
    title : 'Buyer'
}
const topNav = createMaterialTopTabNavigator({
    SellerStack,
    BuyerStack
})

const container =  createNavigationContainer(topNav)
export default (container)