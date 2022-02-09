import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Go to components demo"
        onPress={() => {
          navigation.navigate("Component");
        }}
      />
      <Button
        title="Go to list demo"
        onPress={() => {
          navigation.navigate("List");
        }}
      />
      <Button
        title="Go to image screen demo"
        onPress={() => {
          navigation.navigate("Image");
        }}
      />
      <Button
        title="Go to color demo"
        onPress={() => {
          navigation.navigate("Colors");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
