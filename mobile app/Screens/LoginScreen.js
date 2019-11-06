import React, { Component } from "react";
import { View, Text, ScrollView, TextInput , StyleSheet,TouchableOpacity,Button } from "react-native";
import NavigationScreen from "./../NavigationScreen";
import Modal from "react-native-modal";
import SignUp from './SignUp'
export default class App extends Component {
  state = {
    isLoggedIn: false,
    email: '',
    password : '',
    isVisible : false
  };
  AuthHandler = (event, name) => {
    const regexEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/
    const regexPassword = /^[0-9a-zA-Z]{8,}$/
    if (regexEmail.test(event.nativeEvent.text) && name === 'email'){    
    this.setState({
      [name] : event.nativeEvent.text
    })
  }
 else if(regexPassword.test(event.nativeEvent.text) && name === 'password'){
    this.setState({
      [name] : event.nativeEvent.text
    })
  }
 else if(name === 'submit'){
    if(this.state.email !== '' && this.state.password !==  ''){
      this.setState({
        isLoggedIn: true
    });
    }
    else{
      alert('something went wrong')
    }
  }
};
  isModalVisibleHandler=(isVisible,isLoggedIn)=>{
   this.setState({
    isVisible : isVisible,
    isLoggedIn : isLoggedIn
   })
  }
  render() {
    if(this.state.isLoggedIn){
      return (
        <NavigationScreen />
      )
    }else
    return (
      <>
          <ScrollView>
          <View style={styles.body}>
            <TextInput style={styles.input} placeholder="  Phone number or Email Address" textContentType="emailAddress" onChange={(event)=>this.AuthHandler(event,'email')}></TextInput>
            <TextInput style={styles.input} placeholder="  Password" textContentType='password' secureTextEntry={true}   onChange={(event) => this.AuthHandler(event,'password')} ></TextInput>
            <TouchableOpacity style={styles.buttonContainer} onPress={(event)=>this.AuthHandler(event,'submit')}>
                <Text style={{color:'white',fontWeight:'bold'}}>Sign in</Text>  
              </TouchableOpacity>  
              </View>
              <View style={styles.signUp}>
              <View style={{flex:1,flexDirection:'row'}}>
              <View style={{height:2, backgroundColor: 'gray' , width:40+'%'}}></View>
              <Text style={{marginTop:-10}}>OR</Text>
              <View style={{height:2, backgroundColor: 'gray' , width:40+'%'}}></View>
              </View>
              <TouchableOpacity style={styles.buttonContainerTwo} onPress={()=>this.setState({isVisible:true})}>
                <Text style={{color:'#4280c8',fontWeight:'bold'}}>Sign up</Text>  
              </TouchableOpacity>  
              </View>
              <Modal isVisible={this.state.isVisible}>
                  <SignUp isVisibleHandler={this.isModalVisibleHandler}></SignUp>
             </Modal>
     
          </ScrollView>
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
        buttonContainer: {
          marginTop:10,
          height:45,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom:20,
          width:'90%',
          borderRadius:10,
          backgroundColor: "#00BFFF",
        },
        buttonContainerTwo: {
          marginTop:10,
          height:45,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom:20,
          width:'90%',
          borderRadius:10,
          backgroundColor: "#cbdcf0",
        },
        signUp:{
          marginTop:45+'%',
          flexDirection:'column',
          alignItems:'center'
        }
})