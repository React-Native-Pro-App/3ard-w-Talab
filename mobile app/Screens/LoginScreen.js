import React, { Component } from "react";
import { View, Text, Button, TextInput , StyleSheet,  TouchableHighlight } from "react-native";
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
    if(this.state.isLoggedIn){
      return (
        <NavigationScreen />
      )
    }else
    return (
      <>
          <View style={styles.body}>
            <TextInput name="email" style={styles.input} placeholder="  Phone number or Email Address" textContentType="emailAddress"  onChange={this.AuthHandler}></TextInput>
            <TextInput name="password" style={styles.input} placeholder="  Password" textContentType='password' secureTextEntry={true} onChange={this.AuthHandler} ></TextInput>
         <View style={styles.button} >
         <Button  color='white' title="Auth" onPress={this.AuthHandler}></Button>
            </View>
            {/* TouchableHighlight */}
          </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
    body:{
      marginTop: 60+'%',
      flexDirection : 'column',
      alignItems: 'center'
    },
    input :{
      lineHeight : 10,
      borderStyle : 'solid',
      borderWidth : 1,
      borderColor : 'gray',
      width : '90%',
      height : 50,
      borderRadius : 2,
      marginTop :-1
    },
    button :{ 
      width : 90+'%',
      height : 45,
      marginTop : 10,
      backgroundColor : '#72A0F0',
      borderRadius : 7
        }
})