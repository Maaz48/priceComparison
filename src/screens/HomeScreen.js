import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Dimensions,
} from "react-native";
import React from "react";
import * as Location from "expo-location";
import { Appbar, useTheme, Surface } from "react-native-paper";
import BadgeNotification from "../components/BadgeNotification";
/////////////COMPONENTS ////////////
import Button from "../components/Button";
import TextComp from "../components/TextComp";

const { height, width } = Dimensions.get("window");
console.log("height", height, "width", width);

const HomeScreen = ({ navigation }) => {
  ///////////////////// REACT ANTIVE PAPER //////////////
  const theme = useTheme();
  ////////////////////// GET COORDINATES ////////////////
  const [location, setLocation] = React.useState(null);
  const [errorMsg, setErrorMsg] = React.useState(null);
  React.useEffect(() => {
    async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    };
  }, []);

  ///////////////////////////////////// CARDS DATA///////////////////////
  const data = [
    {
      name: (
        <TextComp style={styles.cardText} textValue={`Object \nDetection`} />
      ),
      image: (
        <Image
          style={styles.imageStyle}
          source={require("../../assets/images/objectDetection.png")}
        />
      ),
      gotoScreen: "ObjectDetection",
    },
    {
      name: <TextComp style={styles.cardText} textValue={`List \nSearch`} />,
      image: (
        <Image
          style={styles.imageStyle}
          source={require("../../assets/images/list.png")}
        />
      ),
      gotoScreen: "ItemsLists",
    },
    {
      name: (
        <TextComp style={styles.cardText} textValue={`QR Code \nDetection`} />
      ),
      image: (
        <Image
          style={styles.imageStyle}
          source={require("../../assets/images/qrCode.png")}
        />
      ),
      gotoScreen: "QrcodeScanner",
    },
  ];

  ///////////////////////// SCREEN SETUP **CONVERSION SCREENS ** //////////////
  const conversionScreen = (e) => {
    if (e == 0) {
      navigation.navigate("ObjectDetection");
    } else if (e == 1) {
      navigation.navigate("ItemsLists");
    } else if (e == 2) {
      navigation.navigate("QrcodeScanner");
    }
  };

  return (
    <View style={styles.container}>
      <Appbar.Header style={{ backgroundColor: "#FEFEFD" }}>
        <Appbar.Action
          icon="menu"
          style={{ marginRight: "auto" }}
          onPress={() => {
            navigation.openDrawer();
          }}
        />
        <BadgeNotification
          fontSize={16}
          style={{ position: "absolute", top: 5, right: 5 }}
          notifyValue={4}
          badgeIcon="bell-outline"
          onPress={() => {
            console.log("badge clicked");
          }}
          isVisible={true}
        />
      </Appbar.Header>
      <View style={styles.bodyContainer}>
        <View style={styles.textContainer}>
          <View>
            <Button
              buttonIcon="google-maps"
              buttonValue="Your Current, Location"
              extraStyleText={{
                fontSize: height <= 600 ? 12 : 20,
              }}
            />
          </View>
          <View style={styles.heading}>
            <Text>
              <Text style={styles.spanElement}>Select </Text>
              <Text style={styles.headingElement}>Your Method</Text>
            </Text>
          </View>
        </View>
        {/* ///////////////////// OPTIONS SELECTION CARDS //////////////// */}
        <View
          style={{
            height: "70%",
            justifyContent: "space-around",
          }}
        >
          {data.map((printCArds, index) => {
            return (
              <Pressable
                style={styles.buttonContainer}
                key={index}
                onPress={() => {
                  conversionScreen(index);
                }}
              >
                <Surface
                  elevation={2}
                  style={{
                    paddingHorizontal: 10,
                    paddingVertical: 10,
                    backgroundColor: "white",
                    borderRadius: 20,
                    height: height <= 600 ? "100%" : 100 + (height - 600),
                    maxHeight: 200,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      height: "100%",
                      width: "100%",
                    }}
                  >
                    <View
                      style={{
                        backgroundColor: "#FD0C63",
                        width: "40%",
                        // height: "100%",
                        borderRadius: 15,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {printCArds.image}
                    </View>
                    <View
                      style={{
                        width: "70%",
                        paddingLeft: 30,
                        justifyContent: "center",
                      }}
                    >
                      {printCArds.name}
                    </View>
                  </View>
                </Surface>
              </Pressable>
            );
          })}
        </View>
        <View
          style={{
            height: "20%",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: height <= 600 ? 16 : 24 }}>
            Price Comparison
          </Text>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    margin: 0,
  },

  bodyContainer: { height: "100%" },
  heading: {
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    height: "10%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  spanElement: {
    color: "#080C15",
    fontSize: height <= 600 ? 16 : 40,
  },
  headingElement: {
    color: "#080C15",
    fontWeight: "800",
    fontSize: height <= 600 ? 16 : 40,
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "25%",
    paddingHorizontal: "10%",
  },

  cardText: {
    color: "#080C15",
    fontSize: height <= 600 ? 25 : 45,
    fontWeight: "100",
  },
});
