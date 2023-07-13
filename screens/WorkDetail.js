import {Text, VStack, Link, Image, Button, ChevronRightIcon, ChevronLeftIcon, Heading, ScrollView, useColorModeValue, View } from "native-base";
import { useNavigation, CommonActions } from '@react-navigation/native';
import Bowl from "../components/Bowl";
import Footer from "../components/Footer";
import { useI18n } from '../components/LangContext';

function WorkDetail({data}) { 
    const { cameFrom, workDetail } = data.params;
    const navigation = useNavigation(); 
    const iconColor = useColorModeValue("black", "white");
    const i18n = useI18n();

    let date = new Date(workDetail.created_at);    
    let dateCreated = new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(date); 

    i18n.translations.en["dyna" + cameFrom + workDetail.id + "description"] = workDetail.description;    
    i18n.translations.ja["dyna" + cameFrom + workDetail.id + "description"] = workDetail.description_ja;    

    console.log(i18n.translations);

    return ( 
        <ScrollView w={"100%"}>
            <View w={[400, "100%", 640]} alignSelf={"center"}>
                <Bowl />
                <VStack p={5} pb={5} pt={0} mt={[-130, -130, -200]} justifyContent={"space-between"}>
                    <Heading mt={headings.mt} mb={headings.mb} pb={headings.pb} size={headings.size} borderBottomWidth={headings.bbw} borderBottomColor={headings.bbc} alignSelf={"flex-start"}>
                        {/* <Link to={{ screen: cameFrom }}>{cameFrom}</Link>  */}
                        <Link isUnderlined={false} onPress={() => navigation.dispatch( CommonActions.goBack() )}>
                            <Text fontSize={16} fontWeight={500}>
                            {cameFrom !== 'work' ? ( i18n.t('work') ) : i18n.t('posts')} <ChevronRightIcon size="xs" color={iconColor} /> </Text> {i18n.t("dyna" + cameFrom + workDetail.id+"name")}
                        </Link>
                    </Heading>
                    <Text fontSize={12} textAlign={"justify"}>{i18n.t('workDetailsPage.dateTitle')}: {dateCreated}</Text>              
                </VStack>  

                <VStack  p={5} pb={5} pt={0}   justifyContent={"space-between"}>                
                    <Text fontSize={16} textAlign={"justify"}>{i18n.t("dyna" + cameFrom + workDetail.id+"description")}</Text>         
                </VStack>  

                <VStack  p={5} pb={5} pt={0}  justifyContent={"space-between"}>
                    <Text fontSize={16} textAlign={"justify"}>
                        <Image w={640} height={200} source={{
                            uri: workDetail.imageFull
                        }} alt={i18n.t("dyna" + cameFrom + workDetail.id)} />    
                    </Text>   
                </VStack>  

                <VStack  p={5} pb={5} pt={0}  justifyContent={"space-between"}>
                    
                    {workDetail.url !== null ? <Text fontSize={16} textAlign={"justify"}>{i18n.t('workDetailsPage.openURLCTA')} - <Link 
                            _text={{ _light:{ color: "primary.600" }, _dark: { color: "primary.300" }}}
                            _hover={{ _text:{ _light: { color: "primary.400" }, _dark: { color: "primary.100" }, textDecoration: "none" } }}
                            href={workDetail.url} isExternal>{workDetail.url}</Link></Text> : null }

                    <Button my={3} alignSelf="center" color="white" onPress={() => navigation.dispatch( CommonActions.goBack() )} >
                        <Text color="white" ><ChevronLeftIcon size="xs" color="white" /> {i18n.t('workDetailsPage.backCTA')}</Text>                        
                    </Button>

                </VStack>  

                <Footer />
            </View>
        </ScrollView>
    );
}

export default WorkDetail;

const headings = { mt: 1, mb: 4, pb: 2, size: "md", bbw: 3, bbc: "warmGray.500" }