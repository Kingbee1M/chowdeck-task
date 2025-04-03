import { View, Image, StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, Platform, Pressable,TextInput } from 'react-native';
import Header from '@/components/Header';
import Services from '@/components/Services';
import ImageSlider from '@/components/ImageSlider';
const restaurantImg = require('@/assets/images/restaurant-building.png');
const supermarketImg = require('@/assets/images/super-market.png');
const pharmacyImg = require('@/assets/images/pharmacy.png');
const deliveryImg = require('@/assets/images/delivery-truck.png');
const marketImg = require('@/assets/images/crate.png');
const moreImg = require('@/assets/images/coffee-cup.png');

const services = [
  {
    name: "Restaurant",
    bgColor: "#FFC0CB",
    img: restaurantImg
  },
  {
    name: "Supermarket",
    bgColor: "#FFB6C1",
    img: supermarketImg
  },
  {
    name: "Pharmacies",
    bgColor: "#87CEEB",
    img: pharmacyImg
  },
  {
    name: "Send Packages",
    bgColor: "#FFD1DC",
    img: deliveryImg
  },
  {
    name: "Local Market",
    bgColor: "#ADD8E6",
    img: marketImg
  },
  {
    name: "More",
    bgColor: "#B0E0E6",
    img: moreImg
  },
];

const sliderImages = [
  require('@/assets/images/chicken-skewers-with-slices-sweet-peppers-dill.jpg'),
  require('@/assets/images/chicken-skewers-with-onions-top-salad.jpg'),
  require('@/assets/images/chicken-chop-french-fries-wooden-board.jpg'),
];

const sliderImages2 = [
  require('@/assets/images/chicken-chop-french-fries-wooden-board.jpg'),
  require('@/assets/images/stewed-white-beans-sliced-pumpkin-tomato-sauce.jpg'),
  require('@/assets/images/chicken-skewers-with-onions-top-salad.jpg'),
];

export default function HomeScreen() {

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView 
        style={styles.scrollView} 
        contentContainerStyle={styles.scrollViewContent}
      >
        <View style={styles.wrapper}>
        <Header />
        <ImageSlider images={sliderImages} />
        <View style={styles.serviceContainer}>
        {services.map((service, index) => (
              <Services 
                key={index} 
                name={service.name} 
                img={service.img} 
                color={service.bgColor} 
              />
            ))}
        </View>
        <ImageSlider images={sliderImages2} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1
  },
  scrollView: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    flexGrow: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  wrapper: {
    width: "80%",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "20%",
    marginTop: 20
  },
  serviceContainer: {
    width: "100%",
    minHeight: "30%",
    flexDirection: "row",
    flexWrap: "wrap",
    rowGap: 15,
    columnGap: 15,
    justifyContent: "center",
    alignContent: "center",
    marginTop: 20,
  }
});
