import 'react-native-gesture-handler';
import {Text, View, Button, Link, HStack, Center, Heading, Switch, useColorMode, NativeBaseProvider, extendTheme, VStack, Box, useColorModeValue } from "native-base";
import Work from './screens/Work';
import Appbar from "./components/Appbar";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem, DrawerToggleButton  } from '@react-navigation/drawer';

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
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



function Home({ navigation }) {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1,  }} _dark={{ bg: "trueGray.900" }} _light={{ bg: "primary.200" }} >    
      <Text>Home Screen</Text>
      <Button title="Open drawer" onPress={() => navigation.openDrawer()}>Open</Button>
      <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()}>Toggle</Button>
    </View >
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

function MyDrawer({colors}) {
  const bg = useColorModeValue("#fdead4", "#045475");  

  return (
    <Drawer.Navigator bg={bg} 
            useLegacyImplementation 
            screenOptions={{
              headerShown: false,
              //drawerActiveBackgroundColor: bg,
              overlayColor: 'transparent',              
              drawerPosition: 'right',
              drawerStyle: {
                backgroundColor: bg,
              }              
            }}      
            drawerContent={(props) => <CustomDrawerContent {...props} />} 
            _dark={{ bg: "blueGray.800" }}
            _light={{ bg: "blueGray.200" }}            
            >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Notifications" component={Notifications} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>     
        <Appbar />
        <MyDrawer />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}