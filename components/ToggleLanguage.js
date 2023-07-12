import React, { useRef, useEffect } from 'react';
import { StyleSheet, Animated, TouchableOpacity, Easing } from 'react-native';
import { useColorMode } from "native-base";
import { IconFlagJapan, IconFlagUnitedStates} from '../assets/icon-flags';
import { useLangUpdate } from './LangContext';

function ToggleLanguage() {
    const positionButton = useRef(new Animated.Value(0)).current;
    const isOnRef= useRef(false);
    const toggleLocale = useLangUpdate();

    const positionInterPol    = positionButton.interpolate({inputRange:[0, 1],outputRange:[0, -50]});
    const positionInterPol2   = positionButton.interpolate({inputRange:[0, 1],outputRange:[50, 0]});    
    const initialOpacityOn    = positionButton.interpolate({inputRange:[0, 1],outputRange:[0, 1]});
    const initialOpacityOff   = positionButton.interpolate({inputRange:[0, 1],outputRange:[1, 0]});    
    const backgroundColorAnim = positionButton.interpolate({inputRange:[0, 1],outputRange:["#000", "#81b0ff"]});    

    //check for previous cached selection and overwrite if necessary
    async function isLocaleSet(){
        try{
            let locale = await localStorage.getItem('@locale');
            console.log(locale);
            if(locale.startsWith("en")) locale = "en";            

            if (locale == 'ja'){
                startAnimToOn();
                isOnRef.current = true;
            } else {
                startAnimToOff();
                isOnRef.current = false;
            } 
        } catch (error){
            console.log(error);
        }
    }    
    useEffect(() => {  
        isLocaleSet();
    });  

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
            toggleLocale("en");
            localStorage.setItem('@locale', "en");
        } else {
            startAnimToOn();
            isOnRef.current = true;
            toggleLocale("ja");
            localStorage.setItem('@locale', "ja");
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

