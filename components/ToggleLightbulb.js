import React, { useState, useRef } from 'react';
import { Text, View, StyleSheet, Animated, TouchableOpacity, Easing } from 'react-native';
import { IconButton, Icon, useColorMode } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

function ToggleLightbulb() {
    const positionButton = useRef(new Animated.Value(0)).current;
    const isOnRef= useRef(false);

    const positionInterPol    = positionButton.interpolate({inputRange:[0, 1],outputRange:[0, -50]});
    const positionInterPol2   = positionButton.interpolate({inputRange:[0, 1],outputRange:[50, 0]});    
    const initialOpacityOn    = positionButton.interpolate({inputRange:[0, 1],outputRange:[0, 1]});
    const initialOpacityOff   = positionButton.interpolate({inputRange:[0, 1],outputRange:[1, 1]});    
    const backgroundColorAnim = positionButton.interpolate({inputRange:[0, 1],outputRange:["#000", "#81b0ff"]});    

    const {
        colorMode,
        toggleColorMode
      } = useColorMode();    

    const startAnimToOff = () => {
        Animated.timing(positionButton,{
            toValue:0,
            duration:200,
            easing:Easing.ease,
            useNativeDriver:false
        }).start()
    };

    const startAnimToOn = () => {
        Animated.timing(positionButton,{
            toValue:1,
            duration:200,
            easing:Easing.ease,
            useNativeDriver:false
        }).start()
    };

    const onPress = () => {
        if (isOnRef.current) {
            startAnimToOff();
            isOnRef.current = false;
            toggleColorMode();
        } else {
            startAnimToOn();
            isOnRef.current = true;
            toggleColorMode();
        }
    };

    return (
        <TouchableOpacity style={[ styles.toggleContainer ]} activeOpacity={1} onPress={onPress} >
            <Animated.View style={[styles.mainStyes ]} >                
                <Animated.View style={[styles.bulbs, { opacity: initialOpacityOff }]}>
                    <Icon as={MaterialIcons} name="lightbulb-outline" size="lg"r color="white" />
                </Animated.View>
                <Animated.View style={[styles.bulbs, { opacity: initialOpacityOn }]}>
                    <Icon as={MaterialIcons} name="lightbulb" size="lg" color="#fff000" />
                </Animated.View>                    
            </Animated.View>
        </TouchableOpacity>
    );
}

export default ToggleLightbulb;

const styles = StyleSheet.create({
    mainStyes: {
        height: 44,
        width: 44,
        position: "relative",
        //overflow: "hidden",
    },
    bulbs: {
        position: "absolute",
        left: 6,
        top: 10,
    } 
});

