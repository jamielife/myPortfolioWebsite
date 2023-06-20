import React, { useRef } from 'react';
import { StyleSheet, Animated, TouchableOpacity, Easing } from 'react-native';
import { useColorMode } from "native-base";
import { IconFlagJapan, IconFlagUnitedStates} from '../assets/icon-flags';

function ToggleLanguage() {
    const positionButton = useRef(new Animated.Value(0)).current;
    const isOnRef= useRef(false);

    const positionInterPol    = positionButton.interpolate({inputRange:[0, 1],outputRange:[0, -50]});
    const positionInterPol2   = positionButton.interpolate({inputRange:[0, 1],outputRange:[50, 0]});    
    const initialOpacityOn    = positionButton.interpolate({inputRange:[0, 1],outputRange:[0, 1]});
    const initialOpacityOff   = positionButton.interpolate({inputRange:[0, 1],outputRange:[1, 0]});    
    const backgroundColorAnim = positionButton.interpolate({inputRange:[0, 1],outputRange:["#000", "#81b0ff"]});    

    const {
        colorMode,
        toggleColorMode
      } = useColorMode();    

    const startAnimToOff = () => {
        Animated.timing(positionButton,{
            toValue:0,
            duration:400,
            easing:Easing.ease,
            useNativeDriver:false
        }).start()
    };

    const startAnimToOn = () => {
        Animated.timing(positionButton,{
            toValue:1,
            duration:400,
            easing:Easing.ease,
            useNativeDriver:false
        }).start()
    };

    const onPress = () => {
        if (isOnRef.current) {
            startAnimToOff();
            isOnRef.current = false;
            //toggleColorMode();
        } else {
            startAnimToOn();
            isOnRef.current = true;
            //toggleColorMode();
        }
    };

    return (
        <TouchableOpacity style={[ styles.toggleContainer ]} activeOpacity={1} onPress={onPress} >
            <Animated.View style={[styles.mainStyes ]} >                
                <Animated.View style={[styles.flags, { opacity: initialOpacityOff }]}>                    
                    <IconFlagJapan />
                </Animated.View>
                <Animated.View style={[styles.flags, { opacity: initialOpacityOn }]}>
                    <IconFlagUnitedStates />
                </Animated.View>                    
            </Animated.View>
        </TouchableOpacity>
    );
}

export default ToggleLanguage;

const styles = StyleSheet.create({
    mainStyes: {
        height: 44,
        width: 32,
        position: "relative",
        overflow: "hidden",
    },
    flags: {
        position: "absolute",
        left: -15,
        top: 10,
    }
});

