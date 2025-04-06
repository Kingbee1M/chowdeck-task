import { StyleSheet, Text, View, Image, FlatList, Button} from 'react-native';
import { useResturantStore } from '@/states/useResturantStore';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface titleProps {
  title: string
  emoji: string
  color: string
}

export default function FoodList({title, emoji, color}: titleProps) {
  const resturants = useResturantStore((state) => state.resturants);
  let foodMenu: Array<any> = [];

  const restName = () => {
    return Object.keys(resturants)[value(9)];
  };
  const value = (length: number) => {
    return Math.floor(Math.random() * length);
  };

  const foods = (resturantName: string) => {
    const foodKeys = Object.keys(resturants[resturantName].food);
    return foodKeys[value(foodKeys.length)];
  };

  const createFoodMenu = () => {
    const restaurantName = restName();
    const foodName = foods(restaurantName);
    const foodItem = resturants[restaurantName].food[foodName];
    const newObj = {
      name: restaurantName,
      foodItem: foodName,
      price: foodItem.price,
      image: foodItem.image,
    };
    return newObj;
  };

  // Generate the food menu
  for (let i = 0; i < 15; i++) {
    foodMenu.push(createFoodMenu());
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title} <Ionicons name={emoji} size={20} color={color}/></Text>
      <FlatList 
            horizontal
            data={foodMenu}
            renderItem={({ item }) => (
              <View style={styles.itemContainer}>
                <Image source={item.image} style={styles.foodImage} />
                <View style={styles.names}>
                <Text style={styles.restname}>{item.name} - </Text>
                <Text>{item.foodItem}</Text>
                </View>
                <Text style={styles.price}>{item.price}</Text>
              </View>
            )}
            contentContainerStyle={{ gap: 30 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
container: {
  marginTop: 20,
  justifyContent: "flex-start",
  height: 200
},
title: {
  fontSize: 25,
  fontWeight: 700,
  marginBottom: 10,
},
itemContainer: {
  justifyContent: "flex-start",
  width: 150,
},
foodImage: {
  width: "100%",
  height: 100,
  borderRadius: 15,
},
names: {
  flexDirection: "row",
  width: "100%"
},
restname: {
  wordWrap: "break-word"
},
price: {
  fontWeight: 600
}
});