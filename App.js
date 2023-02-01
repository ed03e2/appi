import React from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


import Login from "./Screens/Login";
import Register from "./Screens/Register";
const tab = createBottomTabNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <tab.Navigator>
        <tab.Screen name="Login" component={Login} />
        <tab.Screen name="Register" component={Register} />
      </tab.Navigator>
    </NavigationContainer>
  )
}

export default App;