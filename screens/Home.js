import {Text, Image, Container, View, Flex, Avatar, Button, Link, HStack, Center, Heading, VStack, Box, Stack } from "native-base";
import { useNavigation, CommonActions  } from '@react-navigation/native';

export default function Home() {
    const navigation = useNavigation();    
    return (
        <View w={[400, 480, 640]} style={{ overflowx: "hidden" }}>
            <Box>                
                <Image size={640} mt={-125} mb={-175} source={ require('../assets/ramen.png') } alt="Bowl of Ramen" />
            </Box>
            <Flex alignItems="center">
                <Center m={4} p={4} px={6} bg={"warmGray.700:alpha.30"} rounded="md">Hello! I'm am app developer based in Richmond, VA!</Center>
            </Flex>

            <HStack flex={1} p={5} justifyContent={"space-between"}>
                <Container>
                    <Heading size={"xl"}>Jamie Taylor</Heading>
                    <Text fontSize={"md"}>Solution Architect ( Artist / Musician / Cyclist / Engineer )</Text>
                </Container>
                <Link href={require('../assets/me.jpg')} isExternal>
                    <Avatar borderWidth={2} mt={-3} alignSelf="center" size="xl" source={ require("../assets/me.jpg")} > Jamie </Avatar>
                </Link>
            </HStack>

            <VStack space={2} p={5} mt={10}  justifyContent={"space-between"}>
                <Heading my={1} size={"md"}>Work</Heading>
                <Text fontSize={16} textAlign={"justify"}>I like to work, hire me for the love of all that is holy. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                <Button alignSelf="center" onPress={() => navigation.dispatch( CommonActions.navigate({ name: 'Work',  params: { cameFrom: 'Home' } } ) ) } >
                    Check out my work!
                </Button>
                <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()}>Toggle</Button>
            </VStack>

            <Box h={56}></Box>
        </View>
    );
}