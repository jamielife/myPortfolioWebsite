import {Text, Image, Container, Icon, Flex, Avatar, Button, Link, HStack, Center, Heading, VStack, Box, ScrollView, Divider  } from "native-base";
import { useNavigation, CommonActions  } from '@react-navigation/native';
import { MaterialCommunityIcons } from "@expo/vector-icons";


import React, {useState, useEffect} from "react";
import Expo from "expo";
import {Scene, Mesh, MeshBasicMaterial, MeshPhongMaterial, PerspectiveCamera, BoxBufferGeometry, AmbientLight, PointLight, ShadowMaterial } from "three";
import ExpoTHREE, { Renderer } from "expo-three";
import {ExpoWebGLRenderingContext, GLView} from "expo-gl";
import OrbitControlsView from 'expo-three-orbit-controls';
import { render } from "react-dom";

const Home = () => {
    const navigation = useNavigation();    
    
    const [camera, setCamera] = useState();

    let timeout;
  
    useEffect(() => {
      // Clear the animation loop when the component unmounts
      return () => clearTimeout(timeout);
    }, []);
  
    const onContextCreate = async (gl) => {
        const scene = new Scene();
        const camera = new PerspectiveCamera(
            75,
            gl.drawingBufferWidth/gl.drawingBufferHeight,
            0.1,
            1000
        );
        camera.position.set(.5, .5, .5);
        setCamera(camera);

        gl.canvas.setSize = {width: gl.drawingBufferWidth, height: gl.drawingBufferHeight}
        camera.position.z = 2;

        const renderer = new Renderer({gl});
        renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight)

        const geometry = new BoxBufferGeometry(1,1,1);
        const material = new MeshPhongMaterial({
            color: "pink",
            shininess: 100,
            specular: 0x888888,
            emissive: 0x000000
        });

        const ambientLight = new AmbientLight();
        scene.add(ambientLight);

        const pointLight = new PointLight();
        pointLight.position.set(20,2,10);
        scene.add(pointLight);

        const cube = new Mesh(geometry, material);
        cube.castShadow = true;
        scene.add(cube);

        const render = () => {
            requestAnimationFrame(render);
            //cube.rotation.x += 0.01;
            cube.rotation.y += 0.0025;
            renderer.render(scene, camera);
            gl.endFrameEXP();
        }

        render()
    };    
    
    return (
        <ScrollView w={[400, 480, 640]} style={{ overflowx: "hidden" }}>
            <OrbitControlsView style={{ flex: 1 }} camera={camera}>
            <GLView                 
                onContextCreate={onContextCreate}
                style={{width: 640, height: 640, backgroundColor: "transparent" }}
            />
            </OrbitControlsView>


            <Box>                
                <Image size={640} mt={-125} mb={-175} source={ require('../assets/ramen.png') } alt="Bowl of Ramen" />
            </Box>
            <Flex alignItems="center">
                <Center m={4} p={4} px={6} bg={"warmGray.700:alpha.30"} rounded="md">Hello! I'm am app developer based in Richmond, VA!</Center>
            </Flex>

            {/* Header */}
            <HStack p={5} justifyContent={"space-between"}>
                <Container alignSelf={"flex-start"}>
                    <Heading size={"xl"}>Jamie Taylor</Heading>
                    <Text fontSize={"md"}>Solution Architect / Artist / Musician / Cyclist</Text>
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