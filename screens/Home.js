import {Text, View, Image, Button, Link, HStack, Center, Heading, VStack, Box } from "native-base";


export default function Home() {
    return (
        <View w={640} style={{ overflow: "hidden" }}>
            <Box>                
                <Image shadow={2} source={{
                    uri: require('../assets/ramen.png') 
                    }} alt="Bowl of Ramen" size={640} mt={-100} />
            </Box>            
            

            {/* <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()}>Toggle</Button> */}
        </View>
    );
}