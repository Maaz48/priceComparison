import { StyleSheet, Text, View } from "react-native";
import React from "react";

const TextComp = ({ textValue, style }) => {
  return <Text style={style}>{textValue}</Text>;
};

export default TextComp;
