import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import { useResturantStore } from '@/states/useResturantStore'
import { useEffect } from 'react';


export default function Explore() {

  const resturantsDisplay = useResturantStore((state) => state.resturantsDisplay);
  
  return (
    <View>
        <FlatList
        horizontal
            data={resturantsDisplay}
            renderItem={({ item }) => (
              <View style={styles.itemContainer}>
                <Image source={item.logo} style={styles.logos} />
                <Text style={styles.names}>{item.name}</Text>                
              </View>
            )}
            keyExtractor={(item) => item.name}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    alignItems: 'center',
    padding: 10,
  },
  logos: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  names: {
    fontSize: 12,
    fontWeight: 'bold',
  }
})