import 'react-native-gesture-handler';
import { StyleSheet, StatusBar } from 'react-native';
import {Text, View, Button, Link, HStack, Center, Heading, Switch, useColorMode, NativeBaseProvider, extendTheme, VStack, Box, useColorModeValue } from "native-base";
import Work from './screens/Work';
import Home from './screens/Home';
//import Appbar from "./components/Appbar";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem, DrawerToggleButton  } from '@react-navigation/drawer';
import { BlurView } from 'expo-blur';
import LeftNav from './components/NavigationLeft';
import RightNav from './components/NavigationRight';

//global.intro = "Hello! I'm am app developer based in Richmond, VA!";
global.navMargins = { base: 2, sm: 8,  md: 12, lg: 32, xl: 64 };

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
  background: 'transparent'
};

const colors = {
  primary: {
    50: '#ddf8ff',
    100: '#b5e6fb',
    200: '#89d4f4',
    300: '#5dc2ee',
    400: '#35b1e9',
    500: '#1e98cf',
    600: '#1176a2',
    700: '#045475',
    800: '#003448',
    900: '#00131d',
   }
}

// extend the theme
export const theme = extendTheme({ config, colors });



function HomeDrawer() {
  return (
    <View  alignItems="center" _dark={{ bg: "trueGray.900" }} _light={{ bg: "primary.50" }} flexWrap={"wrap"}>
      <Home />
      <HStack bg="primary.800:alpha.30" w="100%" m={-20}>test</HStack>
    </View>
  );
}

function Notifications() {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications Screen</Text>
    </View>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Close drawer"  onPress={() => props.navigation.closeDrawer()} />
      <DrawerItem label="Toggle drawer" onPress={() => props.navigation.toggleDrawer()} />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function DrawerMenu({colors}) {
  const bg = useColorModeValue("#fdead4", "#045475");  

  return (
    <Drawer.Navigator bg={bg} 
            useLegacyImplementation 
            screenOptions={{
              headerShown: true,
              //drawerActiveBackgroundColor: bg,
              //drawerInactiveBackgroundColor: bg,
              overlayColor: 'transparent',              
              drawerPosition: 'right',
              drawerStyle: {
                backgroundColor: bg,
              },
              headerStyle: {
              }              
            }}      
            drawerContent={(props) => <CustomDrawerContent {...props} />} 
            _dark={{ bg: "blueGray.800" }}
            _light={{ bg: "blueGray.200" }}            
            >
        <Drawer.Screen 
            name="Home" 
            component={HomeDrawer} 
            options={{
                headerTransparent: true,
                headerBackground: () => (
                  <BlurView tint="dark" intensity={30} style={StyleSheet.absoluteFill} />
                ),
                headerLeft: (props) => (
                  <LeftNav />                  
                ),
                headerRight: (props) => (
                  <RightNav />                  
                ),
                headerTitle: "",
            }}            
        />
        <Drawer.Screen name="Notifications" component={Notifications} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <StatusBar backgroundColor="rgb(0, 52, 72)" barStyle="light-csontent" hidden={false} />
        <DrawerMenu />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}