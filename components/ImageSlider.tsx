import { StyleSheet, View, Image } from 'react-native'
import { useState, useEffect } from 'react';

interface ImageSliderProps {
  images: any[];
}

export default function ImageSlider({ images }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <View style={styles.container}>
      <Image source={images[currentIndex]} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
    },
    image: {
      width: 300,
      height: 100,
      resizeMode: 'cover',
    },
})