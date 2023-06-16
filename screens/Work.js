import {
    Text, View, Link, HStack, Center, Heading, Switch, useColorMode, NativeBaseProvider, extendTheme, VStack, Box, Column, ZStack
} from "native-base";

const Work = () => {
    return (
    <Box>
        <Box alignSelf="center">
            This is a box.
        </Box>
        <Center h="40">
            <Box mt="-32">
                <ZStack mt="3" ml={-50}>
                    <Box bg="primary.700" size="20" rounded="lg" shadow={3} />
                    <Box bg="primary.500" mt="5" ml="5" size="20" rounded="lg" shadow={5} />
                    <Box bg="primary.300" mt="10" ml="10" size="20" rounded="lg" shadow={7} />
                </ZStack>
            </Box>
        </Center>
    </Box>    
    );
}

export default Work;