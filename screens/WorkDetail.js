import {Text, VStack, Link, Image, Button, ChevronRightIcon, ChevronLeftIcon, Heading, ScrollView, useColorModeValue, View } from "native-base";
import { useNavigation, CommonActions } from '@react-navigation/native';
import Bowl from "../components/Bowl";
import Footer from "../components/Footer";

function WorkDetail({data}) { 
    const { cameFrom, workDetail } = data.params;
    const navigation = useNavigation(); 
    const iconColor = useColorModeValue("black", "white");    
    console.log(cameFrom);
    console.log(workDetail);

    let date = new Date(workDetail.created_at);    
    let dateCreated = new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(date); 

    return ( 
        <ScrollView w={"100%"}>
            <View w={[400, 480, 640]} alignSelf={"center"}>
                <Bowl />

                <VStack pb={5} pt={0} mt={-200}  justifyContent={"space-between"}>
                    <Heading mt={headings.mt} mb={headings.mb} pb={headings.pb} size={headings.size} borderBottomWidth={headings.bbw} borderBottomColor={headings.bbc} alignSelf={"flex-start"}>
                        {/* <Link to={{ screen: cameFrom }}>{cameFrom}</Link>  */}
                        <Link isUnderlined={false} onPress={() => navigation.dispatch( CommonActions.goBack() )}>
                            <Text fontSize={16} fontWeight={500}>{cameFrom}  <ChevronRightIcon size="xs" color={iconColor} /> </Text> {workDetail.name}
                        </Link>
                    </Heading>
                    <Text fontSize={12} textAlign={"justify"}>Date: {dateCreated}</Text>              
                </VStack>  

                <VStack pb={5} pt={0}   justifyContent={"space-between"}>                
                    <Text fontSize={16} textAlign={"justify"}>{workDetail.description}</Text>         
                </VStack>  

                <VStack pb={5} pt={0}  justifyContent={"space-between"}>
                    <Text fontSize={16} textAlign={"justify"}>
                        <Image w={640} height={200} source={{
                            uri: workDetail.imageFull
                        }} alt={workDetail.blurb} />    
                    </Text>   
                </VStack>  


                <VStack pb={5} pt={0}  justifyContent={"space-between"}>
                    
                    {workDetail.url !== null ? <Text fontSize={16} textAlign={"justify"}>Check it out - <Link href={workDetail.url} isExternal>{workDetail.url}</Link></Text> : null }

                    <Button my={3} alignSelf="center"  onPress={() => navigation.dispatch( CommonActions.goBack() )} >
                        <Text><ChevronLeftIcon size="xs" color="white" /> Back to {cameFrom} </Text>
                    </Button>

                </VStack>  

                <Footer />
            </View>
        </ScrollView>
    );
}

export default WorkDetail;

const headings = { mt: 1, mb: 4, pb: 2, size: "md", bbw: 3, bbc: "warmGray.500" }