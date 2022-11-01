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
      navigation.navigate("objectDetection");
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
            console.log("asdasd");
          }}
          isVisible={true}
        />
      </Appbar.Header>
      <View style={styles.bodyContainer}>
        <View style={styles.textContainer}>
          <View>
            <Button
              style={styles.location}
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
        <View style={{ flex: 1, justifyContent: "space-evenly" }}>
          {data.map((printCArds, index) => {
            return (
              <Pressable
                style={styles.buttonContainer}
                key={index}
                onPress={() => {
                  conversionScreen(index);
                }}
              >
                <View style={styles.cardContainer}>
                  <View style={styles.cardOverLay}></View>
                  <Surface elevation={2} style={styles.cardImage}>
                    {printCArds.image}
                  </Surface>
                  <Surface elevation={2} style={styles.cardTextContainer}>
                    {printCArds.name}
                  </Surface>
                </View>
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
  cardContainer: {
    flexDirection: "row",
    borderRadius: 15,
    minHeight: 100,
    maxHeight: 130,
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    backgroundColor: "white",
  },
  cardOverLay: {
    position: "absolute",
    right: 2,
    backgroundColor: "#FD0C63",
    width: "50%",
    height: "100%",
    borderRadius: 20,
  },
  cardImage: {
    backgroundColor: "#FD0C63",
    height: "100%",
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  cardTextContainer: {
    width: "60%",
    paddingHorizontal: 30,
    backgroundColor: "white",
    height: "100%",
    justifyContent: "center",
    borderRadius: 10,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  cardText: {
    color: "#080C15",
    fontSize: 22,
    fontWeight: "100",
  },
});
