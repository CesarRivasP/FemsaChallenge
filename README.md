# Femsa Challenge App

## Run the app through the Expo Go app
You can download the app and install it on the devices where you want to test it at the following link:
[Expo Go App](https://expo.dev/client)

Once the application has been installed, you can scan the QR provided by expo to run the project. This QR is found in the following link:

[![Run in Expo Go](https://img.shields.io/badge/Run%20in%20Expo%20Go-4285F4.svg?style=flat-square&logo=EXPO&labelColor=4285F4&logoColor=fff)](https://expo.dev/@cesarrivas10/femsachallenge?serviceType=classic&distribution=expo-go&release-channel=femsa-challenge)

And with this, the app can be run on any device without the need for further installations from the cli through the Expo Go app.

## Commands to run the app with Expo
### Install Expo cli

    npm install -g expo-cli

### Run the expo app

    npx expo start --clean

**Note:**
	- Executing this command will open an expo devTools, where you should enter either **a** to run the app on an Android simulator, or **i** to run it on an IOS simulator.

### Compiling
You can compile your app locally with the  `run`  commands:
```
# Build for IOS
npx expo run:ios
# Build for Android
npx expo run:android
```
