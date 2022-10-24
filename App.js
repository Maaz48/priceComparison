import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "./src/screens/SplashScreen";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import { useFonts } from "expo-font";
import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import HomeScreen from "./src/screens/HomeScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Comparison from "./src/screens/Comparison";
import DealsAndCoupons from "./src/screens/DealsAndCoupons";
import AboutUs from "./src/screens/AboutUs";
import FAQs from "./src/screens/FAQs";
import ItemsLists from "./src/screens/ItemsLists";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
/////////////////////////// DRAWER FUNCTION //////////////////
function DrawerContent() {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Home"
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
            name="ItemsLists"
            component={ItemsLists}
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
