import React, { Component, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';

export default class CameraScreen extends Component {
  componentDidMount(){
    this.getCameraPermissions()
  }
  async  getCameraPermissions() {
    // permissions returns only for location permissions on iOS and under certain conditions, see Permissions.LOCATION
    const { status, permissions } = await Permissions.askAsync(Permissions.CAMERA);
    if (status === 'granted') {
      return Location.getCurrentPositionAsync({ enableHighAccuracy: true });
    } else {
      throw new Error('Camera permission not granted');
    }
  }
      render() {
          return (
            <View style={{ flex: 1 }}>
              <Camera style={{ flex: 1 }} type={'back'}>     
              <TouchableOpacity style={{marginTop:80+'%' , backgroundColor:'red', }}>
                  <Text>take</Text>
              </TouchableOpacity>
              </Camera>
            </View>
          );
        // }
      }
    }


    CameraScreen.navigationOptions = {
    title: 'Camera',
  };
  