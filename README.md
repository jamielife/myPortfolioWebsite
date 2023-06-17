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

## To do
 - Index "page"
   - Nav, logo, profile, stats, socials?, featured/latest projects
   - https://reactnavigation.org/
 - Firebase for page content https://docs.expo.dev/guides/using-firebase/ 
 - Works "page"
   - All work, categorized by type?
 - 3D Logo
 - Page animations https://moti.fyi/
