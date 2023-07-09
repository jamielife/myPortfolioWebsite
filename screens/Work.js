import React, { useEffect, useState, useRef } from "react";
import { Text, Flex, Button, Center, Heading, VStack, ScrollView, ChevronRightIcon } from "native-base";
import supabase from "../supabase";
import WorkTile from "../components/WorkTile";
import Bowl from "../components/Bowl";
import Footer from "../components/Footer";

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

    return ( 
        <ScrollView h={"100%"} w={[400, 480, 640]} style={{ overflowx: "hidden" }}>
            <Bowl />
            <VStack pb={5} pt={0} mt={-200}  justifyContent={"space-between"}>
                <Heading mt={headings.mt} mb={headings.mb} pb={headings.pb} size={headings.size} borderBottomWidth={headings.bbw} borderBottomColor={headings.bbc} alignSelf={"flex-start"}>
                    Work
                </Heading>
                <Text fontSize={16} textAlign={"justify"}>Featured work, personal projects, and other such spectacles.</Text>
            </VStack>      

            {/* Work Component */}
            <Center>
                <Flex flex={1} flexWrap={"wrap"} flexDirection={"row"} justifyContent={["center", "center", "space-between"]} >
                    {works.map((work, index) => (  
                        <WorkTile key={work.id} data={work} cameFrom="Work" />
                    ))}
                </Flex>
            </Center>

            <Center>
                <Button mt={12} alignSelf="center" onPress={() => navigation.dispatch( CommonActions.navigate({ name: 'Work',  params: { cameFrom: 'Work' } } ) ) } >
                    <Text>Check out my resume <ChevronRightIcon size="xs" color="white" /></Text>
                </Button>
            </Center>

            <Footer />

        </ScrollView>
    );
}
 
export default Work;

//Styles
const headings = { mt: 1, mb: 4, pb: 2, size: "md", bbw: 3, bbc: "warmGray.500" }
