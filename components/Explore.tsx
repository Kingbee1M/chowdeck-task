import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import { useResturantStore } from '@/states/useResturantStore'


export default function Explore() {

  const resturantsDisplay = useResturantStore((state) => state.resturantsDisplay);
  
  return (
    <View style={styles.exploreContainer}>
      <Text style={styles.explore}>Explore</Text>
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
  explore: {
    fontSize: 17,
  },
  exploreContainer: {
    marginVertical: 10,
    gap: 10,
    height: 110,
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