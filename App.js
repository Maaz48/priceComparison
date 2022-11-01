import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import { Dimensions } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
///////////////// SCREENS ////////////
import SplashScreen from "./src/screens/SplashScreen";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import Comparison from "./src/screens/Comparison";
import DealsAndCoupons from "./src/screens/DealsAndCoupons";
import AboutUs from "./src/screens/AboutUs";
import FAQs from "./src/screens/FAQs";
import DrawerScreens from "./src/components/DrawerScreens";
import ItemsLists from "./src/screens/ItemsLists";
import QrcodeScanner from "./src/screens/QrcodeScanner";
import ObjectDetection from "./src/screens/ObjectDetection";
////////////////// SETUP STACK AND DRAWER NAVIGATION
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
////////////////////////// WINDOW WIDTH AND HEIGHT /////////////
const windowWidth = Dimensions.get("window").width;
/////////////////////////// DRAWER FUNCTION //////////////////
function DrawerContent(props) {
  console.log("drawer app.js", props);
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: windowWidth,
        },
        drawerActiveTintColor: "transparent",
        drawerLabelStyle: {
          color: "white",
          borderBottomColor: "white",
          borderBottomWidth: 1,
          fontSize: 16,
          textAlign: "center",
          width: "100%",
          paddingVertical: 5,
          paddingHorizontal: 20,
        },
      }}
      initialRouteName="Home"
      drawerContent={(props) => {
        return <DrawerScreens {...props} />;
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Comparison" component={Comparison} />
      <Drawer.Screen name="DealsAndCoupons" component={DealsAndCoupons} />
      <Drawer.Screen name="AboutUs" component={AboutUs} />
      <Drawer.Screen name="FAQs" component={FAQs} />
    </Drawer.Navigator>
  );
}
/////////////////////////// DRAWER FUNCTION //////////////////

function App() {
  const [fontsLoaded] = useFonts({
    "clash-display": require("./assets/fonts/clashDisplay.ttf"),
  });
  const theme = {
    ...DefaultTheme,
    roundness: 2,
    version: 3,
    colors: {
      ...DefaultTheme.colors,
      primary: "#080C15",
      secondary: "#FE0D64",
      tertiary: "#a1b2c3",
    },
    fonts: { ...DefaultTheme.fonts, fontFamily: "clash-display" },
  };
  if (!fontsLoaded) {
    return "";
  }

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{ title: "none" }}
          />
          <Stack.Screen
            name="WelcomeScreen"
            component={WelcomeScreen}
            options={() => {
              null;
            }}
          />
          <Stack.Screen
            name="HomeScreen"
            component={DrawerContent}
            options={() => {
              null;
            }}
          />

          <Stack.Screen
            name="ObjectDetection"
            component={ObjectDetection}
            options={() => {
              null;
            }}
          />
          <Stack.Screen
            name="ItemsLists"
            component={ItemsLists}
            options={() => {
              null;
            }}
          />
          <Stack.Screen
            name="QrcodeScanner"
            component={QrcodeScanner}
            options={() => {
              null;
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
