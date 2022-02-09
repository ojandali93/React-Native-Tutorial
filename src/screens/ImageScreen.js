import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import ImageDetail from "../Components/ImageDetail";

export default function ImageScreen() {
  return (
    <View>
      <ImageDetail
        title={"Beach"}
        image={require("../../assets/images/beach.jpg")}
      />
      <ImageDetail
        title={"Forest"}
        image={require("../../assets/images/forest.jpg")}
      />
      <ImageDetail
        title={"Mountain"}
        image={require("../../assets/images/mountain.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
