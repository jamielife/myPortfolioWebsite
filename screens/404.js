import {Text, VStack, Heading, ScrollView, View } from "native-base";
import Bowl from "../components/Bowl";
import Footer from "../components/Footer";
import { useI18n } from '../components/LangContext';

function WorkDetail({data}) { 
    const i18n = useI18n();
    
    return ( 
        <ScrollView w={"100%"}>
            <View w={[400, 480, 640]} alignSelf={"center"}>

                <Bowl />

                <Flex alignItems="center" mt={-225}>
                    <Center m={4} p={4} px={6} rounded="md" _dark={{ bg: "coolGray.700:alpha.70" }} _light={{ bg: "primary.50:alpha.50" }}>
                    {i18n.t('e404.welcomeBar')}</Center>
                        
                </Flex>

                <VStack space={2} p={5} pt={0}  justifyContent={"space-between"}>
                    <Heading mt={headings.mt} mb={headings.mb} pb={headings.pb} size={headings.size} borderBottomWidth={headings.bbw} borderBottomColor={headings.bbc} alignSelf={"flex-start"} >
                    {i18n.t('e404.pageTitile')}
                        
                    </Heading>

                    <Text fontSize={16} textAlign={"justify"}>{i18n.t('e404.pageContent')}</Text>
                    
                </VStack>
        
                <Footer />

            </View>
        </ScrollView>
    );
}

export default WorkDetail;

const headings = { mt: 1, mb: 4, pb: 2, size: "md", bbw: 3, bbc: "warmGray.500" }