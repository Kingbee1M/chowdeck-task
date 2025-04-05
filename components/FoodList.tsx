import { StyleSheet, Text, View } from 'react-native'
import { useResturantStore } from '@/states/useResturantStore'

export default function FoodList() {
    const resturants = useResturantStore((state) => state.resturants);
    const createFoodMenu = () => {
        
    }
  return (
    <View>
      <Text>FoodList</Text>
    </View>
  )
}

const styles = StyleSheet.create({

})