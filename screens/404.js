import {Text, VStack, Heading, ScrollView, View } from "native-base";
import Bowl from "../components/Bowl";
import Footer from "../components/Footer";

function WorkDetail({data}) { 

    return ( 
        <ScrollView w={"100%"}>
            <View w={[400, 480, 640]} alignSelf={"center"}>

                <Bowl />

                <Flex alignItems="center" mt={-225}>
                    <Center m={4} p={4} px={6} rounded="md" _dark={{ bg: "coolGray.700:alpha.70" }} _light={{ bg: "primary.50:alpha.50" }}>
                        Something went wrong!</Center>
                </Flex>

                <VStack space={2} p={5} pt={0}  justifyContent={"space-between"}>
                    <Heading mt={headings.mt} mb={headings.mb} pb={headings.pb} size={headings.size} borderBottomWidth={headings.bbw} borderBottomColor={headings.bbc} alignSelf={"flex-start"} >
                        Error
                    </Heading>

                    <Text fontSize={16} textAlign={"justify"}>Sorry, the page your looking for doesn't exist.</Text>

                </VStack>
        
                <Footer />

            </View>
        </ScrollView>
    );
}

export default WorkDetail;

const headings = { mt: 1, mb: 4, pb: 2, size: "md", bbw: 3, bbc: "warmGray.500" }