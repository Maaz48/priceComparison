import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Appbar } from "react-native-paper";
import SearchBarComp from "../components/SearchBarComp";
// const customData = require("./customData.json");
import "../../assets/groceryList.json";

const ItemsLists = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);

  const [searchItems, setsearchItems] = React.useState([]);
  React.useEffect(() => {
    setTimeout(() => {
      data.forEach((res, index) => {
        if (
          (res.brandA.toLowerCase().includes(searchQuery.toLowerCase()) ||
            res.brandB.toLowerCase().includes(searchQuery.toLowerCase()) ||
            res.brandC.toLowerCase().includes(searchQuery.toLowerCase()) ||
            res.brandD.toLowerCase().includes(searchQuery.toLowerCase()) ||
            res.brandE.toLowerCase().includes(searchQuery.toLowerCase()) ||
            res.GroceryCategory.includes(searchQuery)) &&
          searchQuery.length > 4
        ) {
          setsearchItems([data[index]]);
        }
      });
    }, 2000);
  }, [searchQuery]);

  return (
    <View style={styles.container}>
      <Appbar.Header style={{ backgroundColor: "#FEFEFD" }}>
        <Appbar.Action
          icon="keyboard-backspace"
          style={{ width: "20%" }}
          onPress={() => {
            navigation.replace("HomeScreen");
          }}
        />
        <Appbar.Content
          style={{ width: "80%" }}
          title="LIST ITEMS"
          titleStyle={{ fontSize: 16 }}
        />
      </Appbar.Header>
      <View
        style={{
          flex: 0.3,
          paddingHorizontal: 20,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "blue",
        }}
      >
        <SearchBarComp
          placeholder="Search Your Products"
          onChangeText={(e) => {
            onChangeSearch(e);
          }}
          value={searchQuery}
          loading={false}
          iconColor="red"
          customStyle={{ fontSize: 10 }}
        />
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: "pink",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {searchItems.length > 0
          ? searchItems.map((data) => {
              return (
                <>
                  <View style={{ width: "100%" }}>
                    <Text
                      style={{
                        textAlign: "center",
                        fontSize: 30,
                        fontWeight: "800",
                      }}
                    >
                      {data.brandA}
                    </Text>
                  </View>
                </>
              );
            })
          : ""}
      </View>
    </View>
  );
};

export default ItemsLists;

const styles = StyleSheet.create({ container: { flex: 1 } });

