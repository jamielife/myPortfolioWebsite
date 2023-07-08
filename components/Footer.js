import { Text, Center } from "native-base";

function Footer(){
    return(
        <Center mt={8} mb={6}><Text fontSize={12} color={"warmGray.500"}>© {new Date().getFullYear()} Jamie Taylor. All rights reserved.</Text></Center>
    );
}

export default Footer; 