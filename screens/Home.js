import {Text, Container, View, Image, Flex, Button, Link, HStack, Center, Heading, VStack, Box, Stack } from "native-base";

export default function Home() {
    return (
        <View w={[480, 480, 640]} style={{ overflowx: "hidden" }}>
            <Box>                
                <Image source={{
                    uri: require('../assets/ramen.png') 
                    }} alt="Bowl of Ramen" size={640} mt={-125} mb={-175} />
            </Box>
            <Flex alignItems="center">
                <Center m={4} p={4} px={6} bg={"warmGray.700:alpha.30"} rounded="md">Hello! I'm am app developer based in Richmond, VA!</Center>
            </Flex>
            <Container></Container>
            <HStack space={3} justifyContent="center">
                <Center h="40" w="20" bg="primary.300" rounded="md" shadow={3} />
                <Center h="40" w="20" bg="primary.500" rounded="md" shadow={3} />
                <Center h="40" w="20" bg="primary.700" rounded="md" shadow={3} />
            </HStack>
            <Stack flexWrap={"wrap"}  
                space={3} justifyContent={"space-between"} 
                direction={"row"}
                >
                <Center h="40" width={["72", "40", "40"]} bg="primary.300" rounded="md" shadow={3} />
                <Center h="40" width={["72", "40", "40"]} bg="primary.500" rounded="md" shadow={3} />
                <Center h="40" width={["72", "40", "40"]} bg="primary.700" rounded="md" shadow={3} />            
            </Stack>
            {/* <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()}>Toggle</Button> */}
        </View>
    );
}