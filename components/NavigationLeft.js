import React, {useEffect} from "react";
import { Linking } from "react-native";
import { useTheme, useColorModeValue, HStack, Icon, IconButton, Hidden, useBreakpointValue, Link } from "native-base";
import { useNavigation, CommonActions, NavigationState, useNavigationContainerRef  } from '@react-navigation/native';
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

function LeftNav() {
    const flexMargin = useBreakpointValue(navMargins);
    const navigation = useNavigation(); 
    const { colors } = useTheme();    
    const iconColor = useColorModeValue("black", "white");

    //Styles
    const menuItem = {
        btn:{
            m:0, mt:1, p:0, h:0,
        },
        hover: {
            bg: 'none', 
            _text: { underline: true,
                _dark:  { color: colors.primary[600] }, 
                _light: { color: colors.primary[300] } 
            },
            _icon: { 
                _dark:  { color: colors.primary[600] }, 
                _light: { color: colors.primary[300] }         
            }
        },
        pressed: { 
            bg:'none', _text: { underline: false }, opacity: .5, isUnderlined:false
        }
    };    

    return <>     
        <HStack alignItems="center" ml={flexMargin}>   
            <Link mt={1} _text={{ fontSize: "xl" }} _hover={ menuItem.hover } isUnderlined={false} onPress={() => navigation.dispatch( CommonActions.navigate({ name: 'Home' }))}>
                    <Icon as={MaterialIcons} name="ramen-dining" color={iconColor} size="xl"  mt={.5} mr={1} />
                     Jamie Taylor 
            </Link>
            <Hidden from="sm" till="lg" platform={['android','ios']}>
                <HStack space={4} ml={6} justifyContent="center" alignItems="center">
                    <Link mt={1} _text={{ fontSize: "md" }} _hover={ menuItem.hover } isUnderlined={false} onPress={() => navigation.dispatch( CommonActions.navigate({ name: 'Work' }))}>Work</Link>
                    <Link mt={1} _text={{ fontSize: "md" }} _hover={ menuItem.hover } isUnderlined={false} onPress={() => navigation.dispatch( CommonActions.navigate({ name: 'Posts' }))}>Posts</Link>
                    <Link mt={1} _text={{ fontSize: "md" }} _hover={ menuItem.hover } isUnderlined={false} onPress={() => { Linking.openURL(require('../assets/me.jpg'))}}>Resume</Link>
                    <IconButton mt={2} borderRadius="none" zIndex={10}
                        _hover={ menuItem.hover } _pressed={menuItem.pressed} 
                        icon={<Icon as={MaterialCommunityIcons} name="github" size="xl" color={iconColor} />} 
                        onPress={() => { Linking.openURL("https://github.com/jamielife/portfolio")}} />
                </HStack>
            </Hidden>
        </HStack>
    </>;
}

export default LeftNav;