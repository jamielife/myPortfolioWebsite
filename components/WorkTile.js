import {Text, AspectRatio, Stack, Pressable, Heading } from "native-base";
import { Image } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState} from "react";

function WorkTile({data}) {  
    //console.warn(data)    

    const setData = (id, value) => {
        AsyncStorage.setItem(id, value, () => {
            //console.warn(id + " + " + value + " set!")
        })
    }
    
    const getData = (id) => {
        AsyncStorage.getItem(id).then(storage => {
            //console.warn(storage)
        }).catch(e => console.warn(e))
    }
    
    const response = Image.prefetch(data.imageFull,()=>console.log('Image is being fetched')).then(   );

    return ( 
        <Pressable mt={5} shadow="2" rounded="lg" w={{ base: 96, md: 72, lg: 48 }} 
            _light={{ bg: "coolGray.50" }} _dark={{ bg: "gray.800" }} overflow={"hidden"}>
            <AspectRatio 
                ratio= {{ 
                    base: 16/9,
                    md: 16/9
                }} height= {{
                    base: 20,
                    md: 20
                }} >
                <Image key={data.id} prefetch resizeMode="cover" source={{
                    uri: data.imageFull
                }} alt={data.blurb} />
            </AspectRatio>
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