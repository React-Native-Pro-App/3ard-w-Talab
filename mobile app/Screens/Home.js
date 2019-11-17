import React, { Component, useState } from 'react'
import { View, Text, Button, ScrollView, FlatList, ListItem } from 'react-native'
import axios from 'axios'

export default class Home extends Component {
  state = {
    boxes : [],
    posts : []
  }
  componentDidMount() {
    // axios.get('http://localhost:9002/posts/API/data')   
    axios.get('https://aardwtalab.herokuapp.com/posts/API/data')
    .then(res=>{
      this.setState({
        posts : res.data
      })
      console.log(this.state.posts)
    })
    .catch(err=>console.log({message: err.message}))
  }
  addHandler=(event)=>{
    this.setState({
      boxes: [
      ...this.state.boxes ,
      <View
        style={{ width: 100, height: 100, backgroundColor: "red", margin: 10 }}
      ></View>]
  })
}
  render() {
    return (
      <>
        <View>
          <ScrollView>
            <View
              style={{
                marginTop: 100,
                flexWrap: "wrap",
                flexDirection: "row"
              }}
            >
              {this.state.boxes.map(item => {
                // console.log(item);
                return item;
              })}
            </View>
            <Button title="add" onPress={this.addHandler}></Button>
            {this.state.posts.map(post=>{
              return <Text>{post.sellerID}</Text>
            })}
          </ScrollView>
        </View>
      </>
    )
  }
}


Home.navigationOptions = {
  title: 'Home',
};