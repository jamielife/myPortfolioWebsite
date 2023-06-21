import React, { useRef } from 'react';
import { Text, StyleSheet, Animated, TouchableOpacity, Easing } from 'react-native';
import { Box, Icon, useColorMode } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

function App() {
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
            duration:500,
            easing:Easing.ease,
            useNativeDriver:false
        }).start()
    };

    const startAnimToOn = () => {
        Animated.timing(positionButton,{
            toValue:1,
            duration:500,
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

                <Animated.View style={[styles.mainStyes, /* { backgroundColor:backgroundColorAnim }*/ ]} >
                    
                    <Animated.View style={[styles.celestialObjects, { transform:[{ translateY: positionInterPol }], opacity: initialOpacityOff }]}>
                        <Icon as={MaterialIcons} name="nightlight-round" size="xl" color="white" />
                        <Box  style={styles.glow}>.</Box>  
                        <Box style={styles.glow}>.</Box>                                                
                    </Animated.View>

                    <Animated.View style={[styles.celestialObjects, { transform:[{ translateY: positionInterPol2 }], opacity: initialOpacityOn }]}>
                        <Icon as={MaterialIcons} name="wb-sunny" size="xl" color="rgba(255, 166, 0, 1)" />                                              
                    </Animated.View>

                    <Animated.View style={[styles.mainStyes, { opacity: initialOpacityOff }]}><Text style={{color: "white"}}>.</Text></Animated.View> 
                    <Animated.View style={[styles.celestialObjects, { opacity: initialOpacityOff }]}><Text style={{color: "white"}}>.</Text></Animated.View> 

                </Animated.View>

            </TouchableOpacity>
    );
}

export default App;

const styles = StyleSheet.create({
    mainStyes: {
        height: 44,
        width: 44,
        position: "relative",
        overflow: "hidden",
    },
    celestialObjects: {
        position: "absolute",
        left: 6,
        top: 9,       
    },
    glow: {
        position: "absolute",
        left: 12,
        top: 5,   

        shadowColor: "#fff000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 1,
        shadowRadius: 10,

        elevation: 15,        
    }
});

