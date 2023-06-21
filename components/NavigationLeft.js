import React from "react";
import { Linking } from "react-native";
import { HStack, Flex, Pressable, Button, Icon, IconButton, Text, Hidden, useBreakpointValue, Link } from "native-base";
import { useNavigation, CommonActions  } from '@react-navigation/native';
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

function LeftNav() {
    const flexMargin = useBreakpointValue(navMargins);
    const navigation = useNavigation(); 

    return <>     
        <HStack alignItems="center" ml={flexMargin}>   
            <Pressable justifyContent="center" alignItems="center" _hover={{ opacity: .5 }} onPress={() => navigation.dispatch( CommonActions.navigate({ name: 'Home' }))}>
                <Flex direction="row" py={1} px={2} m={0}>
                    <Icon as={MaterialIcons} name="ramen-dining" color="white" size="xl"  mt={.5} mr={1} />
                    <Text color="white" fontSize="xl"> Jamie Taylor </Text>
                </Flex>
            </Pressable>
            <Hidden from="sm" till="lg" platform={['android','ios']}>
                <HStack space={4} ml={6} justifyContent="center" alignItems="center">
                    <Button m={0} mt={1} p={0} h={0} size={"lg"} bg="none" _hover={ menuItem.hover } _pressed={menuItem.pressed} onPress={() => navigation.dispatch( CommonActions.navigate({ name: 'Work' }))}>Work</Button>
                    <Button m={0} mt={1} p={0} h={0} size={"lg"} bg="none" _hover={ menuItem.hover } _pressed={menuItem.pressed} onPress={() => navigation.dispatch( CommonActions.navigate({ name: 'Posts' }))}>Posts</Button>
                    <Button m={0} mt={1} p={0} h={0} size={"lg"} bg="none" _hover={ menuItem.hover } _pressed={menuItem.pressed} onPress={ ()=>{ Linking.openURL(require('../assets/me.jpg'))}}>Resume</Button>
                    <IconButton borderRadius="none" 
                        _hover={{ bg: "primary.700" }} 
                        icon={<Icon as={MaterialCommunityIcons} 
                            name="github" size="xl" color="white" />} 
                        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
                    />
                </HStack>
            </Hidden>
        </HStack>
    </>;
}
  
export default LeftNav;

//Styles
const menuItem = {
    hover: {
        bg: 'none', 
        _text: { underline: true, 
            _dark:  { color: "primary.400" }, 
            _light: { color: "primary.900" } 
        }
    },
    pressed: { 
        bg:'none', _text: { underline: false } 
    }
};