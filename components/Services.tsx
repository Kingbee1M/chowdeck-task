import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'

interface useServices {
    name: string
    img: any
    color: string
}

export default function Services({name, img, color}: useServices) {
  return (
    <Pressable>
    <View style={[styles.wrapper, {backgroundColor: color }]}>
      <Image source={img} style={styles.images} />
      <Text style={styles.texts}>{name}</Text>
    </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    wrapper: {
        width: 80,
        height: 80,
        padding: 5,
        alignItems: "center"
    },
    images: {
        width: "80%",
        height: "80%"
    },
    texts: {
        fontSize: 12,
        textAlign: "center",
    }
})