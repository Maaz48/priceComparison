import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import * as Location from "expo-location";
import { Appbar, useTheme, Surface } from "react-native-paper";
import BadgeNotification from "../components/BadgeNotification";
/////////////COMPONENTS ////////////
import Button from "../components/Button";
import TextComp from "../components/TextComp";

const HomeScreen = ({ navigation }) => {
  ///////////////////// REACT ANTIVE PAPER //////////////
  const theme = useTheme();
  ////////////////////// GET COORDINATES ////////////////
  const [location, setLocation] = React.useState(null);
  const [errorMsg, setErrorMsg] = React.useState(null);
  React.useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
    console.log(location);
  }, []);

  ///////////////////////////////////// CARDS DATA///////////////////////
  const data = [
    {
      name: (
        <TextComp style={styles.cardText} textValue={`Object \nDetection`} />
      ),
      image: (
        <Image source={require("../../assets/images/objectDetection.png")} />
      ),
    },
    {
      name: <TextComp style={styles.cardText} textValue={`List \nSearch`} />,
      image: <Image source={require("../../assets/images/list.png")} />,
    },
    {
      name: (
        <TextComp style={styles.cardText} textValue={`QR Code \nDetection`} />
      ),
      image: <Image source={require("../../assets/images/qrCode.png")} />,
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
            console.log("clicked");
          }}
        />
        <BadgeNotification
          fontSize={16}
          style={{ position: "absolute", top: 5, right: 5 }}
          notifyValue={4}
          badgeIcon="bell-outline"
          onPress={() => {
            console.log("asdasd");
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
              extraStyle={styles.location}
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
            flex: 1,
            justifyContent: "space-evenly",
            paddingHorizontal: 20,
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
                  elevation={4}
                  style={{
                    paddingHorizontal: 10,
                    paddingVertical: 10,
                    backgroundColor: "white",
                    borderRadius: 20,
                    minHeight: 120,
                    maxHeight: 150,
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
                        width: "30%",
                        height: "100%",
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
                        paddingLeft: 50,
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
        <View style={{ paddingVertical: 10 }}>
          <Text style={{ textAlign: "center" }}>Price Comparison</Text>
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

  bodyContainer: { flex: 1, backgroundColor: "#FEFEFD" },
  heading: {
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    flex: 0.1,
  },
  spanElement: {
    color: "#080C15",
    fontSize: 22,
  },
  headingElement: {
    color: "#080C15",
    fontWeight: "800",
    fontSize: 22,
  },
  location: { fontSize: 11, fontWeight: "100", color: "black" },
  buttonContainer: {
    flex: 0.2,
    paddingHorizontal: 30,
  },

  cardText: {
    color: "#080C15",
    fontSize: 25,
    fontWeight: "100",
  },
});
