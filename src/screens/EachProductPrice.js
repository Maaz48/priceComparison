import {
  StyleSheet,
  View,
  FlatList,
  Dimensions,
  SafeAreaView,
} from "react-native";
import React, { useContext } from "react";
import { Appbar, Surface } from "react-native-paper";
import TextComp from "../components/TextComp";
import ContextRapper from "../helper/context";
import SwipeBtn from "../components/swipeBtn";
const { height, width } = Dimensions.get("window");

const EachProductPrice = ({ product, navigation }) => {
  const { contextData } = product;
  ////////////////// CONTEXT API ////////////
  const { fontSize } = useContext(ContextRapper);
  console.log("fontSize", fontSize);
  ///////////////// FLATLIST ITEM VIEW ///////////////
  const itemView = (props) => {
    const { item, index } = props;
    console.log(index);
    return (
      <Surface
        elevation={2}
        style={{
          paddingHorizontal: 10,
          backgroundColor: "white",
          borderRadius: 20,
          height: height <= 600 ? 120 : 250,
          maxHeight: 200,
          marginHorizontal: 20,
          position: "relative",
          justifyContent: "center",
          marginVertical: 20,
        }}
      >
        <View
          style={{
            height: "100%",
            width: "50%",
            justifyContent: "center",
            paddingLeft: "10%",
            backgroundColor: "white",
            zIndex: 1,
            borderRadius: 20,
          }}
        >
          <TextComp
            textValue={item.storeName}
            style={{
              fontSize: fontSize.paragraphFont,
              color: "black",
              paddingLeft: 10,
              borderWidth: 3,
              borderColor: "#FD0C63",
              borderRadius: 10,
            }}
          />

          <TextComp
            nestedText={`${item.price}/-`}
            nestedTextStyle={{
              fontSize: fontSize.headingFont,
              fontWeight: "800",
            }}
            textValue="Rs. "
            style={{
              fontSize: fontSize.paragraphFont + 10,
              color: "black",
              fontWeight: "800",
            }}
          />
        </View>
        <View
          style={{
            position: "absolute",
            top: 0,
            right: width <= 360 ? 20 : 60,
            height: 50,
            width: 50,
          }}
        >
          <View style={{ position: "relative", height: "100%" }}>
            <View style={styles.baseBottom} />
            <View style={styles.baseTop} />

            <View
              style={{
                position: "absolute",
                top: 0,
                left: width <= 360 ? -10 : 0,
                width: "100%",
                alignItems: "center",
              }}
            >
              <TextComp
                textValue={`0${index + 1}`}
                style={{
                  color: "black",
                  fontSize: width <= 360 ? 15 : fontSize.paragraphFont - 5,
                }}
              />
            </View>
          </View>
        </View>

        {/* ///////////////// BACKGROUND VIEW PINK COLOR //////// */}
        <View
          style={{
            position: "absolute",
            top: 0,
            backgroundColor: "#FD0C63",
            width: "50%",
            height: "100%",
            zIndex: -1,
            borderRadius: 20,
          }}
        />
      </Surface>
    );
  };

  return (
    <View style={styles.container}>
      <Appbar.Header style={{ backgroundColor: "#FEFEFD" }}>
        <Appbar.Action
          icon="keyboard-backspace"
          style={{ width: "10%" }}
          onPress={() => {
            navigation.navigate("HomeScreen");
          }}
        />
        <Appbar.Content
          style={{ width: "80%" }}
          title={`${contextData.productName} price`.toUpperCase()}
          titleStyle={{ fontSize: 16 }}
        />
      </Appbar.Header>

      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 0.4, backgroundColor: "red" }}></View>
        <FlatList
          style={{
            flex: 0.4,
          }}
          data={contextData.availableStore}
          keyExtractor={(item, index) => {
            return index;
          }}
          renderItem={itemView}
        />
        <View style={{ flex: 0.2, alignItems: "center", justifyContent: "center" }}>

          <SwipeBtn navigation={navigation} />

        </View>
      </SafeAreaView>
    </View>
  );
};

export default EachProductPrice;

const styles = StyleSheet.create({
  container: { flex: 1 },
  baseTop: {
    backgroundColor: "#FD0C63",
    height: height <= 600 ? 20 : 35,
    width: height <= 600 ? 30 : 50,
  },
  baseBottom: {
    borderTopWidth: 20,
    borderTopColor: "#FD0C63",
    borderLeftWidth: height <= 600 ? 15 : 25,
    borderLeftColor: "transparent",
    borderRightWidth: height <= 600 ? 15 : 25,
    borderRightColor: "transparent",
    height: 0,
    width: 0,
    left: 0,
    top: height <= 600 ? 20 : 35,
    position: "absolute",
  },
});
