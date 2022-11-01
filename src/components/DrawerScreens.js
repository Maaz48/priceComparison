import { StyleSheet, View, ImageBackground } from "react-native";
import React from "react";
import {
  DrawerItemList,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import { IconButton } from "react-native-paper";
const DrawerScreens = (props) => {
  return (
    <ImageBackground
      resizeMode="cover"
      source={require("../../assets/images/drawerBgImage.png")}
      style={{ flex: 1 }}
    >
      <View style={styles.overLay}></View>
      <View style={{ flex: 0.3 }}></View>
      <DrawerContentScrollView>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={styles.btnContainer}>
        <IconButton
          icon="close"
          iconColor="white"
          size={30}
          onPress={() => props.navigation.closeDrawer()}
        />
      </View>
    </ImageBackground>
  );
};

export default DrawerScreens;

const styles = StyleSheet.create({
  overLay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "black",
    opacity: 0.6,
    zIndex: -1,
  },
  btnContainer: {
    flex: 0.3,
    alignItems: "center",
  },
});
