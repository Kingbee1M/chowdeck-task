import { StyleSheet, View, Image, Animated, Easing } from 'react-native'
import { useState, useEffect } from 'react';

interface ImageSliderProps {
  images: any[];
}

export default function ImageSlider({ images }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideAnim = useState(new Animated.Value(1))[0];  // Animation for sliding effect

  useEffect(() => {
    const interval = setInterval(() => {
      slideOutAndIn();  // Start sliding out and in when the index changes
    }, 10000);

    return () => clearInterval(interval);
  }, [images]);

  // Slide out the current image, then slide in the new one
  const slideOutAndIn = () => {
    // Slide the current image out
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 500,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start(() => {
      // After the current image slides out, change the index
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);

      // Reset the animation to slide the new image in
      Animated.timing(slideAnim, {
        toValue: 1,
        duration: 500,
        easing: Easing.ease,
        useNativeDriver: true,
      }).start();
    });
  };

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