import React, { useEffect, useState, useRef } from "react";
import { Text, Flex, Button, Center, Heading, VStack, ScrollView, ChevronRightIcon } from "native-base";
import supabase from "../supabase";
import WorkTile from "../components/WorkTile";
import Bowl from "../components/Bowl";
import Footer from "../components/Footer";

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

    return ( 
        <ScrollView h={"100%"} w={[400, 480, 640]} style={{ overflowx: "hidden" }}>
            <Bowl />
            <VStack pb={5} pt={0} mt={-200} justifyContent={"space-between"}>
                <Heading mt={headings.mt} mb={headings.mb} pb={headings.pb} size={headings.size} borderBottomWidth={headings.bbw} borderBottomColor={headings.bbc} alignSelf={"flex-start"}>
                    Posts
                </Heading>
                <Text fontSize={16} textAlign={"justify"}>Latest posts & happenings in my life. </Text>            
            </VStack>      

            {/* Posts Component */}
            <Center>
                <Flex flex={1} flexWrap={"wrap"} flexDirection={"row"} justifyContent={["center", "center", "space-between"]} >
                    {posts.map((post, index) => (  
                        <WorkTile key={post.id} data={post} cameFrom="Posts" />
                    ))}
                </Flex>
            </Center>

            <Center>
                <Button mt={12} alignSelf="center" onPress={() => navigation.dispatch( CommonActions.navigate({ name: 'Work',  params: { cameFrom: 'Home' } } ) ) } >
                    <Text color={"white"}>Check out my resume <ChevronRightIcon size="xs" color="white" /></Text>
                </Button>
            </Center>

            <Footer />

        </ScrollView>
    );
}
 
export default Posts;

//Styles
const headings = { mt: 1, mb: 4, pb: 2, size: "md", bbw: 3, bbc: "warmGray.500" }
