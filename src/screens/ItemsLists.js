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

const ItemsLists = ({ navigation }) => {
  const eachProductScreenData = useContext(ContextRapper);

  const [searchQuery, setsearchQuery] = useState("");
  const [productList, setproductList] = useState([]);
  const [masterData, setmasterData] = useState([]);
  const [isProductsLoad, setisProductsLoad] = useState(false);
  useEffect(() => {
    const datafunction = async () => {
      let productsData = await callAPI("products", "", null, "GET");
      console.log("products", productsData)
      setisProductsLoad(true);
      setproductList(productsData);
      setmasterData(productsData);
    };

    datafunction();
  }, []);

  const searchFilter = (e) => {
    if (e) {
      const newData = masterData.filter((data) => {
        const itemData = data.productName
          ? data.productName.toUpperCase()
          : "".toUpperCase();
        const textData = e.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setproductList(newData);
      setsearchQuery(e);
    } else {
      setproductList(masterData);
      setsearchQuery(e);
    }
  };

  const getPriceOFThisProduct = (product) => {
    eachProductScreenData.singleProduct(product);
    navigation.navigate("productPrice");
  };

  const itemView = (props) => {
    const { item } = props;
    return (
      <Pressable
        onPress={() => getPriceOFThisProduct(item)}
        style={{ padding: 20, backgroundColor: "#FE0D64" }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ width: "80%" }}>
            <TextComp
              textValue={item.productName}
              style={{ fontSize: height <= 600 ? 25 : 40, color: "white" }}
            />
            <TextComp
              textValue={item.category}
              style={{ fontSize: height <= 600 ? 15 : 20, color: "white" }}
            />
          </View>

          <Image
            style={{ height: 50, width: 50 }}
            resizeMode="cover"
            source={require("../../assets/images/bread.png")}
          />
        </View>
      </Pressable>
    );
  };

  const ItemSeparatorView = () => {
    return (
      <View style={{ height: 4, width: "100%", backgroundColor: "white" }} />
    );
  };

  return (
    <View style={styles.container}>
      <Appbar.Header style={{ backgroundColor: "#FEFEFD" }}>
        <Appbar.Action
          icon="keyboard-backspace"
          style={{ width: "20%" }}
          onPress={() => {
            navigation.navigate("HomeScreen");
          }}
        />
        <Appbar.Content
          style={{ width: "80%" }}
          title="LIST ITEMS"
          titleStyle={{ fontSize: 16 }}
        />
      </Appbar.Header>
      <SafeAreaView style={{ flex: 1 }}>
        <View>
          <SearchBarComp
            placeholder="Search Your Products"
            onChangeText={(e) => {
              searchFilter(e);
            }}
            value={searchQuery}
            loading={false}
            iconColor="red"
            customStyle={{ fontSize: 10, height: height <= 600 ? 70 : 100 }}
          />
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

export default ItemsLists;

const styles = StyleSheet.create({ container: { flex: 1 } });
