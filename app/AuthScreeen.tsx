import React, { useEffect, useState } from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { useNavigation } from "@react-navigation/native";

WebBrowser.maybeCompleteAuthSession();

export default function AuthScreen() {
  const navigation = useNavigation();
  const [userInfo, setUserInfo] = useState(null);

  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId:
      "153615692711-4nmgobkvqkn09950ot98bvu814attcj5.apps.googleusercontent.com",
  });

  useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response;
      fetchUserInfo(authentication?.accessToken);
    }
  }, [response]);

  const fetchUserInfo = async (token: string | undefined) => {
    try {
      const res = await fetch("https://www.googleapis.com/userinfo/v2/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const user = await res.json();
      setUserInfo(user);
      navigation.navigate("index", { user }); // 🔁 Redirect to Home with user data
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
