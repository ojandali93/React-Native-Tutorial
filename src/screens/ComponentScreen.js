import React from "react";
import { Text, StyleSheet, View } from "react-native";

export default function ComponentScreen() {
  const name = "Omar Jandali";
  return (
    <View>
      <Text style={styles.headerStyling}>
        Getting started with React Native!
      </Text>
      <Text style={styles.subHeaderStyling}>My name is {name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerStyling: {
    fontSize: 45,
  },
  subHeaderStyling: {
    fontSize: 20,
  },
});
