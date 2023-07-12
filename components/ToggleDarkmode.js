import React, { useRef, useEffect } from 'react';
import { Text, StyleSheet, Animated, TouchableOpacity, Easing } from 'react-native';
import { Box, Icon, useColorMode } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

function App() {
    const positionButton = useRef(new Animated.Value(0)).current;
    const isOnRef= useRef(false);
    
    const {
        colorMode,
        toggleColorMode
    } = useColorMode(); 

    const positionInterPol    = positionButton.interpolate({inputRange:[0, 1],outputRange:[0, -50]});
    const positionInterPol2   = positionButton.interpolate({inputRange:[0, 1],outputRange:[50, 0]});    
    const initialOpacityOn    = positionButton.interpolate({inputRange:[0, 1],outputRange:[0, 1]});
    const initialOpacityOff   = positionButton.interpolate({inputRange:[0, 1],outputRange:[1, 0]});    
    const initialOpacityOff2  = positionButton.interpolate({inputRange:[0, 1],outputRange:[.5, 0]});    
    const backgroundColorAnim = positionButton.interpolate({inputRange:[0, 1],outputRange:["#000", "#81b0ff"]});

    async function getColorMode(){
        try{
            let val = await localStorage.getItem('@color-mode');
            
            val === 'dark' ? 'dark' : 'light';
            if (val == 'light'){
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
        getColorMode();
    });


    const startAnimToOff = () => {
        Animated.timing(positionButton,{
            toValue:0,
            duration:600,
            easing:Easing.ease,
            useNativeDriver:false
        }).start()
    };

    const startAnimToOn = () => {
        Animated.timing(positionButton,{
            toValue:1,
            duration:600,
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

                <Animated.View style={[styles.mainStyes]} >
                    
                    <Animated.View style={[styles.celestialObjects, { transform:[{ translateY: positionInterPol }], opacity: initialOpacityOff }]}>                        
                        <Icon as={MaterialIcons}  name="nightlight-round" size="xl" color="white" />
                        <Box ml={-1} mt={1} w={1} h={3} style={styles.glow}> </Box>  
                        <Box ml={-1} mt={1} w={1} h={3} style={styles.glow}> </Box>                                                
                        <Box ml={-1} mt={1} w={1} h={3} style={styles.glow}> </Box>  
                    </Animated.View>

                    <Animated.View style={[styles.celestialObjects, { transform:[{ translateY: positionInterPol2 }], opacity: initialOpacityOn }]}>
                        <Icon as={MaterialIcons} name="wb-sunny" size="xl" color="rgba(255, 166, 0, 1)" />                                              
                    </Animated.View>

                    <Animated.View style={[{opacity: initialOpacityOff2 }]}><Text style={{color: "rgba(255, 217, 0, 1)", fontSize: 10 }}>.</Text></Animated.View> 
                    <Animated.View style={[{position: "absolute", top: 9,    left: -2 }, { opacity: initialOpacityOff2 }]}><Text style={{color: "rgba(255,255,255,1)"}}>.</Text></Animated.View>
                    <Animated.View style={[{position: "absolute", bottom: 4, left: 10 }, { opacity: initialOpacityOff2 }]}><Text style={{color: "rgba(255,255,255,1)", fontSize: 10 }}>.</Text></Animated.View>
                    <Animated.View style={[{position: "absolute", bottom: 2, right: 9 }, { opacity: initialOpacityOff2 }]}><Text style={{color: "rgba(255,217,0,.75)"}}>.</Text></Animated.View> 
                    <Animated.View style={[{position: "absolute", top: 2,    right: 9 }, { opacity: initialOpacityOff2 }]}><Text style={{color: "rgba(255,255,255,.75)", fontSize: 10 }}>.</Text></Animated.View> 

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
        color: "#ffffff",
        shadowColor: "#fff000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 1,
        shadowRadius: 12,

        elevation: 15,        
    }
});

