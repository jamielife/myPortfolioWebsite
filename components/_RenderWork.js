import {Text, Image, FlatList, AspectRatio, Stack, View, Pressable, Container, Icon, Flex, Avatar, Button, Link, HStack, Center, Heading, VStack, Box, ScrollView, Divider  } from "native-base";

function RenderWork({data}) {      
    
    const renderItems = () => {        

        return data.map((data, index) => {
            const imageFull = data.imageFull;
            
                return <>
                
                    <Pressable  key={data.id} shadow="2" rounded="lg" w={{ base: "120px", md: 50, lg: 48 }} 
                        _light={{ bg: "coolGray.50" }} _dark={{ bg: "gray.800" }} overflow={"hidden"}>

                        <AspectRatio 
                            ratio= {{ 
                                base: 16/9,
                                md: 16/9
                            }} height= {{
                                base: 20,
                                md: 20
                            }}>

                            <Image resizeMode="cover" source={{
                                uri: imageFull
                            }} alt="Alternate Text" />

                        </AspectRatio>

                        <Text bold position="absolute" color="coolGray.50" top="0" m="4">
                            {data.type.toUpperCase()}
                        </Text>    

                        <Stack space="2" p="4">
                            <Text color="gray.400">{data.created_at}</Text>
                            <Heading size={"md"} fontWeight="medium" isTruncated>
                                {data.name}
                            </Heading>
                            <Text isTruncated noOfLines={[2,4,4]}>                
                                {data.blurb}
                            </Text>
                        </Stack>
                    
                    </Pressable>

                </>


        });
        
    };    
    
    return <HStack space={3} flex={1} flexWrap={"wrap"} justifyContent={"space-evenly"}>{renderItems()}</HStack>;
}

export default RenderWork;