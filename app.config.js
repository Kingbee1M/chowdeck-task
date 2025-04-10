import "dotenv/config"; // loads .env automatically

export default {
  expo: {
    name: "chowdeck",
    slug: "chowdeck",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/loading.png",
    scheme: "myapp",
    owner: "odunsih",
    userInterfaceStyle: "automatic",
    newArchEnabled: true,
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/images/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      package: "com.anonymous.chowdeck",
      googleServicesFile: "./google-services.json",
    },
    web: {
      bundler: "metro",
      output: "static",
      favicon: "./assets/images/favicon.png",
    },
    plugins: [
      "expo-router",
      [
        "expo-splash-screen",
        {
          image: "./assets/images/logo.png",
          imageWidth: 200,
          resizeMode: "contain",
          backgroundColor: "#ffffff",
        },
      ],
      [
        "expo-dev-client",
        {
          launchMode: "most-recent",
        },
      ],
      "@react-native-firebase/app",
      "@react-native-firebase/auth",
      [
        "expo-build-properties",
        {
          android: {
            compileSdkVersion: 34,
            targetSdkVersion: 34,
            buildToolsVersion: "34.0.0",
          },
        },
      ],
    ],
    experiments: {
      typedRoutes: true,
    },
    updates: {
      url: "https://u.expo.dev/8b594901-9842-4902-8da7-62d0cf983eee", // Add this
    },
    android: {
      runtimeVersion: "1.0.0", // Add this
      adaptiveIcon: {
        foregroundImage: "./assets/images/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      package: "com.anonymous.chowdeck",
      googleServicesFile: "./google-services.json",
    },
    ios: {
      runtimeVersion: {
        policy: "appVersion", // Add this
      },
      supportsTablet: true,
    },
    extra: {
      firebase: {
        apiKey: process.env.FIREBASE_API_KEY,
      },
      google: {
        clientId: process.env.GOOGLE_CLIENT_ID,
      },
      router: {
        origin: false,
      },
      eas: {
        projectId: "8b594901-9842-4902-8da7-62d0cf983eee",
      },
    },
  },
};
