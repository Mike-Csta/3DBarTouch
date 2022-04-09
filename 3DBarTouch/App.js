import React, { useState, useEffect, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Animated } from "react-native";
import { Barometer } from "expo-sensors";
import One from "./One";
export default function App() {
  return (
    <View style={styles.container}>
      <One />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    backgroundColor: "#aaa",
    alignItems: "center",
    justifyContent: "center",
  },
  text: { color: "white", fontSize: 30, fontWeight: "bold" },
});
