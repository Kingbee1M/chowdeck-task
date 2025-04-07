import Icon from "react-native-vector-icons/FontAwesome5";
import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native";

export default function OptionSetting() {
  return (
    <View>
      <Text style={styles.userName}>personal</Text>
      <View style={styles.userSetting}>
        <TouchableOpacity style={styles.details}>
          <View style={styles.userSubDetail}>
            <Icon style={styles.icon} name="user-circle" />
            <Text style={styles.detailsText}> Profile Details</Text>
          </View>
          <Text style={styles.detailsTextArrow}>&gt;</Text>
        </TouchableOpacity>
        <View style={styles.hr} />
        <TouchableOpacity style={styles.details}>
          <View style={styles.userSubDetail}>
            <Icon style={styles.icon} name="map-marker" />
            <Text style={styles.detailsText}> Addresses</Text>
          </View>
          <Text style={styles.detailsTextArrow}>&gt;</Text>
        </TouchableOpacity>
        <View style={styles.hr} />
        <TouchableOpacity style={styles.details}>
          <View style={styles.userSubDetail}>
            <Icon style={styles.icon} name="star" />
            <Text style={styles.detailsText}> Chowpass</Text>
          </View>
          <Text style={styles.detailsTextArrow}>&gt;</Text>
        </TouchableOpacity>
        <View style={styles.hr} />
        <TouchableOpacity style={styles.details}>
          <View style={styles.userSubDetail}>
            <Icon style={styles.icon} name="wallet-outline" />
            <Text style={styles.detailsText}> Wallet</Text>
          </View>
          <Text style={styles.detailsTextArrow}>&gt;</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.userName}>Service</Text>
      <View style={styles.userSetting}>
        <TouchableOpacity style={styles.details}>
          <View style={styles.userSubDetail}>
            <Icon style={styles.icon} name="gift" />
            <Text style={styles.detailsText}> Referral</Text>
          </View>
          <Text style={styles.detailsTextArrow}>&gt;</Text>
        </TouchableOpacity>
        <View style={styles.hr} />
        <TouchableOpacity style={styles.details}>
          <View style={styles.userSubDetail}>
            <Icon style={styles.icon} name="card" />
            <Text style={styles.detailsText}> Gift Cards</Text>
          </View>
          <Text style={styles.detailsTextArrow}>&gt;</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.userName}>More</Text>
      <View style={styles.userSetting}>
        <TouchableOpacity style={styles.details}>
          <View style={styles.userSubDetail}>
            <Icon style={styles.icon} name="user-circle" />
            <Text style={styles.detailsText}> How-Tos</Text>
          </View>
          <Text style={styles.detailsTextArrow}>&gt;</Text>
        </TouchableOpacity>
        <View style={styles.hr} />
        <TouchableOpacity style={styles.details}>
          <View style={styles.userSubDetail}>
            <Icon style={styles.icon} name="location" />
            <Text style={styles.detailsText}> FAQs</Text>
          </View>
          <Text style={styles.detailsTextArrow}>&gt;</Text>
        </TouchableOpacity>
        <View style={styles.hr} />
        <TouchableOpacity style={styles.details}>
          <View style={styles.userSubDetail}>
            <Icon style={styles.icon} name="star" />
            <Text style={styles.detailsText}> Get Help</Text>
          </View>
          <Text style={styles.detailsTextArrow}>&gt;</Text>
        </TouchableOpacity>
        <View style={styles.hr} />
        <TouchableOpacity style={styles.details}>
          <View style={styles.userSubDetail}>
            <Icon style={styles.icon} name="wallet" />
            <Text style={styles.detailsText}> Legal</Text>
          </View>
          <Text style={styles.detailsTextArrow}>&gt;</Text>
        </TouchableOpacity>
      </View>
    </View>
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
    marginVertical: 10,
    width: "90%",
    alignSelf: "center",
  },
});
