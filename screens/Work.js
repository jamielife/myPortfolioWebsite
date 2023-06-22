import React, { useEffect, useState, useRef } from "react";
import {Text, Image, FlatList, View, Pressable, Container, Icon, Flex, Avatar, Button, Link, HStack, Center, Heading, VStack, Box, ScrollView, Divider  } from "native-base";
import supabase from "../supabase";
import WorkTile from "../components/WorkTile";

const Work = () => {
    const [works, setWork] = useState([]);
    const componentMounted = useRef(true);
    useEffect(() => {
        const fetchWork = async () => {
            const {data, error} = await supabase.from('work').select('*').order('featured', {ascending: false}); //.eq('type', '3D')
            if (error) {
                console.log('error', error);
            } else {
                setWork(data);
            }
        };
        if (componentMounted.current) {
            fetchWork();
        }

        return () => {
            componentMounted.current = false; 
        };
    }, []);

    console.log(works);

    return ( 
        <ScrollView flex={1} w={[400, 480, 640]} style={{ overflowx: "hidden" }}>
            <Box>                
                <Image size={640} mt={-125} mb={-175} source={ require('../assets/ramen.png') } alt="Bowl of Ramen" />
            </Box>

            <VStack pb={5} pt={0}  justifyContent={"space-between"}>
                <Heading mt={headings.mt} mb={headings.mb} pb={headings.pb} size={headings.size} borderBottomWidth={headings.bbw} borderBottomColor={headings.bbc} alignSelf={"flex-start"}>
                    Work
                </Heading>
                <Text fontSize={16} textAlign={"justify"}>Hello! My name is Jamie and I'm full stack web and app developer based outta Richmond, VA. In my years in marketing I've worn a lot of hats, including designer, developer, systems engineer, photographer, videogropher, project manager, product manager, and solutions architect and I love every minute of it! When I'm not online, you can find me on my bike, on my drumset, or making something on the stove top.</Text>            
            </VStack>      

            {/* Work Component */}
            <Center>
                <HStack flex={1} flexWrap={"wrap"} flexDirection={"row"} justifyContent={["center", "center", "space-between"]} >
                    {works.map((work, index) => (  
                        <WorkTile key={work.id} data={work} />
                    ))}
                </HStack>
            </Center>

            <Center>
                <Button mt={12} alignSelf="center" onPress={() => navigation.dispatch( CommonActions.navigate({ name: 'Work',  params: { cameFrom: 'Home' } } ) ) } >
                    Check out my resume ---
                </Button>
            </Center>

            <Center mt={8} mb={6}><Text fontSize={12} color={"warmGray.500"}>© {new Date().getFullYear()} Jamie Taylor. All rights reserved.</Text></Center>

        </ScrollView>
    );
}
 
export default Work;

//Styles
const headings = { mt: 1, mb: 4, pb: 2, size: "md", bbw: 3, bbc: "warmGray.500" }
