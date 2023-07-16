import React from "react";
import { Linking } from "react-native";
import { useTheme, useColorModeValue, HStack, Icon, IconButton, Hidden, useBreakpointValue, Text, Button, Pressable, Image } from "native-base";
import { useNavigation, CommonActions } from '@react-navigation/native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useI18n } from './LangContext';
import { FBAalytics } from '../firebaseConfig';
import { logEvent } from "firebase/analytics";

function LeftNav() {
    const flexMargin = useBreakpointValue(navMargins);
    const navigation = useNavigation(); 
    const { colors } = useTheme();    
    const iconColor  = useColorModeValue("black", "white");
    const hoverColor = useColorModeValue(colors.primary[300], colors.primary[600]);
    const i18n = useI18n();
    
    //Styles
    const menuItem = {
        hover: {
            bg: "none",
            _text: { 
                underline: true,
                _dark:  { color: colors.primary[600] }, 
                _light: { color: colors.primary[300] }, 
            },
            _icon:{
                color: hoverColor 
            }            
        },
        pressed: { 
           bg: "none", _text: { bg: "non", color:hoverColor, underline: false }, opacity: .5, isUnderlined:false
        }
    }; 
    
    const handleButtonClick = async (url, event_name) => {
        Linking.openURL(url);        
        await logEvent(FBAalytics, event_name, {
          // event parameters
          location: "top nav",
        });
    };      

    return <>     
        <HStack alignItems="center" ml={flexMargin}> 
            { /* Logo Icon & Name */ } 
            <Pressable mt={1} _text={{ fontSize: "xl" }} isUnderlined={false} _hover={ menuItem.hover } _pressed={ menuItem.pressed } onPress={() => navigation.dispatch( CommonActions.navigate({ name: 'Home' }))}>
                {({ isHovered, isPressed }) => {
                    return  <HStack alignItems={"center"} alignContent={"center"} justifyContent={"center"}>
                        <Image size={"32px"} alt={i18n.t('logoAlt')}
                            _dark={{
                                source:{
                                    uri: isPressed ? require("../assets/ramen-dark-pressed.gif") : isHovered ? require("../assets/ramen-dark-animated.gif") : require("../assets/ramen-dark.gif")
                                }
                            }}
                            _light={{
                                source:{
                                    uri: isPressed ? require("../assets/ramen-light-pressed.gif") :  isHovered ? require("../assets/ramen-light-animated.gif") : require("../assets/ramen-light.gif")
                                }                                        
                            }} />
                        <Text pl={1} color={isPressed ? hoverColor: isHovered ? hoverColor : iconColor} fontSize={"xl"}>{i18n.t('name')}</Text>
                    </HStack>
                }}
            </Pressable>
            <Hidden from="base" till="lg" platform={['android','ios']}>
                <HStack space={4} ml={6} justifyContent="center" alignItems="center">
                    <Button bg={"none"} p={0} mt={1} _text={{ fontSize: "md", color: iconColor }} _hover={ menuItem.hover } _pressed={ menuItem.pressed } isUnderlined={false} onPress={() => navigation.dispatch( CommonActions.navigate({ name: 'Work' }))}>{i18n.t('work')}</Button>
                    <Button bg={"none"} p={0} mt={1} _text={{ fontSize: "md", color: iconColor }} _hover={ menuItem.hover } _pressed={ menuItem.pressed } isUnderlined={false} onPress={() => navigation.dispatch( CommonActions.navigate({ name: 'Posts' }))}>{i18n.t('posts')}</Button>
                    <Button bg={"none"} p={0} mt={1} _text={{ fontSize: "md", color: iconColor }} _hover={ menuItem.hover } _pressed={ menuItem.pressed } isUnderlined={false} onPress={() => { Linking.openURL('https://jamietaylor.me/resume-jamie-taylor.pdf')}}>{i18n.t('resume')}</Button>
                    <IconButton mt={2} borderRadius="none" _hover={menuItem.hover} _pressed={menuItem.pressed} 
                        icon={<Icon as={MaterialCommunityIcons} name="github" size="xl" color={iconColor} />} 
                        onPress={() => { handleButtonClick("https://github.com/jamielife/", "github_opened")}} />
                </HStack>
            </Hidden>
        </HStack>
    </>;
}

export default LeftNav;