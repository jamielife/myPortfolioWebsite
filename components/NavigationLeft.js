import React from "react";
import { HStack, Flex, Pressable, Button, Icon, Text, Hidden, useBreakpointValue } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

function LeftNav() {
    const menuItemsHover = { bg: 'none', _text: { underline: true, _dark:{ color: "primary.400" }, _light: { color: "primary.900", bg: 'black' } } };
    const flexMargin = useBreakpointValue(navMargins);
    console.log(flexMargin);

    return <>     
        <HStack alignItems="center" ml={flexMargin}>   
            <Pressable justifyContent="center" alignItems="center" _hover={{ bg: "primary.700" }}>
                <Flex direction="row" py={1} px={2} m={0} >
                    <Icon size="xl" as={MaterialIcons} name="ramen-dining" color="white" mt={.5} mr={2} />
                    <Text color="white" fontSize="xl" ml="0">
                        Jamie Taylor
                    </Text>
                </Flex>
            </Pressable>
            <Hidden from="sm" till="lg"  platform={['android','ios']}>
                <HStack space={3} ml={4} justifyContent="center">
                    <Button borderRadius="none" bg="none" _hover={menuItemsHover}>Work</Button>
                    <Button borderRadius="none" bg="none" _hover={menuItemsHover}>Posts</Button>
                    <Button borderRadius="none" bg="none" _hover={menuItemsHover}>Resume</Button>
                </HStack>
            </Hidden>
        </HStack>
    </>;
  }
  
  export default LeftNav;