

import { StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@/hooks/use-theme';
import { GROUPS } from '@/constants/groups';
import GroupHeader from '@/components/tabs/groups/GroupHeader';
import GroupCard from '@/components/tabs/groups/GroupCard';

const GroupScreen = () => {
  const theme = useTheme();

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.background }]}>
     
      <GroupHeader />
      
      <GroupCard groups={GROUPS} />

    </SafeAreaView>
  );
}

export default GroupScreen

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  
});