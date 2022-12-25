import { StyleSheet } from "react-native";
import React from "react";
import { ActivityIndicator } from "react-native-paper";

const ActivityIndicatorComp = ({
  animation,
  color,
  hidesWhenStopped,
  size,
  style,
}) => {
  return (
    <ActivityIndicator
      animating={animation}
      color={color}
      hidesWhenStopped={hidesWhenStopped}
      size={size}
      style={style}
    />
  );
};

export default ActivityIndicatorComp;

const styles = StyleSheet.create({});
