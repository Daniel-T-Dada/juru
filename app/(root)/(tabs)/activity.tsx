import { useState } from 'react';
import { StyleSheet} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@/hooks/use-theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemedView } from '@/components/ThemedView';
import { ACTIVITIES, Activity } from '@/constants/activities';
import ActivityHeader from '@/components/tabs/activities/ActivityHeader';
import ActivityFilter from '@/components/tabs/activities/ActivityFilter';
import ActivityCard from '@/components/tabs/activities/ActivityCard';






const ActivityScreen = () => {
    const theme = useTheme();
    const [activeFilter, setActiveFilter] = useState('All');

    
    const filteredActivities: Activity[] = ACTIVITIES.filter(item => {
        if (activeFilter === 'All') return true;
        if (activeFilter === 'Contributions' && item.type === 'contribution') return true;
        if (activeFilter === 'Payouts' && item.type === 'payout') return true;
        if (activeFilter === 'Deposits' && item.type === 'deposit') return true;
        return false;
    });

    const renderIcon = (type: string) => {
        switch (type) {
            case 'payout':
            case 'deposit':
                return <Ionicons name="arrow-down-circle" size={24} color={theme.success} />; 
            case 'contribution':
            case 'withdrawal':
                return <Ionicons name="arrow-up-circle" size={24} color={theme.destructive || theme.destructive} />
            default:
                return <Ionicons name="ellipse" size={24} color={theme.mutedForeground} />;
        }
    };

    return (
        <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.background }]}>

            <ActivityHeader />


            <ThemedView style={styles.container}>

                
                <ActivityFilter
                    activeFilter={activeFilter}
                    setActiveFilter={setActiveFilter}
                />

                <ActivityCard
                    onFilterActivities={filteredActivities }
                    onRenderIcon={renderIcon}
                />
               
            </ThemedView>
        </SafeAreaView>
    );
}

export default ActivityScreen

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    container: {
        flex: 1,
    },

});