import React, { useState } from "react";
import { View, StyleSheet, FlatList, Button } from "react-native";

export default function ColorScreen() {
  const [colors, setColors] = useState([]);

  return (
    <View>
      <Button
        title="Add a new color"
        onPress={() => {
          setColors([...colors, randomRgb()]);
        }}
      />
      <FlatList
        data={colors}
        renderItem={({ item }) => {
          return (
            <View style={{ height: 100, width: 100, backgroundColor: item }} />
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({});
