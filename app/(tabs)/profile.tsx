import { Text, ScrollView, Image, StyleSheet, View } from "react-native";
import OptionSetting from "@/components/OptionsSetting";
import { useGlobalSearchParams } from "expo-router";

export default function Profile() {
  const params = useGlobalSearchParams();
  const userName = params.userName as string;
  const userPhoto = params.userPhoto as string;
  console.log(userPhoto);
  console.log(userName);
  console.log(params);
  return (
    <ScrollView>
      <View style={styles.userContent}>
        <Image
          source={{
            uri:
              userPhoto ||
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI9lRck6miglY0SZF_BZ_sK829yiNskgYRUg&s",
          }}
          style={styles.userImg}
        />
        <Text style={styles.userName}>{userName || "Guest"}</Text>
      </View>
      <OptionSetting />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  userContent: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  userImg: {
    width: 150,
    height: 150,
    marginTop: 30,
    borderRadius: 75,
    backgroundColor: "#f0f0f0",
  },
  userName: {
    fontWeight: 600,
    fontSize: 25,
    padding: 20,
  },
});
