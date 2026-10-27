

import { Stack } from 'expo-router'

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="group/[id]" options={{ headerShown: false }} />
      <Stack.Screen name="withdraw/[id]" options={{ presentation: 'modal', headerShown: false }} />
    </Stack>
  )
}
export default Layout
