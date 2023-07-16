import React, { useEffect, useState, useRef } from "react";
import { Text, Flex, Button, Center, Heading, VStack, ScrollView, ChevronRightIcon, View } from "native-base";
import { Linking } from "react-native";
import supabase from "../supabase";
import WorkTile from "../components/WorkTile";
import Bowl from "../components/Bowl";
import Footer from "../components/Footer";
import { useI18n } from '../components/LangContext';
import { FBAalytics } from '../firebaseConfig';
import { logEvent } from "firebase/analytics";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const componentMounted = useRef(true);    
    const i18n = useI18n();

    useEffect(() => {
        const fetchPosts = async () => {
            const {data, error} = await supabase.from('posts').select('*').order('featured', {ascending: false}).eq('hidden', false);
            
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

    const handleButtonClick = async (url, event_name) => {
        Linking.openURL(url);        
        await logEvent(FBAalytics, event_name, {
          // event parameters
          location: "sidebar",
        });
    };    

    return ( 
        <ScrollView w={"100%"}>
            <View w={[400, "100%", 640]} alignSelf={"center"}>
                <Bowl />
                <VStack p={5} pb={5} pt={0} mt={[-130, -130, -200]} justifyContent={"space-between"}>
                    <Heading mt={headings.mt} mb={headings.mb} pb={headings.pb} size={headings.size} borderBottomWidth={headings.bbw} borderBottomColor={headings.bbc} alignSelf={"flex-start"}>
                        {i18n.t('posts')}
                    </Heading>
                    <Text fontSize={16} textAlign={"justify"}>{i18n.t('postsPage.postsIntro')}</Text>            
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
                    <Button mt={12} alignSelf="center" onPress={() => handleButtonClick('https://jamietaylor.me/resume-jamie-taylor.pdf', "resume_opened") } >
                        <Text color={"white"}>{i18n.t('postsPage.resumeCTA')} <ChevronRightIcon size="xs" color="white" /></Text>
                    </Button>
                </Center>

                <Footer />
            </View>
        </ScrollView>
    );
}
 
export default Posts;

//Styles
const headings = { mt: 1, mb: 4, pb: 2, size: "md", bbw: 3, bbc: "warmGray.500" }
