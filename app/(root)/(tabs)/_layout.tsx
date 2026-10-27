


import { useTheme } from '@/hooks/use-theme';
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router'


const TabLayout = () => {
  const theme = useTheme();
  return (
    <Tabs
      // initialRouteName="index"
      screenOptions={{
      headerShown: false,
      tabBarInactiveTintColor: theme.mutedForeground,
      tabBarActiveTintColor: theme.primary,
      tabBarStyle: {
        backgroundColor: theme.background,
        borderTopColor: theme.border,
        paddingBottom: 16,
      },
    }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size, focused }) => (
              <Ionicons
                name="home"
                size={size}
                color={color as string}
                focused={focused}
              />
          ),
        }}
      />
      <Tabs.Screen
        name="groups"
        options={{
          title: 'Groups',
          tabBarIcon: ({ color, size, focused }) => (
              <Ionicons
                name="people"
                size={size}
                color={color as string}
                focused={focused}
              />
          ),
        }}
      />
      <Tabs.Screen
        name="activity"
        options={{
          title: 'Activity',
          tabBarIcon: ({ color, size, focused }) => (
              <Ionicons
                name="pulse"
                size={size}
                color={color as string}
                focused={focused}
              />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size, focused }) => (
              <Ionicons
                name="person"
                size={size}
                color={color as string}
                focused={focused}
              />
          ),
        }}
      />
    </Tabs>
  )
}
export default TabLayout

