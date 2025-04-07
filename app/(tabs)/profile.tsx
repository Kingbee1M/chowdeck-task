import {
  Text,
  ScrollView,
  Image,
  StyleSheet,
  View,
  Pressable,
  TouchableOpacity,
} from "react-native";
import OptionSetting from "@/components/OptionsSetting";

export default function Profile() {
  return (
    <ScrollView>
      <View style={styles.userContent}>
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9UdkG68P9AHESMfKJ-2Ybi9pfnqX1tqx3wQ&s",
          }}
          style={styles.userImg}
        />
        <Text style={styles.userName}>Henry Odunsi</Text>
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
  },
  userName: {
    fontWeight: 600,
    fontSize: 25,
    padding: 20,
  },
  userSetting: {
    backgroundColor: "#fff",
  },
  details: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  userSubDetail: {
    flexDirection: "row",
    gap: 10,
  },
  icon: {
    fontSize: 20,
    padding: 3,
  },
  detailsText: {
    fontSize: 20,
  },
  detailsTextArrow: {
    fontSize: 25,
  },
  hr: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginVertical: 5,
    width: "90%",
    alignSelf: "center",
  },
});
