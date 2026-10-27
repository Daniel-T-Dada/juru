import { DarkTheme, DefaultTheme, Stack, ThemeProvider } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import '../global.css'
import { useColorScheme } from 'react-native';
import { useEffect, useState } from 'react';
import { AuthProvider, useAuth } from '@/context/AuthContext';
import FullSplashScreen from '@/components/SplashScreen';



SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
    <AuthProvider>
      <RootNavigator />
    </AuthProvider>
  );
}
function RootNavigator() {
  const colorScheme = useColorScheme();
  const { isInitializing } = useAuth();
  const [splashDelay, setSplashDelay] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSplashDelay(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  if (isInitializing || !splashDelay) {
    return <FullSplashScreen />;
  }

  return (
    <ThemeProvider
      value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <Stack>
        <Stack.Screen
          name="index"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="(auth)"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="(root)"
          options={{ headerShown: false }}
        />
      </Stack>
    </ThemeProvider>
  );
}