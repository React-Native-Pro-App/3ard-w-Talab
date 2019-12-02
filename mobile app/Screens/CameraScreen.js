import React, { Component } from "react";
import { Button, Image, View, Platform, AsyncStorage } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import axios from "axios";

export default class ImagePickerExample extends Component {
  state = {
    image: null,
    uploading: false
  };

  handleTakePhoto = async () => {
    console.log("TAKING");
    const { status: cameraPerm } = await Permissions.askAsync(
      Permissions.CAMERA
    );

    const { status: cameraRollPerm } = await Permissions.askAsync(
      Permissions.CAMERA_ROLL
    );

    if (cameraPerm === "granted" && cameraRollPerm === "granted") {
      let result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [4, 3]
      });
      this.setState({
        image: result.uri,
        uploading: false
      });
      this.handleUploadPhoto(result);
    }
  };

  handleChoosePhoto = async () => {
    console.log("CHOOSING");
    // const { status: cameraRollPerm } = await Permissions.askAsync(
    //   Permissions.CAMERA_ROLL
    // );

    // if (cameraRollPerm === "granted") {
      let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 3]
      });
      this.setState({
        image: result.uri,
        uploading: false
      });
      this.handleUploadPhoto(result.uri);
    // }
  };

  handleUploadPhoto = async image => {
    await this.setState({
      uploading: true
    });

    // if (!image.cancelled) {
    //   console.log("going to server...");
    //   axios
    //     .post("http://localhost:5000/posts/API/upload", { image })
    //     .then(res => {
    //       this.setState({
    //         image,
    //         uploading: false
    //       });
    //       alert("upload success");
    //     })
    //     .catch(err => {
    //       this.setState({
    //         uploading: false
    //       });
    //       alert("Upload failed, try again...");
    //     });
    // } else {
    //   this.setState({
    //     uploading: false
    //   });
    //   alert("Upload failed, try again...");
    // }
  };

  handleSubmit = async () => {
    let imgUrl = this.state.image;
    let data = {
      sellerID: await AsyncStorage.getItem("userId"),
      postCategories: "Shit",
      location: "Jordan Valley",
      name: "test",
      additionalInfo: "best shit ever",
      imgUrl
    };

    axios
      .post("http://localhost:5000/posts/API/postAdvertisement", data)
      .then(res => {
        console.log(res.data);
        this.props.navigation.navigate("Home");
      })
      .catch(err => console.log(err.message));
  };

  render() {
    const { image } = this.state;
    console.log({ uri: image });
    return image === null ? (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button title="Choose Photo" onPress={() => this.handleChoosePhoto()} />
        <Button title="Take Photo" onPress={() => this.handleTakePhoto()} />
      </View>
    ) : (
      <View>
        {image && (
          <React.Fragment>
            <Image
              source={{ uri: image }}
              style={{ width: 300, height: 300 }}
            />
          </React.Fragment>
        )}

        <Button title="Submit" onPress={() => this.handleSubmit()} />
      </View>
    );
  }
}
