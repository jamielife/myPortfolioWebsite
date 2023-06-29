import {Text, Image, Container, Icon, Flex, Avatar, Button, Link, HStack, Center, Heading, VStack, Box, ScrollView, Divider  } from "native-base";
import { useNavigation, CommonActions  } from '@react-navigation/native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Bowl from "../components/Bowl";

const Home = () => {
    const navigation = useNavigation(); 
        
    return (
        <ScrollView w={[400, 480, 640]} style={{ overflowx: "hidden" }}>
            <Bowl />
            <Flex alignItems="center" mt={-225}>
                <Center m={4} p={4} px={6} rounded="md" _dark={{ bg: "coolGray.700:alpha.70" }} _light={{ bg: "primary.50:alpha.50" }}
                >Hello, I'm a web & app developer based in Richmond, VA!</Center>
            </Flex>

            {/* Header */}
            <HStack p={5} justifyContent={"space-between"}>
                <Container alignSelf={"flex-start"}>
                    <Heading size={"xl"}>Jamie Taylor</Heading>
                    <Text fontSize={"md"}>Solution Architect / Developer / Designer </Text>
                </Container>
                <Link href={require('../assets/me.jpg')} isExternal>
                    <Avatar borderWidth={2} mt={0} alignSelf="center" size={[20, 110]} source={ require("../assets/me.jpg")} > Jamie </Avatar>
                </Link>
            </HStack>

            {/* Work */}
            <VStack space={2} p={5} pt={0}  justifyContent={"space-between"}>
                <Heading mt={headings.mt} mb={headings.mb} pb={headings.pb} size={headings.size} borderBottomWidth={headings.bbw} borderBottomColor={headings.bbc} alignSelf={"flex-start"} >
                    About
                </Heading>

                <Text fontSize={16} textAlign={"justify"}>Hello! My name is Jamie and I'm full stack web and app developer based outta Richmond, VA. In my years in marketing I've worn a lot of hats, including designer, developer, systems engineer, photographer, videogropher, project manager, product manager, and solutions architect and I love every minute of it! When I'm not online, you can find me on my bike, on my drumset, or making something on the stove top.</Text>
                <Button my={3} alignSelf="center" onPress={() => navigation.dispatch( CommonActions.navigate({ name: 'Work',  params: { cameFrom: 'Home' } } ) ) } >
                    Check out my work ---
                </Button>
                {/* <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()}>Toggle</Button> */}
            </VStack>
            

            {/* Bio */}
            <VStack p={5} pt={0}>
                <Heading mt={headings.mt} mb={headings.mb} pb={headings.pb} size={headings.size} borderBottomWidth={headings.bbw} borderBottomColor={headings.bbc} alignSelf={"flex-start"} >
                    Bio
                </Heading>
                <VStack>
                    <HStack alignItems={"baseline"} mb={timeline.mb}>
                        <Heading size={"md"}>1982</Heading><Text fontSize={16} ml={timeline.ml}>Born & Raised</Text>
                    </HStack>

                    <HStack alignItems={"baseline"} mb={timeline.mb}>
                        <Heading size={"md"}>1998</Heading><Text fontSize={16} ml={timeline.ml}>Built my first website (RIP Geocities.com)</Text>
                    </HStack>                    

                    <HStack alignItems={"baseline"} mb={timeline.mb}>
                        <Heading size={"md"}>2000</Heading><Text fontSize={16} ml={timeline.ml}>Started first job as we web designer in Portsmouth, VA at a company called SuiteSites.com</Text>
                    </HStack>


                    <HStack alignItems={"baseline"} mb={timeline.mb}>
                        <Heading size={"md"}>2008</Heading><Text fontSize={16} ml={timeline.ml}>Created <Link href="https://htmyell.com" isExternal>Htmyell Design and Development</Link> freelance company</Text>
                    </HStack>                    
                </VStack>            
            </VStack>


            {/* I Love */}
            <VStack space={2} p={5} pt={0}  justifyContent={"space-between"}>
                <Heading mt={headings.mt} mb={headings.mb} pb={headings.pb} size={headings.size} borderBottomWidth={headings.bbw} borderBottomColor={headings.bbc} alignSelf={"flex-start"} >
                    I <Icon as={MaterialCommunityIcons } name="cards-heart" color="white" size="md"  mt={.5} mr={1} />
                </Heading>            
                <Text fontSize={16}>Design, Cooking, Development, Music, <Link href="https://open.spotify.com/album/6ZsEY7hIq4av7P5MzHnXv6" isExternal>Drumming</Link>, Cycling, Language Learning, Photography</Text>
            </VStack>


            {/* Socials */}
            <VStack space={2} p={5} pt={0}  justifyContent={"space-between"}>
                <Heading mt={headings.mt} mb={headings.mb} pb={headings.pb} size={headings.size} borderBottomWidth={headings.bbw} borderBottomColor={headings.bbc} alignSelf={"flex-start"} >
                    Socials
                </Heading>
                <HStack justifyContent={"space-evenly"}><Button fontSize={18} px={4} alignSelf={"flex-start"}><Text><Icon as={MaterialCommunityIcons } name="github"    color="white" size="md"  mt={.5} mr={1} /> @jamielife</Text></Button>
                <Button fontSize={18} px={4} alignSelf={"flex-start"}><Text><Icon as={MaterialCommunityIcons } name="instagram" color="white" size="md"  mt={.5} mr={1} /> @jamielife</Text></Button>
                <Button fontSize={18} px={4} alignSelf={"flex-start"}><Text><Icon as={MaterialCommunityIcons } name="linkedin"  color="white" size="md"  mt={.5} mr={1} /> @jvptaylor</Text></Button></HStack>
            </VStack>

            {/* Site */}
            <VStack space={2} p={5} pt={0}  justifyContent={"space-between"}>
                <Heading mt={headings.mt} mb={headings.mb} pb={headings.pb} size={headings.size} borderBottomWidth={headings.bbw} borderBottomColor={headings.bbc} alignSelf={"flex-start"} >
                    Site
                </Heading>            
                <Text fontSize={16}>This website was lovingly built using React Native, NativeBase, Threejs, Expo, Supabase, and a few other technologies. You can see the entire source at <Link href="https://github.com/jamielife/portfolio" isExternal>Github</Link></Text>
            </VStack>            

            <Center mt={8} mb={6}><Text fontSize={12} color={"warmGray.500"}>© {new Date().getFullYear()} Jamie Taylor. All rights reserved.</Text></Center>

            
        </ScrollView>
    );
}

export default Home;

//Styles
const timeline = { mb: 4, ml: 5 };
const headings = { mt: 1, mb: 4, pb: 2, size: "md", bbw: 3, bbc: "warmGray.500" }