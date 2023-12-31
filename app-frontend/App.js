import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import UserScreen from "./screens/UserScreen";
import SettingScreen from "./screens/SettingScreen";
import ProfileScreen from "./screens/ProfileScreen";

const TabNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: (tabInfo) => (
          <Ionicons name="md-home" size={25} color={"darkcyan"} />
        ),
      },
    },
    User: {
      screen: UserScreen,
      navigationOptions: {
        tabBarLabel: "User",
        tabBarIcon: (tabInfo) => (
          <Ionicons
            name="md-person-circle-outline"
            size={25}
            color={"darkcyan"}
          />
        ),
      },
    },
    Setting: {
      screen: SettingScreen,
      navigationOptions: {
        tabBarLabel: "Setting",
        tabBarIcon: (tabInfo) => (
          <Ionicons name="md-settings-outline" size={25} color={"darkcyan"} />
        ),
      },
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarLabel: "User",
        tabBarIcon: (tabInfo) => (
          <Ionicons
            name="md-person-circle-outline"
            size={25}
            color={"darkcyan"}
          />
        ),
      },
    },
  },

  {
    initialRouteName: "Home",
    barStyle: { backgroundColor: "#fff", color: "darycyan", padding: 8 },
  }
);

const Navigator = createAppContainer(TabNavigator);

export default function App() {
  return (
    <Navigator>
      <HomeScreen />
    </Navigator>
  );
}
