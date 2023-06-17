import React from "react";
import { VStack, HStack, Button, IconButton, Icon, Text, NativeBaseProvider, Center, Box } from "native-base";
import { StatusBar } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";

function Appbar() {
    return <>
        <StatusBar backgroundColor="rgb(0, 52, 72)" barStyle="light-content" hidden={false} />
        <Box bg="primary.600" />
        <HStack bg="primary.800" p="1" justifyContent="space-between" alignItems="center" w="100%">
            <HStack alignItems="center">
                <IconButton icon={<Icon size="xl" as={MaterialIcons} name="ramen-dining" color="white" />} />
                <Text color="white" fontSize="2xl" ml="-1">
                    Jamie Taylor
                </Text>
            </HStack>
            <HStack>
                <IconButton icon={<Icon as={MaterialIcons} name="favorite" size="lg" color="white" />} />
                <IconButton icon={<Icon as={MaterialIcons} name="search" size="lg" color="white" />} />
                <IconButton icon={<Icon as={MaterialIcons} name="menu" size="xl" color="white" />} />
            </HStack>
        </HStack>
      </>;
  }
  
  export default Appbar;