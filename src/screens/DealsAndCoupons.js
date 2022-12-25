import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  SafeAreaView,
  Dimensions,
  Pressable,
} from "react-native";
import React, { useState, useEffect, useContext } from "react";
import { Appbar } from "react-native-paper";
import SearchBarComp from "../components/SearchBarComp";
import TextComp from "../components/TextComp";
import { callAPI } from "../helper/apicalls";
import ActivityIndicatorComp from "../components/ActivityIndicatorComp";

///////////// CONTEXT API ///////////
import ContextRapper from "../helper/context";

const { height, width } = Dimensions.get("window");

const DealsAndCoupons = ({ navigation }) => {
  const eachProductScreenData = useContext(ContextRapper);

  const [searchQuery, setsearchQuery] = useState("");
  const [productList, setproductList] = useState([]);
  const [masterData, setmasterData] = useState([]);
  const [isProductsLoad, setisProductsLoad] = useState(false);
  useEffect(() => {
    const datafunction = async () => {
      // let productsData = await callAPI("products", "", null, "GET");
      //////////////////// RANDOM DATA API WILL CREATE AND THEN CALL HERE /////////////////
      const productsData = [{
        dealNo: "01",
        dealDescription: "Dark vector background with gradient mesh. Wallpaper in trendy colors. Modern screen",
        dealDiscount: "40%",
        dealCoupon: "CDX485",
        isAvailable: true
      }, {
        dealNo: "02",
        dealDescription: "Dark vector background with gradient mesh. Wallpaper in trendy colors. Modern screen",
        dealDiscount: "40%",
        dealCoupon: "CDX485",
        isAvailable: false
      }, {
        dealNo: "03",
        dealDescription: "Dark vector background with gradient mesh. Wallpaper in trendy colors. Modern screen",
        dealDiscount: "40%",
        dealCoupon: "CDX485",
        isAvailable: true
      }, {
        dealNo: "04",
        dealDescription: "Dark vector background with gradient mesh. Wallpaper in trendy colors. Modern screen",
        dealDiscount: "40%",
        dealCoupon: "CDX485",
        isAvailable: true
      }, {
        dealNo: "05",
        dealDescription: "Dark vector background with gradient mesh. Wallpaper in trendy colors. Modern screen",
        dealDiscount: "40%",
        dealCoupon: "CDX485",
        isAvailable: false
      }, {
        dealNo: "06",
        dealDescription: "Dark vector background with gradient mesh. Wallpaper in trendy colors. Modern screen",
        dealDiscount: "40%",
        dealCoupon: "CDX485",
        isAvailable: true
      }]
      setisProductsLoad(true);
      setproductList(productsData);
      setmasterData(productsData);
    };

    datafunction();
  }, []);



  const getPriceOFThisProduct = (product) => {
    eachProductScreenData.singleProduct(product);
    navigation.navigate("productPrice");
  };

  const itemView = (props) => {
    const { item } = props;
    return (
      <View

        style={{ padding: 20, maxHeight: 350, height: width < 400 ? 220 : 270, marginVertical: width < 400 ? 0 : 10, backgroundColor: "white" }}
      >
        <Pressable onPress={() => getPriceOFThisProduct(item)} style={{ backgroundColor: item.isAvailable ? "#FE0D64" : "#F3F3F3", borderRadius: 30, position: "relative" }}>
          <View style={{ position: "absolute", top: "57%", left: -20, zIndex: 20, backgroundColor: "white", height: 40, width: 40, borderRadius: 50 }}></View>
          <View style={{ position: "absolute", top: "57%", right: -20, zIndex: 20, backgroundColor: "white", height: 40, width: 40, borderRadius: 50 }}></View>

          <View style={{ height: "65%", paddingHorizontal: 20, justifyContent: "center" }} >
            <TextComp
              textValue={`Deal ${item.dealNo}`}
              style={{ fontSize: height <= 600 ? 20 : 30, color: item.isAvailable ? "white" : "black", fontWeight: "800" }}
            />
            <TextComp
              textValue={item.dealDescription}
              style={{ fontSize: height <= 600 ? 12 : 20, color: item.isAvailable ? "white" : "black" }}
            />
          </View>
          <View style={{ height: "35%", borderTopWidth: 1.4, borderColor: item.isAvailable ? "white" : "#FE0D64", borderStyle: "dotted", paddingHorizontal: 20, flexDirection: "row", alignItems: "center" }} >
            <View style={{ width: width < 400 ? "60%" : "70%" }}>
              <TextComp style={{ fontSize: height <= 600 ? 15 : 25, color: item.isAvailable ? "white" : "#FE0D64", fontWeight: "800" }} textValue={`Exclusive ${item.dealDiscount} Discount`} />
            </View>
            <View style={{ width: width < 400 ? "40%" : "30%", paddingHorizontal: 20, height: 40, maxHeight: 60, borderWidth: 2, borderRadius: 10, borderColor: item.isAvailable ? "white" : "#FE0D64", justifyContent: "center" }}>
              <TextComp style={{ fontSize: height <= 600 ? 10 : 20, color: item.isAvailable ? "white" : "#FE0D64" }} textValue={`Code: ${item.dealCoupon}`} />

            </View>
          </View>
        </Pressable >
      </View>
    );
  };

  const ItemSeparatorView = () => {
    return (
      <View style={{ height: 4, width: "100%", backgroundColor: "white" }} />
    );
  };

  return (
    <View style={styles.container}>
      <Appbar.Header style={{ backgroundColor: "#FEFEFD", marginBottom: 30 }}>
        <Appbar.Action
          icon="keyboard-backspace"
          style={{ width: "20%" }}
          onPress={() => {
            navigation.replace("HomeScreen");
          }}
        />
        <Appbar.Content
          style={{ width: "80%" }}
          title="Deals & Coupons"
          titleStyle={{ fontSize: 16 }}
        />
      </Appbar.Header>
      <SafeAreaView style={{ flex: 1 }}>
        <View>
          {isProductsLoad ? (
            <FlatList
              data={productList}
              keyExtractor={(item, index) => {
                return index;
              }}
              ItemSeparatorComponent={ItemSeparatorView}
              renderItem={itemView}
            />
          ) : (
            <View
              style={{
                width: width,
                height: height,
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                top: 0,
                left: 0,
              }}
            >
              <ActivityIndicatorComp
                animation={true}
                color="#FE0D64"
                size={50}
              />
            </View>
          )}
        </View>
      </SafeAreaView>
    </View>
  );
};

export default DealsAndCoupons;

const styles = StyleSheet.create({ container: { flex: 1, backgroundColor: "white" } });
