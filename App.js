import 'react-native-gesture-handler';
import { StyleSheet, StatusBar, Linking, Animated } from 'react-native';
import * as React from 'react';
import { View, NativeBaseProvider, extendTheme, useColorModeValue, ColorMode, StorageManager } from "native-base";
import { NavigationContainer, useFocusEffect } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem  } from '@react-navigation/drawer';
import { BlurView } from 'expo-blur';

import Home     from './screens/Home';
import Work     from './screens/Work';
import Posts    from './screens/Posts';
import LeftNav  from './components/NavigationLeft';
import RightNav from './components/NavigationRight';
import WorkDetail from './screens/WorkDetail';

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
    900: '#171717',
   }
}

export const theme = extendTheme({ config, colors });

const colorModeManager = {
  get: async () => {
    let val = localStorage.getItem('@color-mode');
    if (val === null) val = 'dark'; 
    return val === 'dark' ? 'dark' : 'light';
  },
  set: async (value) => {
    let strValue = value ? value.toString() : '';
    localStorage.setItem('@color-mode', strValue);
  },
};

/* Fix
{
  50: '#ffe2e7',
  100: '#ffb3bb',
  200: '#fc8393',
  300: '#f9526d',
  400: '#f6224b',
  500: '#dd0939',
  600: '#ad0320',
  700: '#7c000e',
  800: '#4d0002',
  900: '#200400',
} */

function HomeDrawer() {
  return (
    <View alignItems="center" _dark={{ bg: "trueGray.900" }} _light={{ bg: "primary.50" }} flex={1}>
      <Home />
    </View>
  );
}

function WorkDrawer() {
  return (
    <View alignItems="center" _dark={{ bg: "trueGray.900" }} _light={{ bg: "primary.50" }} flex={1}>
      <Work />   
    </View>
  );
}

function WorkDetailDrawer({route}) {
  return (
    <View alignItems="center" _dark={{ bg: "trueGray.900" }} _light={{ bg: "primary.50" }} flex={1}>
      <WorkDetail data={route} key={route.key} />   
    </View>
  );
}

function PostsDrawer() {
  return (
    <View alignItems="center" _dark={{ bg: "trueGray.900" }} _light={{ bg: "primary.50" }} flex={1}>
      <Posts />
    </View>
  );
}

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const customDrawOptions = {
  headerTransparent: true,
  headerBackground: () => ( <BlurView tint={useColorModeValue("light", "dark")} intensity={30} style={StyleSheet.absoluteFill} /> ),
  headerLeft: (props)  => ( <LeftNav /> ),
  headerRight: (props) => (<RightNav /> ),
  headerTitle: "",
  headerBlurEffect: "regular",
  headerTransparent: true
}  

function CustomDrawerContent(props) {
  const bg = useColorModeValue(colors.primary[50], colors.primary[900]);
  const text = useColorModeValue(colors.primary[900], colors.primary[50]);  

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Resume" inactiveTintColor={ text } onPress={ ()=>{ Linking.openURL('https://htmyell.com')} } />
      <DrawerItem label="Close drawer" inactiveTintColor={ text } onPress={() => props.navigation.closeDrawer()} />
      <DrawerItem label="Icon={({ focused, color, size }) => <Icon color={color} size={size} name={focused ? 'heart' : 'heart-outline'} />}"  
                  inactiveTintColor={ text } onPress={() => props.navigation.closeDrawer()} />
    </DrawerContentScrollView>
  );
}

function DrawerMenu({colors}) {
const bg = useColorModeValue(colors.primary[50], colors.primary[900]);
const text = useColorModeValue(colors.primary[900], colors.primary[50]);
  return (
    <Drawer.Navigator 
      useLegacyImplementation 
      screenOptions={{
        headerShown: true, 
        drawerPosition: 'right',
        overlayColor: 'rgba(0,0,0,.5)',              
        drawerActiveTintColor: text,
        drawerInactiveTintColor: text,
        drawerStyle: { backgroundColor: bg, },        
      }}      
      drawerContent={(props) => <CustomDrawerContent {...props} />} >
        <Drawer.Screen name="Home"  component={HomeDrawer}  options={customDrawOptions} />
        <Drawer.Screen name="Work"  component={WorkMenu}    options={customDrawOptions} />
        <Drawer.Screen name="Posts" component={PostsDrawer} options={customDrawOptions} />         
    </Drawer.Navigator>
  );
}

function WorkMenu(){
  const bg = useColorModeValue(colors.primary[50], colors.primary[900]);
  const text = useColorModeValue(colors.primary[900], colors.primary[50]);
  return (
    <Stack.Navigator initialRouteName="WorkOverview" 
      useLegacyImplementation
      screenOptions={{
        headerShown: true, 
        drawerPosition: 'right',
        overlayColor: 'rgba(0,0,0,.5)',              
        drawerActiveTintColor: text,
        drawerInactiveTintColor: text,
        drawerStyle: { backgroundColor: bg, },        
      }} >
      <Stack.Screen name="WorkOverview" component={WorkDrawer}       options={{ headerShown: false }} />
      <Stack.Screen name="WorkDetail"   component={WorkDetailDrawer} options={{ headerShown: false }} />
    </Stack.Navigator>  
  );
}

//onStateChange={(state) => console.log('New state is', state)}

export default function App() {
  return (
    <NativeBaseProvider colorModeManager={colorModeManager} theme={theme} flex={1} >
      <NavigationContainer flex={1}>
        <StatusBar backgroundColor="rgb(0, 52, 72)" barStyle="light-csontent" hidden={false} />
        <DrawerMenu colors={colors} />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}