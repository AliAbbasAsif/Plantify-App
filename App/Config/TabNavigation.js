import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
// import Cart from '../Screens/Cart';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';
const Tab = createBottomTabNavigator();

function TabNavigation({navigation}) {
  const cartItems = useSelector(state => state.cart);
  console.log('tab', cartItems.length);
  return (
    // <Tab.Navigator
      // screenOptions={({route}) => ({
      //   tabBarIcon: ({focused, color}) => {
      //     let iconName;

      //     if (route.name === 'Home') {
      //       iconName = focused ? 'restaurant-menu' : 'restaurant';
      //     } else if (route.name === 'Cart') {
      //       iconName = focused ? 'add-shopping-cart' : 'shopping-cart';
      //     }
      //     return <Icon name={iconName} size={20} color={color} />;
      //   },
      //   tabBarActiveTintColor: '#fff',
      //   tabBarActiveBackgroundColor: '#1F1F1F',
      //   tabBarInactiveBackgroundColor: '#1F1F1F',
      //   tabBarLabelStyle: {
      //     fontSize: 12,
      //     height: 25,
      //     fontWeight: 'bold',
      //   },
      // })}>
      <Tab.Navigator> 
      {/* <Tab.Screen name="Home" options={{headerShown: false}} component={Home} /> */}
      {/* <Tab.Screen
        name="Cart"
        options={{headerShown: false, tabBarBadge: cartItems.length}}
        component={Cart}
      /> */}
    </Tab.Navigator>
  );
}

export default TabNavigation;
