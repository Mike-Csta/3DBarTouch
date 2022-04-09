import React, { useState, useEffect, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Animated } from "react-native";
import { Barometer } from "expo-sensors";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import One from "./One";
import Two from "./Two";
import Home from "./Home";
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <View style={{ flex: 1, backgroundColor: "#222" }}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
            detachPreviousScreen: false,
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="One" component={One} />
          <Stack.Screen name="Two" component={Two} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  text: { color: "white", fontSize: 30, fontWeight: "bold" },
});
