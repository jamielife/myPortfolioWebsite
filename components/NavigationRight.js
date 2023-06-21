import React from "react";
import { IconButton, Icon, Hidden, HStack, useBreakpointValue} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation, DrawerActions } from '@react-navigation/native';
import ToggleDarkmode from './ToggleDarkmode';
import ToggleLanguage from "./ToggleLanguage";

function RightNav() {
    const flexMargin = useBreakpointValue(navMargins);
    const navigation = useNavigation();

    return <>
        <HStack mr={flexMargin}>
            <ToggleDarkmode />
            <ToggleLanguage />
            <Hidden only={['lg', 'xl', '2xl', '3xl']}>
                <IconButton 
                    borderRadius="none" 
                    _hover={{ bg: "primary.700" }} 
                    icon={<Icon as={MaterialIcons} 
                        name="menu" size="xl" color="white" />
                    } 
                    onPress={() => navigation.dispatch(DrawerActions.toggleDrawer()) } 
                />
            </Hidden>
        </HStack>
    </>;
}
  
export default RightNav;