import { Tabs } from "expo-router";
import React from "react";
import { Image, Platform, StyleSheet } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

export default function TabLayout() {
  const user = useSelector((state: RootState) => state.auth);
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#0c513f",
        tabBarInactiveTintColor: "grey",
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={25} name="house.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="search" size={25} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="orders"
        options={{
          title: "Orders",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="shopping-bag" size={25} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="support"
        options={{
          title: "Support",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="wechat" size={25} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: () => (
            <Image
              source={{
                uri:
                  user.photo ||
                  "https://icon-library.com/images/male-avatar-icon/male-avatar-icon-4.jpg",
              }}
              style={styles.userImg}
            />
          ),
        }}
      />
    </Tabs>
  );
}
const styles = StyleSheet.create({
  userImg: {
    width: 25,
    height: 25,
    borderRadius: 75,
  },
});
