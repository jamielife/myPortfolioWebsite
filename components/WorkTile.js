import {Text, Image, AspectRatio, Stack, Pressable, Heading } from "native-base";

function WorkTile({data}) {  
    return ( 
        <Pressable mt={5} shadow="2" rounded="lg" w={{ base: 96, md: 72, lg: 48 }} 
            _light={{ bg: "coolGray.50" }} _dark={{ bg: "gray.800" }} overflow={"hidden"}>
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