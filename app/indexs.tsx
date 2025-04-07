import React from "react";
import HomeScreen from "./(tabs)/Home";
import AuthScreen from ".";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();
export default function App() {
  <NavigationContainer>
    <Stack.Navigator initialRouteName="AuthScreeen">
      <Stack.Screen name="AuthScreeen" component={AuthScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  </NavigationContainer>;
}
