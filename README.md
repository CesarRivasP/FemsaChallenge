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

## Challenge
The challenge was carried out using the [Expo SDK](https://docs.expo.dev/) to facilitate the installation of the modules and configuration of the project, taking advantage of the agility offered by this SDK. In turn, for ease of reviewing the challenge, Expo offers the possibility of creating channels to access the applications through a QR code and its ExpoGo application.

The project structure was carried out in two layers within the source:
- In the first layer, we find configurations of the project, services, utils, and parts of the code that are general for the rest of the app.
- The second layer, the app, manages the screens, components, hooks, navigation, among others, with the purpose that there is more code related to the interfaces, and the modules that they need.

It should be noted that in the development of the application, we sought to create a framework that was not very complex, in order to develop the Home screen, and the details, for which we opted to create a HOC that abstracts the logic layer that It would be in charge of establishing the SafeAreas and StatusBar.

The Navigation module was implemented with the **@react-navigation/native-stack** module to achieve better behavior when navigating between screens.

Custom hooks were created to handle the parameters that were passed through the navigation for easier handling, as well as another to handle the loading of application assets (sources), and a last hook to be able to apply the translations of the texts.

Some utils were used for the responsive, which based on the measurements of the screen, and some reference measurements establishes the closest value to be established according to the measurements provided in the Figma mockups.

### Requirements and flow developed
In summary, the requirements for this challenge consist of the development of an application that can consume an Endpoint that provides the data to fill a card with points, and a list of products that shows the name of the product, its purchase date, the points which has this for value, and its image.

The main screen has the possibility of being able to filter the products based on the status of the **is_redemption** parameter that arrives with each product. On the other hand, when selecting the product, you navigate to another screen that provides the details of the product, fed by parameters from the previous screen.

Here are screenshots of the app:

#### Iphone 13
| <img src="https://user-images.githubusercontent.com/31055680/216982769-d2b36191-d4cf-4757-a9c9-c73d1c12568f.PNG" width="300"/>     | <img src="https://user-images.githubusercontent.com/31055680/216982775-8a851866-ee70-4da4-8b64-aeb3d439f6be.PNG" width="300"/>     |  <img src="https://user-images.githubusercontent.com/31055680/216982781-0b181d4f-959c-47a4-9c6b-293566ea177f.PNG" width="300"/>     |  <img src="https://user-images.githubusercontent.com/31055680/216982787-9bd4efc3-95a8-4a28-a3c6-c829b7f71212.PNG" width="300"/>     |

#### Xiaomi 11 lite 5G NE

| <img src="https://user-images.githubusercontent.com/31055680/216983280-96214a13-80d6-43a1-a374-c1c4ef96ce60.jpg" width="300"/>     | <img src="https://user-images.githubusercontent.com/31055680/216983285-beff179d-a18d-4396-92a9-82469a18ee2b.jpg" width="300"/>     |  <img src="https://user-images.githubusercontent.com/31055680/216983288-72f6d40a-9cb9-4cb4-ab51-f707761e3686.jpg" width="300"/>     |  <img src="https://user-images.githubusercontent.com/31055680/216983289-f8c642f9-d1fd-46ca-b410-8a6b92751e9e.jpg" width="300"/>     |

### Additional details
* The env was pushed to the git repository, to facilitate testing the challenge.
* It was possible to validate that there are opportunities in which when accessing one of the images provided by the api, the image changes a lot, although it maintains a theme or topic, so sometimes when entering the detail of a product it can show another image other than the list. It seems to me that this occurs at certain times, it is not permanent.
* Tests were implemented using the React Native Testing Library, where unit tests and integration tests were evaluated using an axios mock to validate interface behavior. An attempt was made to have the average coverage above 75%.

<img width="1200" alt="test_coverage" src="https://user-images.githubusercontent.com/31055680/216985646-11ab22b0-198a-4172-af00-b75ebaccc953.png">

### Topics to improve
- I need to implement a mock that would allow testing the texts correctly when they are translated. For this reason, in most tests the elements are located through the testID and not through the text.
- I need to establish a better image of the Femsa logo for the icon and the splash screen, because the one that is there is pixelated.
- I need to add a library or improve the implementation of the images, so that they load faster, and have cache support.
