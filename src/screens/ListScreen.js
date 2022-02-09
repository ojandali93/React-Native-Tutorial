import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

export default function ListScreen() {
  const friends = [
    {
      name: "Jabi",
      age: 23,
    },
    {
      name: "Dia",
      age: 23,
    },
    {
      name: "Bassil",
      age: 23,
    },
    {
      name: "Habbak",
      age: 23,
    },
    {
      name: "Khayat",
      age: 23,
    },
    {
      name: "Muhammad",
      age: 23,
    },
    {
      name: "Dan",
      age: 23,
    },
    {
      name: "Sheik",
      age: 23,
    },
  ];

  return (
    <View>
      <FlatList
        data={friends}
        renderItem={({ item, index }) => {
          return (
            <Text style={styles.textStyle} key={index}>
              {item.name} - {item.age} years old!
            </Text>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
    marginHorizontal: 50,
  },
});
