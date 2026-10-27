


import GroupCashOutButton from '@/components/tabs/groups/GroupCashOutBtn';
import GroupDetailsHeader from '@/components/tabs/groups/GroupDetailsHeader';
import GroupDetailsHeroCard from '@/components/tabs/groups/GroupDetailsHeroCard';
import GroupFinancialCard from '@/components/tabs/groups/GroupFinancialCard';
import GroupMembersList from '@/components/tabs/groups/GroupMembersList';
import { ThemedText } from '@/components/ThemedText';
import { GROUPS } from '@/constants/groups';
import { useTheme } from '@/hooks/use-theme';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';


const GroupDetailsScreen = () => {
    const { id } = useLocalSearchParams();
    const router = useRouter();
    const theme = useTheme();

    const group = GROUPS.find(group => group.id === id)

    if (!group) {
        return (
            <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.background }]}>
                <View style={styles.errorContainer}>
                    <Ionicons name="alert-circle-outline" size={48} color={theme.destructive} />
                    <ThemedText style={{ marginTop: 12 }}>Group not found.</ThemedText>
                    <TouchableOpacity onPress={() => router.back()} style={{ marginTop: 20 }}>
                        <ThemedText type="link" style={{ color: theme.primary }}>Go Back</ThemedText>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }
    return (
        <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.background }]}>
            <GroupDetailsHeader />

            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                <GroupDetailsHeroCard group={group} />
                <GroupFinancialCard
                    plan={group.plan}
                    contributionAmount={group.contributionAmount}
                    payoutAmount={group.payoutAmount}
                />

                <GroupMembersList
                    members={group.members}
                    contributions={group.contributions}
                />

            </ScrollView>

            <GroupCashOutButton
                onPress={() => router.push({
                    pathname: "/withdraw/[id]",
                    params: { id: group.id }
                })}
            />
        </SafeAreaView>
    )
}
export default GroupDetailsScreen
const styles = StyleSheet.create({
    safeArea: {
        flex: 1
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    scrollContent: {
        paddingHorizontal: 20,
        paddingBottom: 24,
        gap: 24
    },
});