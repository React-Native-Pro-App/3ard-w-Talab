import React, { Component } from 'react';
import { Button, Image, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import axios from 'axios'
import FormData from 'form-data'
export default class ImagePickerExample extends Component {
  state = {
    image: null,
  };

  componentDidMount() {
    this.getPermissionAsync();
    // console.log('hi');
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    console.log(result);
    await this.upload(result)
    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };
  upload = async (result) => {
    console.log("ASEM: ", result.uri)
    var bodyFormData = new FormData();
    bodyFormData.append('image', "https://upload.wikimedia.org/wikipedia/en/thumb/6/63/IMG_%28business%29.svg/1200px-IMG_%28business%29.svg.png");

    axios({
      method: 'post',
      url: 'http://localhost:5000/upload',
      data: bodyFormData,
      headers: { 'image': bodyFormData }
    })
      .then(function (response) {
        //handle success
        console.log(response);
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });

   
    // axios.post('http://localhost:5000/upload', {
    //   'image' : ""
    // })
    // .then(res=>console.log(res.data))
    // .catch(err=>console.log(err))

    // axios.post("http://localhost:5000/upload",{
    //     'image': result.uri
    // })
    // .then(({data})=>{
    //   // console.log(data)
    // })
    // .catch(err=>console.log(err))
  }


  render() {
    let { image } = this.state;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Pick an image from camera roll"
          onPress={this._pickImage}
        />
        {image &&
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      </View>
    );
  }
}