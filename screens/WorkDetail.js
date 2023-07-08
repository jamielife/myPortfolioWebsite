import {Text, VStack, Image, Stack, Pressable, Heading, ScrollView } from "native-base";
import Bowl from "../components/Bowl";
import Footer from "../components/Footer";

function WorkDetail({data}) {  
    return ( 
        <ScrollView w={[400, 480, 640]} style={{ overflowx: "hidden" }}>
            <Bowl />

            <VStack pb={5} pt={0} mt={-200}  justifyContent={"space-between"}>
                <Heading mt={headings.mt} mb={headings.mb} pb={headings.pb} size={headings.size} borderBottomWidth={headings.bbw} borderBottomColor={headings.bbc} alignSelf={"flex-start"}>
                    Work
                </Heading>
                <Text fontSize={16} textAlign={"justify"}>Hello! My name is Jamie and I'm full stack web and app developer based outta Richmond, VA. In my years in marketing I've worn a lot of hats, including designer, developer, systems engineer, photographer, videogropher, project manager, product manager, and solutions architect and I love every minute of it! When I'm not online, you can find me on my bike, on my drumset, or making something on the stove top.</Text>            
            </VStack>  


            <VStack pb={5} pt={0}   justifyContent={"space-between"}>
                <Heading mt={headings.mt} mb={headings.mb} pb={headings.pb} size={headings.size} borderBottomWidth={headings.bbw} borderBottomColor={headings.bbc} alignSelf={"flex-start"}>
                    Work
                </Heading>
                <Text fontSize={16} textAlign={"justify"}>Hello! My name is Jamie and I'm full stack web and app developer based outta Richmond, VA. In my years in marketing I've worn a lot of hats, including designer, developer, systems engineer, photographer, videogropher, project manager, product manager, and solutions architect and I love every minute of it! When I'm not online, you can find me on my bike, on my drumset, or making something on the stove top.</Text>            
            </VStack>  

            <VStack pb={5} pt={0}  justifyContent={"space-between"}>
                <Heading mt={headings.mt} mb={headings.mb} pb={headings.pb} size={headings.size} borderBottomWidth={headings.bbw} borderBottomColor={headings.bbc} alignSelf={"flex-start"}>
                    Work
                </Heading>
                <Text fontSize={16} textAlign={"justify"}>Hello! My name is Jamie and I'm full stack web and app developer based outta Richmond, VA. In my years in marketing I've worn a lot of hats, including designer, developer, systems engineer, photographer, videogropher, project manager, product manager, and solutions architect and I love every minute of it! When I'm not online, you can find me on my bike, on my drumset, or making something on the stove top.</Text>            
            </VStack>  


            <VStack pb={5} pt={0}  justifyContent={"space-between"}>
                <Heading mt={headings.mt} mb={headings.mb} pb={headings.pb} size={headings.size} borderBottomWidth={headings.bbw} borderBottomColor={headings.bbc} alignSelf={"flex-start"}>
                    Work
                </Heading>
                <Text fontSize={16} textAlign={"justify"}>Hello! My name is Jamie and I'm full stack web and app developer based outta Richmond, VA. In my years in marketing I've worn a lot of hats, including designer, developer, systems engineer, photographer, videogropher, project manager, product manager, and solutions architect and I love every minute of it! When I'm not online, you can find me on my bike, on my drumset, or making something on the stove top.</Text>            
            </VStack>  

            <Footer />

        </ScrollView>
    );
}

export default WorkDetail;

const headings = { mt: 1, mb: 4, pb: 2, size: "md", bbw: 3, bbc: "warmGray.500" }