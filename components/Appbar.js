import React from "react";
import { VStack, HStack, Flex, Pressable, Button, IconButton, Icon, Text, Hidden, useBreakpointValue, useColorMode, Switch, NativeBaseProvider, Center, Box } from "native-base";
import { StatusBar } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation, DrawerActions } from '@react-navigation/native';
import ToggleDarkmode from './ToggleDarkmode';
import ToggleLanguage from "./ToggleLanguage";

function Appbar() {
    const flexDir = useBreakpointValue({
        base: "100%", sm: "100%",  lg: "60%",
      });

    const navigation = useNavigation();
    return <>
        <StatusBar backgroundColor="rgb(0, 52, 72)" barStyle="light-content" hidden={false} />
        <HStack bg="primary.800" w="100%" justifyContent="center" alignItems="center" >
            <HStack  p="1" justifyContent="space-between" alignItems="center" w={flexDir}>
                <HStack alignItems="center">
                    <Pressable justifyContent="center" alignItems="center" bg="primary.800" _hover={{ bg: "primary.700" }}>
                        <Flex direction="row" py={1} px={2} m={0} >
                            <Icon size="xl" as={MaterialIcons} name="ramen-dining" color="white" mt={.5} mr={2} />
                            <Text color="white" fontSize="xl" ml="0">
                                Jamie Taylor
                            </Text>
                        </Flex>
                    </Pressable>
                    <Hidden from="sm" till="lg"  platform={['android','ios']}>
                        <HStack space={3} ml={4} justifyContent="center">
                            <Button borderRadius="none" bg="primary.800" _hover={{ bg: "primary.700" }}>Work</Button>
                            <Button borderRadius="none" bg="primary.800" _hover={{ bg: "primary.700" }}>Posts</Button>
                            <Button borderRadius="none" bg="primary.800" _hover={{ bg: "primary.700" }}>Resume</Button>
                        </HStack>
                    </Hidden>
                </HStack>
                <HStack>
                    <ToggleDarkmode />
                    <ToggleLanguage />
                    <Hidden only={['lg', 'xl', '2xl', '3xl']}><IconButton borderRadius="none" bg="primary.800" _hover={{ bg: "primary.700" }} icon={<Icon as={MaterialIcons} name="menu" size="xl" color="white" />} onPress={() => navigation.dispatch(DrawerActions.toggleDrawer()) } /></Hidden>
                </HStack>
            </HStack>
        </HStack>
      </>;
  }
  
  export default Appbar;