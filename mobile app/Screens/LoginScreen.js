import React, { Component } from "react";
import { View, Text, Button, TextInput , StyleSheet } from "react-native";
import NavigationScreen from "./../NavigationScreen";
export default class App extends Component {
  state = {
    isLoggedIn: false
  };
  AuthHandler = (event) => {
    console.log(event.target.name);
    console.log(event.nativeEvent.text);
    this.setState({
      isLoggedIn: true
    });
  };
  render() {
    return (
      <>
        {this.state.isLoggedIn ? (
          <NavigationScreen />
        ) : (
          <View style={styles.body}>
            <TextInput name="email" style={styles.input} placeholder="  Phone number or Email Address" textContentType="emailAddress"  onChange={this.AuthHandler}></TextInput>
            <TextInput name="password" style={styles.input} placeholder="  Password" textContentType='password' secureTextEntry={true} onChange={this.AuthHandler} ></TextInput>
            <Button title="Auth" onPress={this.AuthHandler}></Button>
          </View>
        )}
      </>
    );
  }
}

const styles = StyleSheet.create({
    body:{
      marginTop: 50+'%',
      flexDirection : 'column',
      alignItems: 'center'
    },
    input :{
      textAlignVertical:100,
      lineHeight : 10,
      borderStyle : 'solid',
      borderWidth : 1,
      borderColor : 'gray',
      width : '90%',
      height : 50
    }
})