/////////////////////// JSON DATA /////////////////////
const data = [
  {
    GroceryCategory: "Milk",
    brandA: "Nurpur",
    brandB: "Dairy Omung",
    brandC: "Haleeb",
    brandD: "Olpers Milk",
    brandE: "Nestle Milkpak",
  },
  {
    GroceryCategory: "Bread",
    brandA: "Dawn ",
    brandB: "Hanif Food",
    brandC: "Morning Fresh",
    brandD: "Creek Mart",
    brandE: "Bake Parlor",
  },
  {
    GroceryCategory: "Biscuits",
    brandA: "Sooper",
    brandB: "Gluco",
    brandC: "Marie",
    brandD: "Saltish",
    brandE: "Tuc",
  },
  {
    GroceryCategory: "Chips",
    brandA: "Lays",
    brandB: "Slanty",
    brandC: "Kurkure",
    brandD: "Kababjee's Bakers",
    brandE: "Cheetos",
  },
  {
    GroceryCategory: "Drinks & Bevrages ",
    brandA: "Coca Cola",
    brandB: "Sprite",
    brandC: "7-up",
    brandD: "Fanta",
    brandE: "Pepsi",
  },
  {
    GroceryCategory: "Meat & Fish",
    brandA: "Beef",
    brandB: "Lamb and Mutton",
    brandC: "Fish",
    brandD: "Chicken",
    brandE: "Prawns",
  },
  {
    GroceryCategory: "Rice",
    brandA: "Blue Ribbon",
    brandB: "Carolina",
    brandC: "A-Z Rice Traders",
    brandD: "Goya",
    brandE: "Knorr Rice",
  },
  {
    GroceryCategory: "Wheat (Atta)",
    brandA: "Ashrafi Atta",
    brandB: "Al-Karam Enterprise",
    brandC: "Bake Parlour Atta",
    brandD: "Federal Flour Mills",
    brandE: "Feroz Flour & General Mills",
  },
  {
    GroceryCategory: "Cooking Oil ",
    brandA: "Tullo",
    brandB: "Eva",
    brandC: "Dalda",
    brandD: "Dastarkhwan",
    brandE: "Soya Supreme",
  },
  {
    GroceryCategory: "Cereal",
    brandA: "Fauji",
    brandB: "Quaker Oats",
    brandC: "Kellogg's",
    brandD: "Frosties",
    brandE: "Milo",
  },
  {
    GroceryCategory: "Frozen Foods",
    brandA: "K&N's",
    brandB: "Menu",
    brandC: "Mon Salwa",
    brandD: "Sabroso",
    brandE: "Opa",
  },
  {
    GroceryCategory: "Cheese & Eggs",
    brandA: "Adam's",
    brandB: "Happy Cow",
    brandC: "Lurpak",
    brandD: "Young's",
    brandE: "Dairy Life",
  },
  {
    GroceryCategory: "Fruits",
    brandA: "Apple",
    brandB: "Papaya",
    brandC: "Grapes",
    brandD: "Orange",
    brandE: "Banana",
  },
  {
    GroceryCategory: "Vegetable",
    brandA: "Tomato",
    brandB: "Onion",
    brandC: "Lady Finger",
    brandD: "Potato",
    brandE: "Garlic",
  },
  {
    GroceryCategory: "Spices",
    brandA: "Black Pepper",
    brandB: "Garlic Powder",
    brandC: "Tumeric (Haldi)",
    brandD: "Red Pepper",
    brandE: "Cumin (Zeera)",
  },
  {
    GroceryCategory: "Shampoo, Soap & Conditioner",
    brandA: "Sunsilk",
    brandB: "Pantene",
    brandC: "Clear",
    brandD: "Head & Shoulders",
    brandE: "Hello Hair",
  },
  {
    GroceryCategory: "Butter",
    brandA: "Nurpur",
    brandB: "Lurpak",
    brandC: "Haleeb Foods Limited",
    brandD: "Buffield Pvt. Ltd",
    brandE: "Blue Band",
  },
  {
    GroceryCategory: "Lentils & Grains (Daal)",
    brandA: "Chana Daal",
    brandB: "Mung Daal",
    brandC: "Sabat Masoor",
    brandD: "Toor Daal",
    brandE: "Rajma",
  },
  {
    GroceryCategory: "Toothpaste",
    brandA: "Colgate",
    brandB: "Crest",
    brandC: "Sensodyne",
    brandD: "Pepsodent",
    brandE: "Parodontax",
  },
  {
    GroceryCategory: "Tea / Coffee",
    brandA: "Lipton",
    brandB: "Tapal",
    brandC: "Brooke Bond Supreme",
    brandD: "Vital ",
    brandE: "ITC Islamabad Chai",
  },
  {
    GroceryCategory: "Sugar",
    brandA: "Jauharabad Sugar Mills Limited",
    brandB: "Sugarie",
    brandC: "Tandlianwala Sugar Mills Limited",
    brandD: "D.W Sugar Mills Limited",
    brandE: "Haseeb Waqas Sugar Mills Limited",
  },
  {
    GroceryCategory: "Ketchup / Murtard / Mayo",
    brandA: "National ",
    brandB: "Shangrila",
    brandC: "Knorr",
    brandD: "Bake Parlour",
    brandE: "Dipitt",
  },
  {
    GroceryCategory: "Chocolate",
    brandA: "Kit Kat",
    brandB: "Twix",
    brandC: "Snickers",
    brandD: "Dairy Milk",
    brandE: "Milky Way",
  },
  {
    GroceryCategory: "Detergent & Dish Soap",
    brandA: "Lemon Max",
    brandB: "Vim",
    brandC: "Surf Excel",
    brandD: "Ariel",
    brandE: "Express Power",
  },
  {
    GroceryCategory: "Ice-Cream",
    brandA: "Wall's",
    brandB: "Igloo",
    brandC: "Hico",
    brandD: "Omore",
    brandE: "Yummy",
  },
  {
    GroceryCategory: "Baby Diapers",
    brandA: "Pampers",
    brandB: "Molfix",
    brandC: "Huggies",
    brandD: "Canbebe",
    brandE: "Shield",
  },
  {
    GroceryCategory: "Deodorant",
    brandA: "Axe",
    brandB: "Krone Noir",
    brandC: "Fogg",
    brandD: "Bold",
    brandE: "Nivea",
  },
  {
    GroceryCategory: "Dry Fruits",
    brandA: "Almonds",
    brandB: "Apricots",
    brandC: "Cashewnuts",
    brandD: "Walnuts",
    brandE: "Pistachios",
  },
  {
    GroceryCategory: "Salt",
    brandA: "Shan",
    brandB: "National",
    brandC: "Hub Salt",
    brandD: "Falak Salt",
    brandE: "Rite Salt",
  },
  {
    GroceryCategory: "Honey",
    brandA: "My Honey",
    brandB: "Langnese Honey",
    brandC: "Al-Shifa Honey",
    brandD: "Young's Honey",
    brandE: "Salmans Pak Honey",
  },
];
