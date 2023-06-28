# myPortfolioWebsite

## Install
```sh
npx create-expo-app portfolio --template @native-base/expo-template --npm
npm install @supabase/supabase-js
npm install @supabase/supabase-react-native
```

## Gotchas
 - Project foldername of length over 12(ish) causes issue with Expo. 
 - Bug in node_module *react-native-url-polyfill* requires change to index.js
```
5: const packageObj = require('./package.json');
6: const name = packageObj.name;
7: const version = packageObj.version;
```

 - Inverse to Invert fix...

 - https://docs.expo.dev/versions/latest/sdk/reanimated/#installation
 \react-native-reanimated\lib\reanimated1\core\AnimatedNode.js code change for web (https://github.com/software-mansion/react-native-reanimated/issues/3156)