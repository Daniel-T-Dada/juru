


import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Button from '@/components/ui/Button';
import OnboardingAnimation from '@/components/welcome/LottieAnimation';
import { onboardingSlides } from '@/constants/onboarding';
import { useTheme } from '@/hooks/use-theme';
import { router } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import { Animated, StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Swiper from 'react-native-swiper';


const PaginationDot = ({ isActive, theme }: { isActive: boolean; theme: any }) => {

  const width = useRef(new Animated.Value(isActive ? 24 : 8)).current;

  useEffect(() => {
    Animated.timing(width, {
      toValue: isActive ? 24 : 8,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [isActive]);

  return (
    <Animated.View
      style={{
        height: 8,
        width: width,
        backgroundColor: isActive ? theme.primary : theme.secondary,
        borderRadius: 4,
        marginHorizontal: 4,
      }}
    />
  );
};


const Welcome = () => {
  const swiperRef = useRef<Swiper>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const theme = useTheme()

  const isLastSlide = activeIndex === onboardingSlides.length - 1

  return (

    <SafeAreaView style={styles.safeArea}>
      <ThemedView style={styles.container}>

        <TouchableOpacity
          style={[styles.skipButton, { opacity: isLastSlide ? 0 : 1 }]}
                 onPress={() => {
            router.replace("/(auth)/signup")
          }}
        >
          <ThemedText style={[ styles.skipText, { color: theme.foreground } ]}>
            Skip
          </ThemedText>
        </TouchableOpacity>

        <Swiper
          ref={swiperRef}
          loop={false}
          onIndexChanged={(index) => setActiveIndex(index)}
          renderPagination={(index, total) => (
            <View style={styles.paginationContainer}>
              {Array.from({ length: total }).map((_, i) => (
                <PaginationDot key={i} isActive={i === index} theme={theme} />
              ))}
            </View>
          )}
        >
          {onboardingSlides.map((slide) => (
            <ThemedView key={slide.id} style={styles.slideContent}>
              <ThemedView>
                <OnboardingAnimation source={slide.animationUrl} />
              </ThemedView>
              <ThemedText style={styles.title}>
                {slide.title}
              </ThemedText>
              <ThemedText style={styles.description}>
                {slide.description}
              </ThemedText>
            </ThemedView>
          ))}
        </Swiper>
        <View style={styles.footer}>
          <Button
            variant="primary"
            title={isLastSlide ? "Get Started" : "Next"}
            onPress={() => {
              isLastSlide
                ? router.replace("/(auth)/signup")
                : swiperRef.current?.scrollBy(1)
            }}
          />
        </View>

      </ThemedView>
    </SafeAreaView >
  )
}
export default Welcome

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

  skipButton: {
    alignSelf: 'flex-end',
    borderRadius: 999, 
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },

  skipText: {
    fontSize: 16,
    fontWeight: '600',
  },

  slideContent: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    paddingHorizontal: 30,
    paddingBottom: 50, 
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    opacity: 0.8,
    lineHeight: 24,
  },

  paginationContainer: {
    position: 'absolute',
    bottom: 60,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  footer: {
    paddingHorizontal: 20,
    paddingBottom: 60,
    alignItems: 'center', // Centers the button horizontally
    width: '100%',
  }
});
