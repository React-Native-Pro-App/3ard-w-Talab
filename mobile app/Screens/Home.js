import React, { Component , useState} from 'react'
import {View, Text, Button, ScrollView,FlatList,ListItem} from 'react-native'

export default function Home () {
    const [boxes, setBoxes] = useState([]);
    const addHandler = () => {
      setBoxes([
        ...boxes,
        <View
          style={{ width: 100, height: 100, backgroundColor: "red", margin: 10 }}
        ></View>
      ]);
    };
  
    return (
      <View>
        <ScrollView>  
        <View
          style={{
            marginTop: 100,
            flexWrap: "wrap",
            flexDirection: "row"
          }}
        >
          {boxes.map(item => {
            // console.log(item);
            return item;
          })}
        </View>
        <Button title="add" onPress={addHandler}></Button>
        </ScrollView>
      </View>
    );
  }

  Home.navigationOptions = {
    title: 'Home',
  };