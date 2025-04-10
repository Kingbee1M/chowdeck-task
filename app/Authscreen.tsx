import React, { useEffect } from "react";
import { View, Text, Button, StyleSheet, Alert } from "react-native";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import * as AuthSession from "expo-auth-session";
import { initializeApp } from "firebase/app";
import {
  initializeAuth,
  GoogleAuthProvider,
  signInWithCredential,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { login } from "../store/authSlice"; // ✅ adjust path
import { router, useNavigation } from "expo-router";
import Constants from "expo-constants";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

WebBrowser.maybeCompleteAuthSession();

// Firebase and Google config pulled from Expo Constants
const getConfig = () => {
  const extra = Constants.expoConfig?.extra || Constants.manifest2?.extra;

  if (!extra) throw new Error("Expo config is missing!");
  return extra as {
    firebase: { apiKey: string };
    google: { clientId: string };
  };
};

// Firebase config
const firebaseConfig = {
  apiKey: getConfig().firebase.apiKey,
  authDomain: "chow-deck-456114.firebaseapp.com",
  projectId: "chow-deck-456114",
  storageBucket: "chow-deck-456114.appspot.com",
  messagingSenderId: "1022113800580",
  appId: "1:1022113800580:web:cae2b4272b364625663dd1",
  measurementId: "G-KYRB00X562",
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: undefined,
});
// console.log(
//   "Proxy URI:",
//   AuthSession.makeRedirectUri({
//     useProxy: true,
//     projectNameForProxy: "@odunsih/chowdeck",
//   })
// );
// const redirectUri = AuthSession.makeRedirectUri({ useProxy: false }); // Explicitly disable proxy in dev
// console.log("Redirect URI:", redirectUri); // Should log exp://192.168.43.64:8081
// console.log(redirectUri);
export default function Authscreen() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: getConfig().google.clientId,
    redirectUri: "http://localhost:8081",
    scopes: ["openid", "email", "profile"],
    responseType: "id_token",
  });

  useEffect(() => {
    console.log("Manifest:", Constants.expoConfig);
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  useEffect(() => {
    if (response?.type === "success") {
      const id_token = response.params?.id_token;

      if (!id_token) {
        Alert.alert("Error", "No ID token received from Google");
        return;
      }

      const credential = GoogleAuthProvider.credential(id_token);

      signInWithCredential(auth, credential)
        .then((userCredential) => {
          const user = userCredential.user;

          // Store user info in Redux
          dispatch(
            login({
              name: user.displayName,
              email: user.email,
              photo: user.photoURL,
              isAuthenticated: true,
            })
          );

          // Navigate to Home screen
          router.push("/(tabs)/Home");
        })
        .catch((e) => {
          console.error("Firebase Sign-in Error:", e);
          Alert.alert("Sign-in Failed", e.message);
        });
    }
  }, [response]);

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
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, marginBottom: 20, textAlign: "center" },
});
