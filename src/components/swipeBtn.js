import React, { useContext } from 'react'
import { View, Text, Image, Dimensions } from "react-native"
import SwipeButton from 'rn-swipe-button';
import SwipableBtnIcon from "../../assets/swipableBtn.png"
import ContextRapper from '../helper/context';
import { useTheme } from "react-native-paper";


const { height, width } = Dimensions.get("window");


const SwipeBtn = ({ navigation }) => {
    const theme = useTheme();
    const contextApi = useContext(ContextRapper);
    const HomeButton = () => {
        return (
            <View style={{ height: "100%", backgroundColor: theme.colors.primary }}>
                <Image style={width < 400 ? { width: 60, height: 70 } : { width: 120, height: 130 }} source={require("../../assets/swipableBtn.png")} />
            </View>
        );
    }
    return (
        <SwipeButton
            width="80%"
            enableReverseSwipe
            // onSwipeFail={() => { console.log("SWIPE FAILED") }}
            // onSwipeStart={() => { console.log("SWIPE HAS BEEN START") }}
            onSwipeSuccess={() => { navigation.replace("HomeScreen"); }}
            containerStyles={{ borderRadius: 15 }}
            height={width < 400 ? 50 : 100}
            railFillBackgroundColor={theme.colors.primary}
            disabledRailBackgroundColor='false'
            railBorderColor={theme.colors.primary}
            railBackgroundColor={theme.colors.primary}
            railFillBorderColor={theme.colors.primary}
            title="Slide to home"
            titleColor='white'
            titleFontSize={width < 400 ? 14 : 30}
            shouldResetAfterSuccess={true}
            thumbIconBackgroundColor={theme.colors.primary}
            thumbIconBorderColor={theme.colors.primary}
            thumbIconComponent={HomeButton}

        />
    )
}

export default SwipeBtn