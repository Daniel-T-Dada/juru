



import { StatusBar } from 'react-native'
import { ThemedView } from './ThemedView'
import { ImageBackground } from 'expo-image'

const FullSplashScreen = () => {
  return (
    <ThemedView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <StatusBar hidden />

      <ImageBackground
        source={require('../assets/images/splash.png')}
        style={{ flex: 1, width: '100%', height: '100%' }}
        contentFit='cover'
      />
    </ThemedView>
  )
}
export default FullSplashScreen