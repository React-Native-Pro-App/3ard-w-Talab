import BuyerScreen from './Offers/BuyerScreen'
import SellerScreen from './Offers/SellerScreen'
import {
    createStackNavigator,
    createMaterialTopTabNavigator,
    createAppContainer
} from "react-navigation";


const SellerStack = createStackNavigator({
    SellerScreen
})
SellerStack.navigationOptions = {
    title: 'Seller'
}
const BuyerStack = createStackNavigator({
    BuyerScreen
})
BuyerStack.navigationOptions = {
    title: 'Buyer'
}
const topNav = createMaterialTopTabNavigator({
    SellerStack,
    BuyerStack
})


const container = createAppContainer(topNav)
container.navigationOptions={
    title : 'Offers'
}
export default (container)