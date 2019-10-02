import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../Screens/Home'
import Signup from '../Screens/Signup/Signup'
import Login from '../Screens/Login/Login'
import Product from '../Screens/SingleProduct/SingleProduct'

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
  },
  Product: {
    screen: Product,
  },
  Login: {
    screen: Login
  },
  Signup: {
    screen: Signup
  },
});

export default createAppContainer(AppNavigator);