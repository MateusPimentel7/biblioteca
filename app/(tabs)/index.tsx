import React from 'react';
import { View, Text, FlatList, Button} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeScreen from "../screens/HomeScreen";
import BookScreen from "../screens/BookScreen";
import LoanScreen from "../screens/LoanScreen";
import UserScreen from "../screens/UserScreen";


const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Books') {
              iconName = 'book';
            } else if (route.name === 'Loans') {
              iconName = 'ios-list';
            } else if (route.name === 'Users') {
              iconName = 'people';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
       
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Books" component={BookScreen} />
        <Tab.Screen name="Loans" component={LoanScreen} />
        <Tab.Screen name="Users" component={UserScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigation;
