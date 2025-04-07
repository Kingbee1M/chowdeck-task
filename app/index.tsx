// app/auth.tsx
import React, { useEffect, useState } from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";
import * as WebBrowser from "expo-web-browser";
import { makeRedirectUri, useAuthRequest } from "expo-auth-session";
import { router } from "expo-router";

// Google discovery endpoints
const discovery = {
  authorizationEndpoint: "https://accounts.google.com/o/oauth2/v2/auth",
  tokenEndpoint: "https://oauth2.googleapis.com/token",
};

WebBrowser.maybeCompleteAuthSession();

interface GoogleUser {
  id?: string;
  email?: string;
  name?: string;
  picture?: string;
  [key: string]: any;
}

export default function AuthScreen() {
  const [userInfo, setUserInfo] = useState<GoogleUser | null>(null);

  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId:
        "153615692711-4nmgobkvqkn09950ot98bvu814attcj5.apps.googleusercontent.com",
      redirectUri: makeRedirectUri({
        scheme: "myapp", // Must match app.json
      }),
      scopes: ["openid", "profile", "email"],
    },
    discovery
  );

  useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response;
      fetchUserInfo(authentication?.accessToken);
    }
  }, [response]);

  const fetchUserInfo = async (token: string | undefined) => {
    try {
      if (!token) throw new Error("No access token");

      const res = await fetch("https://www.googleapis.com/userinfo/v2/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const user: GoogleUser = await res.json();
      setUserInfo(user);

      router.push({
        pathname: "/Home",
        params: { user: JSON.stringify(user) },
      });
    } catch (error) {
      console.error("Failed to fetch user info", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome 👋</Text>
      <Button
        disabled={!request}
        title="Sign in with Google"
        onPress={() => promptAsync()}
      />
      {userInfo && (
        <View style={styles.profile}>
          <Image source={{ uri: userInfo.picture }} style={styles.image} />
          <Text>{userInfo.name}</Text>
          <Text>{userInfo.email}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, marginBottom: 20 },
  profile: { marginTop: 20, alignItems: "center" },
  image: { width: 80, height: 80, borderRadius: 40, marginBottom: 10 },
});
