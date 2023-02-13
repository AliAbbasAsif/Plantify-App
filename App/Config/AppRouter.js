import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../Screens/SplashScreen';
import Map from '../Screens/Map';
import Signup from '../Screens/Signup';
import Home from '../Screens/Home';
import Login from '../Screens/Login';
import Plants from '../Screens/Plants';
import TabNavigation from './TabNavigation';
import Product from '../Screens/Product';
import Cart from '../Screens/Cart';
import CheckOut from '../Screens/CheckOut';
import Order from '../Screens/Order';
import Fravouite from '../Screens/Fravouite';
const Stack = createNativeStackNavigator();
function AppRouter({navigation}) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="SplashScreen" options={{headerShown:false}}  component={SplashScreen} />
      <Stack.Screen name="Home" options={{headerShown:false}}  component={Home} />
      <Stack.Screen name="Checkout" options={{headerShown:false}}  component={CheckOut} />
      <Stack.Screen name="Product" options={{headerShown:false}}  component={Product} />
      <Stack.Screen name="Cart" options={{headerShown:false}}  component={Cart} />
      <Stack.Screen name="fravouitepage" options={{headerShown:false}}  component={Fravouite} />
      <Stack.Screen name="Order" options={{headerShown:false}}  component={Order} />
      <Stack.Screen name="Signup" options={{headerShown:false}}  component={Signup} />
      <Stack.Screen name="Login" options={{headerShown:false  }}  component={Login} />
      <Stack.Screen name="Map" options={{headerShown:false}}  component={Map} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppRouter;