import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function ImageDetail(props) {
  const imagePath = "../../assets/images/" + String(props.image);

  return (
    <View>
      <Text>{props.title}</Text>
      <Image source={props.image} />
    </View>
  );
}

const styles = StyleSheet.create({});
