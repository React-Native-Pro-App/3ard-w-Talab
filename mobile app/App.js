import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from "react-navigation";
import Profile from './Screens/Profile';
import Home from "./Screens/Home";
import Offers from './Screens/Offers'
import Camera from './Screens/Camera'
const HomeStack = createStackNavigator({
  Home
});

HomeStack.navigationOptions = {
  title: "Home"
};

const ProfileStack = createStackNavigator({
  Profile
});
ProfileStack.navigationOptions = {
  title: "Profile"
};

const OfferStack = createStackNavigator({
  Offers
})

OfferStack.navigationOptions ={
  title : 'Offers'
};
const CameraStack = createBottomTabNavigator({
  Camera
})
CameraStack.navigationOptions={
  title: 'Camera'
}

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  CameraStack,
  OfferStack,
  ProfileStack,

});

const container = createAppContainer(tabNavigator);
export default container;
