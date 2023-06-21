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
 - https://docs.expo.dev/versions/latest/sdk/reanimated/#installation

## To do
 - Theming
   - https://docs.nativebase.io/default-theme
   - https://smart-swatch.netlify.app/#64c5ef
 - Index "page"
   - Nav, logo, profile, stats, socials?, featured/latest projects
   - https://reactnavigation.org/ && https://docs.nativebase.io/building-drawer-navigation
 - Persisting color mode - https://docs.nativebase.io/color-mode#h2-persisting-the-color-mode 
 - Firebase for page content https://docs.expo.dev/guides/using-firebase/ 
 - Works "page"
   - All work, categorized by type?
 - 3D Logo
 - Page animations https://moti.fyi/
 - Icons - https://mui.com/material-ui/material-icons/ | https://github.com/expo/vector-icons / https://icons.expo.fyi/
 - metadata, seo, headers, etc. 
