# react-native-demo
##### Prototype of Map Tour app for React Native on iOS/Android

This repository shows a <a href="https://facebook.github.io/react-native/">React Native</a> prototype of the Esri Story Maps Map Tour app, as shown in the 2016 Esri Developer Summit session "Native Apps in JavaScript with React Native: Lessons from a Prototype". As it is a prototype, it is not feature-complete or bug-free. Additionally, it has only been tested on iPhone 5 and on the Android Studio emulator, and won't be receiving support or maintenance.

![alt tag](https://raw.githubusercontent.com/skitterm/react-native-demo/gh-pages/iosMapIn.png)
![alt tag](https://raw.githubusercontent.com/skitterm/react-native-demo/gh-pages/iosPoint.png)

##Features
* Filterable list of tour points (by title)
* Map of points (map uses ArcGIS API for JavaScript, loaded via a WebView)
* Image picker using the device's images/camera
* Swipable view of tour points

####Limitations
* Swipable view -- tour points aren't synced with the map
* Image picker -- picking an image doesn't do anything with it (just a proof-of-concept)

####Issues
* Android -- Map view map shows very small, swipable tour point view sometimes crashes app
* Navigation bar -- navigating back and forth can cause navigation to wrong page
* iOS -- Keyboard doesn't dismiss after filtering list of points

##Setup
These steps are for OSX environment (windows/linux development is <a href="https://facebook.github.io/react-native/docs/linux-windows-support.html">currently in beta</a>, but only for Android development).

For either platform, clone down this project and <a href="https://facebook.github.io/react-native/docs/getting-started.html">install React Native</a> (no need to install flow).
####iOS
* Open a terminal, navigate to root of project, run <code>npm install</code>
* Install XCode
* In Finder, navigate to <code>(project root folder)/iOS</code> and open <code>MapTour.xcodeproj</code> (will launch XCode)
* In XCode, click Run
* The project will build and the emulator will launch with the app installed

####Android
* Open a terminal, navigate to root of project, run <code>npm install</code>
* Install Android Studio
* In Android studio, <code> Open -> (project root folder)/android</code>
* In the terminal (still at project root folder), run <code>npm start</code>
* In Android studio, click Run
* The project will build and the emulator will launch with the app installed

##Resources
* Getting started with React Native -- https://facebook.github.io/react-native/docs/getting-started.html
