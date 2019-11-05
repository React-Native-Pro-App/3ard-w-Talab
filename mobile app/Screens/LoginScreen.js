import React, { Component } from 'react'
import {View,Text,Button} from 'react-native'
import NavigationScreen from './../NavigationScreen'
export default class App extends Component {
  
    state={
      isLoggedIn : false
    }
    AuthHandler=()=>{
     this.setState({
       isLoggedIn : true
     }) 
       
  
    }
    render() {
      return (
        <>
       
     {this.state.isLoggedIn ? <NavigationScreen></NavigationScreen> :   <View style={{margin:100}}>
        <Button title="Auth"  onPress={this.AuthHandler}></Button>
        </View>} 
      </>
      )
    }
  }