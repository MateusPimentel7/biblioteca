import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeScreen from "./screens/HomeScreen";
import BookScreen from "./screens/BookScreen";
import LoanScreen from "./screens/LoanScreen";
import UserScreen from "./screens/UserScreen";

import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { enableScreens } from "react-native-screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import TabNavigation from "./TabNavigation";

enableScreens();

export default function App() {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      primary: "black",
      background: "white",
      card: "white",
      text: "black",
      border: "rgb(199, 199, 204)",
      notification: "rgb(255, 69, 58)",
    },
  };
  const Stack = createStackNavigator();

  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={TabNavigation}
          options={{
            headerRight: () => (
              <Text
                onPress={async () => {
                  await AsyncStorage.setItem("LOGIN_TOKEN", "deleted");
                }}
                style={{ fontSize: 16, color: "red", marginRight: 16 }}
              >
                Log out
              </Text>
            ),
          }}
        />
        <Stack.Screen name="Registration" component={LoanScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 0,
  },
});
