import { Linking } from "react-native";
import {Text, Image, Stack, Pressable, Heading } from "native-base";
import { useNavigation, CommonActions  } from '@react-navigation/native';

function WorkTile({data, cameFrom}) {
    const navigation = useNavigation(); 
    
    return ( 
        <Pressable mt={5} shadow="2" rounded="lg" w={{ base: 96, md: 72, lg: 48 }} 
            _light={{ bg: "coolGray.50" }} _dark={{ bg: "gray.800" }} overflow={"hidden"}            
            onPress={() => {
                if(cameFrom == "Work") navigation.dispatch( CommonActions.navigate({ name: 'WorkDetail', initial: false,  params: { cameFrom: cameFrom, workDetail: data } } ) ) 
                else{ Linking.openURL(data.url) }
            }}
            //onPress={() => navigation.navigate( "WorkDetail", { initial: false, workDetail: data, cameFrom: 'Work' })} 
            >              
              
                <Image w={200} h={110} key={data.id} resizeMode="cover" source={{
                    uri: data.imageFull
                }} alt={data.blurb} />
            <Text bold position="absolute" color="coolGray.50" top="0" m={3} mt={2}>
                {data.type.toUpperCase()}
            </Text>                       
            <Stack space="2" p="4">
                {/* <Text color="gray.400">{data.created_at}</Text> */}
                <Heading size={"md"} fontWeight="medium" isTruncated>
                    {data.name}
                </Heading>
                <Text isTruncated noOfLines={[2,4,4]}>
                    {data.blurb}
                </Text>
            </Stack>
        </Pressable>
    );
}

export default WorkTile;