

import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuth } from '@/context/AuthContext';
import { ThemedView } from '@/components/ThemedView';
import Header from '@/components/tabs/home/Header';
import TotalBanner from '@/components/tabs/home/TotalBanner';
import QuickAction from '@/components/tabs/home/QuickAction';
import { useTheme } from '@/hooks/use-theme';
import RecentActivity from '@/components/tabs/home/RecentActivity';

const HomeScreen = () => {
  const { user } = useAuth();
  const theme = useTheme()

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.background }]} edges={['top']}>
      <ScrollView>
        <ThemedView style={styles.container}>

          <Header user={user} />
          <TotalBanner />
          <QuickAction />
          <RecentActivity />

        </ThemedView>
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  greetingText: {
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: 14,
    opacity: 0.7,
  },
  nameText: {
    fontSize: 18,
  },
  notificationIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: 10,
    right: 12,
    width: 8,
    height: 8,
    borderRadius: 4,
  },
});