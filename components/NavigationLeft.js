import React from "react";
import { Linking } from "react-native";
import { useTheme, useColorModeValue, HStack, Icon, IconButton, Hidden, useBreakpointValue, Link } from "native-base";
import { useNavigation, CommonActions } from '@react-navigation/native';
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useI18n } from './LangContext';

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
            bg:'none', color:hoverColor, _text: { underline: false }, opacity: .5, isUnderlined:false
        }
    };    

    return <>     
        <HStack alignItems="center" ml={flexMargin}>   
            <Link mt={1} _text={{ fontSize: "xl" }} _hover={ menuItem.hover } isUnderlined={false} onPress={() => navigation.dispatch( CommonActions.navigate({ name: 'Home' }))}>
                    <Icon as={MaterialIcons} name="ramen-dining" color={iconColor} size="xl"  mt={.5} mr={1} />
                    {i18n.t('name')}
            </Link>
            <Hidden from="sm" till="lg" platform={['android','ios']}>
                <HStack space={4} ml={6} justifyContent="center" alignItems="center">
                    <Link mt={1} _text={{ fontSize: "md" }} _hover={ menuItem.hover } isUnderlined={false} onPress={() => navigation.dispatch( CommonActions.navigate({ name: 'Work' }))}>{i18n.t('work')}</Link>
                    <Link mt={1} _text={{ fontSize: "md" }} _hover={ menuItem.hover } isUnderlined={false} onPress={() => navigation.dispatch( CommonActions.navigate({ name: 'Posts' }))}>{i18n.t('posts')}</Link>
                    <Link mt={1} _text={{ fontSize: "md" }} _hover={ menuItem.hover } isUnderlined={false} onPress={() => { Linking.openURL('https://jamietaylor.me/resume-jamie-taylor.pdf')}}>{i18n.t('resume')}</Link>
                    <IconButton mt={2} borderRadius="none" _hover={menuItem.hover} _pressed={menuItem.pressed} 
                        icon={<Icon as={MaterialCommunityIcons} name="github" size="xl" color={iconColor} />} 
                        onPress={() => { Linking.openURL("https://github.com/jamielife/")}} />
                </HStack>
            </Hidden>
        </HStack>
    </>;
}

export default LeftNav;