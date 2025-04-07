# App status
**Android** [![Build and Publish Android APK](https://github.com/chauhaidang/xq-mobile-app/actions/workflows/android.yaml/badge.svg?branch=main)](https://github.com/chauhaidang/xq-mobile-app/actions/workflows/android.yaml)

**iOS** [![Build and Publish iOS APP](https://github.com/chauhaidang/xq-mobile-app/actions/workflows/ios.yaml/badge.svg?branch=main)](https://github.com/chauhaidang/xq-mobile-app/actions/workflows/ios.yaml)


## ONBOARDING

### Development setup?
* NodeJS 18
* MacOS
* Xcode
* Android Studio

### Start app locally
1. Clone the repo
2. Run `npm i`
3. Make sure iOS simulator or Android Emulator opened
4. Run `npm run ios` for iOS or `npm run android` for Android

### Build using eas-cli

`eas login`

`yarn install`

`eas build -p <platform> --profile snapshot`

### Build using manual expo-cli

`npm i`

`npm run bap` or `npm run bip`

_Android build_:

`npm run ba`

_iOS build_:

`npm run bi`