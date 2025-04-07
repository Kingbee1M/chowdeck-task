import React, { useEffect } from "react";
import { View, Text, Button, StyleSheet, Alert } from "react-native";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import { initializeApp } from "firebase/app";
import {
  initializeAuth,
  getReactNativePersistence,
  GoogleAuthProvider,
  signInWithCredential,
} from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import Constants from "expo-constants";

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
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export default function Authscreen() {
  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: getConfig().google.clientId,
    redirectUri: "https://auth.expo.io/@odunsih/chowdeck",
  });

  useEffect(() => {
    if (response?.type === "success") {
      const { id_token } = response.authentication;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential)
        .then(() => router.push("/(tabs)/Home"))
        .catch((e) => {
          console.error("Firebase Sign-in Error:", e);
          Alert.alert("Sign-in Failed", e.message);
        });
    }
  }, [response]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Chowdeck 👋</Text>
      <Button
        title="Sign in with Google"
        disabled={!request}
        onPress={() => promptAsync()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, marginBottom: 20 },
});
