import {Text, Link, HStack, Center, Heading, Switch, useColorMode, NativeBaseProvider, extendTheme, VStack, Box } from "native-base";
import NativeBaseIcon from "./components/NativeBaseIcon";
import { Platform, LogBox } from "react-native";
import Work from './screens/Work';
import Appbar from "./components/Appbar";

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

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <Appbar />
      <Center
        _dark={{ bg: "trueGray.900" }}
        _light={{ bg: "primary.50" }}
        px={4}
        flex={1}
      >
        <VStack space={5} alignItems="center" flex={1}>
          <NativeBaseIcon />
          <Heading size="lg">Jamie Taylor's Portfolio</Heading>
          <HStack space={2} alignItems="center">
            <Text>Edit</Text>
            <Box
              _web={{
                _text: {
                  fontFamily: "monospace",
                  fontSize: "sm",
                },
              }}
              px={2}
              py={1}
              _dark={{ bg: "blueGray.800" }}
              _light={{ bg: "blueGray.200" }}
            >
              App.js
            </Box>
            <Text>and save to reload.</Text>
          </HStack>
          <Link href="https://docs.nativebase.io" isExternal>
            <Text color="primary.500" underline fontSize={"xl"}>
              Learn NativeBase
            </Text>
          </Link>
          <ToggleDarkMode />
          <Work />
        </VStack>
      </Center>
    </NativeBaseProvider>
  );
}

// Color Switch Component
function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === "light"}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === "light" ? "switch to dark mode" : "switch to light mode"
        }
      />
      <Text>Light</Text>
    </HStack>
  );
}
