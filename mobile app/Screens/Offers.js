import React from 'react'
import {View , Text} from 'react-native'
import { Ionicons } from '@expo/vector-icons';

export default function Offers () {
        return (
            <View style={{marginTop:100}}>
                <Text>Offers Page</Text>
                <Ionicons name="md-home" size={32} color="green" />
            </View>
        )
    }

    Offers.navigationOptions = {
    title: 'Offers',
  };
  