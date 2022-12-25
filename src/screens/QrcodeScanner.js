import { StyleSheet, View } from "react-native";
import React, { useState, useEffect } from "react";
import { useTheme, Appbar } from "react-native-paper";
import { BarCodeScanner } from "expo-barcode-scanner";
import TextComp from "../components/TextComp";
import ButtonComp from "../components/Button";
import ActivityIndicatorComp from "../components/ActivityIndicatorComp";
const QrcodeScanner = ({ navigation }) => {
  const theme = useTheme();
  const [hasPermission, sethasPermission] = useState(null);
  const [scanned, setscanned] = useState(false);

  useEffect(() => {
    const getPermission = async () => {
      const { status } = await BarCodeScanner.getPermissionsAsync();
      sethasPermission(status == "granted");
      setscanned(true);
    };

    getPermission();
  }, []);

  const handleBarCodeScan = ({ type, data }) => {
    setscanned(true);
    //////////////////// SCAN QR CODE VALUE ////////////////
    console.log("TYPE", type, "data", data);
  };

  const manageScanner = async () => {
    if (hasPermission == false) {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      sethasPermission(status == "granted");
      setscanned(true);
    } else {
      setscanned(false);
    }
  };

  return (
    <View style={styles.container}>
      <Appbar.Header style={{ backgroundColor: "#FEFEFD", height: 50 }}>
        <Appbar.Action
          icon="keyboard-backspace"
          style={{ marginRight: "auto" }}
          onPress={() => {
            navigation.navigate("Home");
          }}
        />
      </Appbar.Header>
      <View style={{ flex: 1 }}>
        <View style={styles.sectionContainer}>
          <TextComp textValue="Scan QR Code" style={styles.headingStyle} />
          <TextComp
            textValue={`Align the QR Code within the frame ${"\n"} to scan.`}
            style={styles.subtitleStyle}
          />
        </View>
        <View
          style={{
            flex: 0.6,
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: 20,
            paddingVertical: 40,
          }}
        >
          {hasPermission === null ? (
            <ActivityIndicatorComp animating={true} color="red" size={100} />
          ) : hasPermission === false ? (
            <TextComp textValue="Please Allow To Access Camera" />
          ) : (
            <BarCodeScanner
              onBarCodeScanned={scanned ? undefined : handleBarCodeScan}
              style={{
                minWidth: "100%",
                minHeight: "100%",
              }}
            />
          )}
        </View>
        <View style={styles.btnContainer}>
          <ButtonComp
            onClick={manageScanner}
            buttonType="contained"
            buttonIcon=""
            isDisable={scanned === false ? true : false}
            textColor="white"
            extraStyle={[
              styles.btn,
              { backgroundColor: theme.colors.secondary },
            ]}
            buttonValue={
              hasPermission == false
                ? "Click To Allow Camera Access"
                : "Let's Start"
            }
            loading={scanned === false ? true : false}
          />
        </View>
      </View>
    </View>
  );
};

export default QrcodeScanner;

const styles = StyleSheet.create({
  container: { flex: 1 },
  sectionContainer: {
    flex: 0.2,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 100,
    // height: "100%",
    // marginBottom:100
  },
  headingStyle: { fontSize: 18, marginVertical: 10, fontWeight: "700" },
  subtitleStyle: {
    textAlign: "center",
    color: "#707070",
    fontSize: 12,
  },
  btnContainer: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    width: "80%",
    margin: "auto",
    height: 60,
    justifyContent: "center",
    borderRadius: 20,
  },
});
