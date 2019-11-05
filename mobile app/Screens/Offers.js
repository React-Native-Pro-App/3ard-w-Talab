// import React from 'react'
// import {View , Text} from 'react-native'
// // export default function Offers () {
// //         return (
// //             <View style={{marginTop:100}}>
// //                 <Text>Offers Page</Text>
// //             </View>
// //         )
// //     }

import React, { Component } from 'react'
import {View , Text} from 'react-native'
export default class Offers extends Component {
    render() {
        return (
            <View  style={{marginTop:100}}>
                <Text>Offers page</Text>
            </View>
        )
    }
}

    Offers.navigationOptions = {
    title: 'Offers',
  };
  