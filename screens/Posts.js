import React, { useEffect, useState, useRef } from "react";
import {Text, Image, FlatList, View, Pressable, Container, Icon, Flex, Avatar, Button, Link, HStack, Center, Heading, VStack, Box, ScrollView, Divider  } from "native-base";
import supabase from "../supabase";
import WorkTile from "../components/WorkTile";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const componentMounted = useRef(true);
    useEffect(() => {
        const fetchPosts = async () => {
            const {data, error} = await supabase.from('posts').select('*').order('featured', {ascending: false}); //.eq('type', '3D')
            if (error) {
                console.log('error', error);
            } else {
                setPosts(data);
            }
        };
        if (componentMounted.current) {
            fetchPosts();
        }

        return () => {
            componentMounted.current = false; 
        };
    }, []);

    console.log(posts);

    return ( 
        <ScrollView h={"100%"} w={[400, 480, 640]} style={{ overflowx: "hidden" }}>
            <Box>                
                <Image size={640} mt={-125} mb={-175} source={ require('../assets/ramen.png') } alt="Bowl of Ramen" />
            </Box>

            <VStack pb={5} pt={0}  justifyContent={"space-between"}>
                <Heading mt={headings.mt} mb={headings.mb} pb={headings.pb} size={headings.size} borderBottomWidth={headings.bbw} borderBottomColor={headings.bbc} alignSelf={"flex-start"}>
                    Featured Posts
                </Heading>
                <Text fontSize={16} textAlign={"justify"}>Latest posts & happenings in my life. </Text>            
            </VStack>      

            {/* Posts Component */}
            <Center>
                <Flex flex={1} flexWrap={"wrap"} flexDirection={"row"} justifyContent={["center", "center", "space-between"]} >
                    {posts.map((post, index) => (  
                        <WorkTile key={post.id} data={post} />
                    ))}
                </Flex>
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
 
export default Posts;

//Styles
const headings = { mt: 1, mb: 4, pb: 2, size: "md", bbw: 3, bbc: "warmGray.500" }
