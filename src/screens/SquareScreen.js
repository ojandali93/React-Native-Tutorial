import React, { useState, useEffect, useReducer } from "react";
import { View, StyleSheet } from "react-native";
import ColorCounter from "../Components/ColorCounter";

const COLOR_INCREMENT = 10;
const COLOR_DECREMENT = -10;

const reducer = (state, action) => {
  switch (action.colorToChange) {
    case "red":
      return state.red + action.amount > 255 || state.red + action.amount > 0
        ? { ...state, red: state.red + action.amount }
        : state;
    case "green":
      return state.green + action.amount > 255 ||
        state.green + action.amount > 0
        ? { ...state, green: state.green + action.amount }
        : state;
    case "blue":
      return state.blue + action.amount > 255 || state.blue + action.amount > 0
        ? { ...state, blue: state.blue + action.amount }
        : state;
    default:
      return state;
  }
};

export default function SquareScreen() {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  return (
    <View>
      <ColorCounter
        color={"Red"}
        increaseColor={() => {
          dispatch({ colorToChange: "red", amount: COLOR_INCREMENT });
        }}
        decreaseColor={() => {
          dispatch({ colorToChange: "red", amount: COLOR_DECREMENT });
        }}
      />
      <ColorCounter
        color={"Green"}
        increaseColor={() => {
          dispatch({ colorToChange: "green", amount: COLOR_INCREMENT });
        }}
        decreaseColor={() => {
          dispatch({ colorToChange: "green", amount: COLOR_DECREMENT });
        }}
      />
      <ColorCounter
        color={"Blue"}
        increaseColor={() => {
          dispatch({ colorToChange: "blue", amount: COLOR_INCREMENT });
        }}
        decreaseColor={() => {
          dispatch({ colorToChange: "blue", amount: COLOR_DECREMENT });
        }}
      />
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
