The Frame processor plugin for detecting pose using Google ML Kit library for react-native-vision-camera with high performance.

# 🚨 Required Modules

react-native-vision-camera >= 4.0 <br />
react-native-worklets-core = 1.0.0 <br />
@shopify/react-native-skia >= 1.2.1 <br />
react-native-reanimated >= 3.0.0

## 💻 Installation

```sh
yarn add @scottjgilroy/react-native-vision-camera-v4-pose-detection
```

or

```sh
npm install @scottjgilroy/react-native-vision-camera-v4-pose-detection
```

## 👷Features

    Easy To Use.
    Works Just Writing few lines of Code.
    Works With React Native Vision Camera.
    Works for Both Cameras.
    Works Fast.
    Works With Android 🤖 and IOS.📱
    Writen With Kotlin and Objective-C.

## 💡 Usage

```js
import { Camera } from '@scottjgilroy/react-native-vision-camera-v4-pose-detection';

const [pose,setPose] = useState(null)

console.log(pose)

<Camera
  // optional
  options={{
    mode: "stream",
    performanceMode:"max"
    }}
  style={StyleSheet.absoluteFill}
  device={device}
  callback={(data, frame) => {
    setPose(data);
    frame.render();
  }}
  {...props}
/>
```

---

## ⚙️ Options

|      Name       |  Type  |     Values     | Default |
| :-------------: | :----: | :------------: | :-----: |
|      mode       | string | stream, single | stream  |
| performanceMode | string |    min, max    |   min   |
