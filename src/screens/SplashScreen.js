import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Animated,
  ImageBackground,
} from "react-native";
import React from "react";
import { useTheme } from "react-native-paper";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const SplashScreen = (props) => {
  const animateHeight = React.useRef(new Animated.Value(0)).current;
  const fadeAnim = React.useRef(new Animated.Value(1)).current;
  const theme = useTheme();

  React.useEffect(() => {
    Animated.timing(animateHeight, {
      toValue: windowHeight,
      duration: 3000,
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: false,
      }).start(() => {
        props.navigation.replace("WelcomeScreen");
      });
    });
  }, []);

  return (
    <Animated.View
      style={[
        styles.splashScreen,
        { backgroundColor: theme.colors.primary },
        { opacity: fadeAnim },
      ]}
    >
      <Text style={styles.text}>WELCOME</Text>
      <Animated.View style={[styles.overlay, { height: animateHeight }]}>
        <ImageBackground
          source={require("../../assets/images/waves.png")}
          resizeMode="stretch"
          style={styles.img}
        ></ImageBackground>
      </Animated.View>
    </Animated.View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  splashScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  text: {
    color: "white",
    fontFamily: "clash-display",
    fontSize: 40,
  },
  overlay: {
    width: windowWidth,
    position: "absolute",
    bottom: 0,
  },
  img: {
    height: windowHeight,
    width: windowWidth,
    justifyContent: "center",
    alignItems: "center",
  },
});
