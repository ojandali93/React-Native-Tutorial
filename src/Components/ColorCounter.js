import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function ColorCounter(props) {
  const { color, increaseColor, decreaseColor } = props;
  const increaseCount = "Increase " + color;
  const decreaseCount = "Decrease " + color;
  return (
    <View>
      <Text>{color}</Text>
      <Button
        title={increaseCount}
        onPress={() => {
          increaseColor();
        }}
      />
      <Button
        title={decreaseCount}
        onPress={() => {
          decreaseColor();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
