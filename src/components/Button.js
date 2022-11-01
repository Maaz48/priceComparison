import { StyleSheet, View } from "react-native";
import React from "react";
import { Button } from "react-native-paper";
const ButtonComp = ({
  onClick,
  buttonType,
  buttonIcon,
  isDisable,
  textColor,
  extraStyle,
  buttonValue,
  loading,
}) => {
  return (
    <>
      <Button
        icon={buttonIcon !== "" ? buttonIcon : ""}
        mode={buttonType}
        onPress={onClick}
        style={extraStyle}
        disabled={isDisable}
        textColor={textColor}
        loading={loading}
      >
        {buttonValue}
      </Button>
    </>
  );
};

export default ButtonComp;

const styles = StyleSheet.create({});
