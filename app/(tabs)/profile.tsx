import {
  Text,
  ScrollView,
  Image,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
} from "react-native";
import OptionSetting from "@/components/OptionsSetting";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { logout } from "../../store/authSlice";
import { router } from "expo-router";
import LogoutButton from "@/components/LogoutButton";

export default function Profile() {
  const user = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    router.replace("/Authscreen");
  };

  return (
    <ScrollView>
      <View style={styles.userContent}>
        <Image
          source={{
            uri:
              user.photo ||
              "https://icon-library.com/images/male-avatar-icon/male-avatar-icon-4.jpg",
          }}
          style={styles.userImg}
        />
        <Text style={styles.userName}>{user.name || "Guest"}</Text>
        <LogoutButton onPress={handleLogout} />
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
    fontWeight: "600",
    fontSize: 25,
    padding: 20,
  },
});
