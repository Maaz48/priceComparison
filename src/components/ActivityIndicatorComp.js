import { StyleSheet } from "react-native";
import React from "react";
import { ActivityIndicator } from "react-native-paper";

const ActivityIndicatorComp = ({
  animation,
  color,
  hidesWhenStopped,
  size,
}) => {
  return (
    <ActivityIndicator
      animating={animation}
      color={color}
      hidesWhenStopped={hidesWhenStopped}
      size={size}
    />
  );
};

export default ActivityIndicatorComp;

const styles = StyleSheet.create({});
