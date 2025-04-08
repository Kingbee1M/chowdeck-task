import React, { useEffect } from "react";
import { View, Text, Button, StyleSheet, Alert } from "react-native";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import { initializeApp } from "firebase/app";
import {
  initializeAuth,
  // getReactNativePersistence,
  GoogleAuthProvider,
  signInWithCredential,
} from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { router, useNavigation } from "expo-router";
import Constants from "expo-constants";
import * as AuthSession from "expo-auth-session";

console.log(Constants.appOwnership);
const redirectUri = AuthSession.makeRedirectUri({} as any);

console.log(redirectUri);
console.log(3);
console.log(3);
WebBrowser.maybeCompleteAuthSession();
const getConfig = () => {
  if (!Constants.expoConfig?.extra) {
    throw new Error("Expo config is missing!");
  }
  return Constants.expoConfig.extra as {
    firebase: { apiKey: string };
    google: { clientId: string };
  };
};
const firebaseConfig = {
  apiKey: getConfig().firebase.apiKey,
  authDomain: "chow-deck-456114.firebaseapp.com",
  projectId: "chow-deck-456114",
  storageBucket: "chow-deck-456114.firebasestorage.app",
  messagingSenderId: "1022113800580",
  appId: "1:1022113800580:web:cae2b4272b364625663dd1",
  measurementId: "G-KYRB00X562",
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  // persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export default function Authscreen() {
  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: getConfig().google.clientId,
    redirectUri: "http://localhost:8081",
    scopes: ["openid", "email", "profile"],
    responseType: "id_token",
  });

  useEffect(() => {
    if (response?.type === "success") {
      console.log("Full OAuth response:", JSON.stringify(response, null, 2));
      // const { id_token } = response.authentication;
      const id_token = response.params?.id_token;
      if (!id_token) {
        console.error("Google response:", response);
        Alert.alert("Error", "No ID token received from Google");
        return;
      }

      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential)
        .then((userCredential) => {
          // Get the signed-in user info
          const user = userCredential.user;
          console.log("User signed in:", user);

          // Navigate to Home with user data
          router.push({
            pathname: "/(tabs)/Home",
            params: {
              userName: user.displayName,
              userPhoto: user.photoURL,
            },
          });
        })
        .catch((e) => {
          console.error("Firebase Sign-in Error:", e);
          Alert.alert("Sign-in Failed", e.message);
        });
    }
  }, [response]);
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Click the button below to get started</Text>
      <Button
        title="Sign in with Google"
        disabled={!request}
        onPress={() => promptAsync()}
        color={"green"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: { fontSize: 24, marginBottom: 20, textAlign: "center" },
});
