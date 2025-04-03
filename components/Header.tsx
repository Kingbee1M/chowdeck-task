import { View, Image, StyleSheet, Text, Pressable,TextInput, Button } from 'react-native';
import { useUserStore } from '@/states/useUserStore';
import { useState, useEffect } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Header () {
      const locations = useUserStore((state) => state.user?.location);
      const [location, setLocation] = useState("");
      const [locationChanged, setlocationChanged] = useState("")
      const[isLocationChange,setisLocationChange] = useState(false)

      const handleLocationChange = () => {
        setLocation(locationChanged);

      };

      const setAndClose = () => {
        handleLocationChange()
        setisLocationChange(!isLocationChange)
      }
    
      useEffect(() => {
          setLocation(locations ?? "PLease set yourlocation");
      }, [locations]);
    

  return (
    <>
                <View style={styles.header}>
            <Pressable onPress={() => setisLocationChange(!isLocationChange)}>
            <View style={styles.header1}>
            <Ionicons name="location" size={15} color="green" />
              <Text>{location}</Text>    
              <Ionicons name="chevron-down" size={15} color="black"/>
            </View>
            </Pressable>
            <View style={styles.header2}>
            <Image 
              source={require('@/assets/images/finance.png')}
              style={[styles.image, {width: 25}]}
            />
            <View style={styles.filter}>
            <Text style={{color: "white"}}>Filter</Text>
            <Ionicons name="options" size={15} color="white" />
            </View>
            </View>
          </View>
          {isLocationChange && (
          <View style={styles.fullScreenView}>
            <Pressable onPress={() => setisLocationChange(!isLocationChange)}>
            <Ionicons name="close" size={25} color="black" style={{position: "absolute", top: 10, right: 10 }} />
            </Pressable>
            <View style={styles.pageContent}>
              <TextInput
                placeholder="Enter a new address"
                style={styles.input}
                onChangeText={setlocationChanged}
              />
              <Text>
                <Image
                  source={require('@/assets/images/gps.png')}
                  style={[styles.image]}
                />{"  "}
                Use your current location
              </Text>
              <Text>{location}</Text>
              <Pressable onPress={setAndClose}>
                <Text style={styles.button}>Set location</Text>
              </Pressable>
            </View>
          </View>
        )}
    </>
  )
}

const styles = StyleSheet.create({
    image: {
        width: 20,
        height: 20,
      },
      header: {
        marginTop: 20,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
      },
      header1: {
        flexDirection: "row",
        gap: 5
      },
      header2: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5
      },
      filter: {
        flexDirection: "row",
        paddingVertical: 8,
        paddingHorizontal: 12,
        backgroundColor: "green",
        borderRadius: 19,
        gap: 5
      },
      fullScreenView: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "white",
        zIndex: 1,
        width: "100%"
      },
      pageContent: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: 50,
        gap: 20
      },
      input: {
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
        width: "90%",
        borderRadius: 20,
        textAlign: "center",
      },
      button: {
        paddingVertical: 5,
        paddingHorizontal: 20,
        backgroundColor: "green",
        color: "white",
        borderRadius: 15,
      },
    })