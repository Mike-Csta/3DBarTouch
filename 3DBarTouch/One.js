import React, { useState, useEffect, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Animated } from "react-native";
import { Barometer } from "expo-sensors";
const One = () => {
  const [constData, setConstData] = useState();
  const [data, setData] = useState(20);

  const move = useRef(new Animated.Value(0)).current;

  const fade = (value, duration, useref) => {
    Animated.timing(useref, {
      toValue: value,
      duration: duration,
      useNativeDriver: false,
    }).start();
  };
  setTimeout(() => {
    Barometer.addListener(({ pressure, relativeAltitude }) => {
      setData(((pressure - 980) * 25 * -50 + 450).toFixed(0));
      // setConstData(pressure);
      fade(data < 20 ? data : 20, 200, move);
    });
    Barometer.setUpdateInterval(5);
  }, 300);

  const kwadrat = function () {
    return {
      position: "absolute",
      width: "100%",
      height: 5000,
      backgroundColor: "#bbb",
      bottom: -4950,
      transform: [{ translateY: move }],
      // marginBottom: move,
      zIndex: -1,
    };
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Siła nacisku</Text>
      <Text style={styles.text}>{data < 0 ? data * -1 : 0}g</Text>
      <StatusBar style="auto" />
      <Animated.View style={kwadrat()}></Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    // backgroundColor: "#111",
    alignItems: "center",
    justifyContent: "center",
  },
  text: { color: "white", fontSize: 30, fontWeight: "bold" },
});

export default One;
