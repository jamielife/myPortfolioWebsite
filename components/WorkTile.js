import { Linking } from "react-native";
import {Text, Image, Stack, Pressable, Heading } from "native-base";
import { useNavigation, CommonActions  } from '@react-navigation/native';
import { useI18n } from '../components/LangContext';

function WorkTile({data, cameFrom}) {
    const navigation = useNavigation(); 
    const i18n = useI18n();

    i18n.translations.en["dyna" + cameFrom + data.id] = data.blurb;
    i18n.translations.en["dyna" + cameFrom + data.id + "name"] = data.name;
    i18n.translations.en["dyna" + cameFrom + data.id + "type"] = data.type;
    i18n.translations.ja["dyna" + cameFrom + data.id] = data.blurb_ja;
    i18n.translations.ja["dyna" + cameFrom + data.id + "name"] = data.name_ja;
    i18n.translations.ja["dyna" + cameFrom + data.id + "type"] = data.type_ja;
    
    return ( 
        <Pressable mt={5} shadow="2" rounded="lg" w={{ base: 96, md: 72, lg: 48 }} 
            _light={{ bg: "coolGray.50" }} _dark={{ bg: "gray.800" }} overflow={"hidden"}            
            onPress={() => {
                if(cameFrom == "Work") navigation.dispatch( CommonActions.navigate({ name: 'WorkDetail', initial: false,  params: { cameFrom: cameFrom, workDetail: data } } ) ) 
                else{ Linking.openURL(data.url) }
            }}
            //onPress={() => navigation.navigate( "WorkDetail", { initial: false, workDetail: data, cameFrom: 'Work' })} 
            >              
              
                <Image w={"100%"} h={110} key={data.id} resizeMode="cover" source={{
                    uri: data.imageFull
                }} alt={data.blurb} />
            <Text bold position="absolute" color="coolGray.50" top="0" m={3} mt={2}>
                {i18n.t("dyna" + cameFrom + data.id + "type").toUpperCase()}
            </Text>                       
            <Stack space="2" p="4">
                {/* <Text color="gray.400">{data.created_at}</Text> */}
                <Heading size={"md"} fontWeight="medium" isTruncated>
                    {i18n.t("dyna" + cameFrom + data.id + "name")}
                </Heading>
                <Text isTruncated color={"coolGray.300"} noOfLines={[2,4,4]}>
                    {i18n.t("dyna" + cameFrom + data.id)}
                </Text>
            </Stack>
        </Pressable>
    );
}

export default WorkTile;