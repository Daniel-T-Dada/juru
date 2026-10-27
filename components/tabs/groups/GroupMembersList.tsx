

import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme } from '@/hooks/use-theme';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Group } from '@/constants/groups';

interface GroupMembersListProps {
    members: number;
    contributions: Group['contributions'];
}

const GroupMembersList = ({ members, contributions }: GroupMembersListProps) => {
    const theme = useTheme();

    return (
        <View style={styles.section}>
            <View style={styles.sectionHeader}>
                <ThemedText type="defaultSemiBold" style={styles.sectionTitle}>Members ({members})</ThemedText>
            </View>

            <ThemedView style={[styles.contributionsContainer, { backgroundColor: theme.card }]}>
                {contributions.map((contribution, index) => (
                    <View
                        key={index}
                        style={[
                            styles.contributionRow,
                            { borderBottomColor: index === contributions.length - 1 ? 'transparent' : theme.border }
                        ]}
                    >
                        <View style={styles.contributionLeft}>
                            <View style={[styles.avatarPlaceholder, { backgroundColor: `${theme.primary}20` }]}>
                                <ThemedText style={{ color: theme.primary, fontWeight: 'bold' }}>
                                    {contribution.member.charAt(0)}
                                </ThemedText>
                            </View>
                            <View>
                                <ThemedText type="defaultSemiBold">{contribution.member}</ThemedText>
                                <ThemedText type="muted" style={{ fontSize: 12 }}>{contribution.date}</ThemedText>
                            </View>
                        </View>
                        <ThemedText type="defaultSemiBold">₦{contribution.amount.toLocaleString()}</ThemedText>
                    </View>
                ))}
            </ThemedView>
        </View>
    );
};

export default GroupMembersList;

const styles = StyleSheet.create({
    section: { gap: 12 },
    sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
    sectionTitle: { fontSize: 18 },
    contributionsContainer: { borderRadius: 16, paddingHorizontal: 16 },
    contributionRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 16, borderBottomWidth: 1 },
    contributionLeft: { flexDirection: 'row', alignItems: 'center', gap: 12 },
    avatarPlaceholder: { width: 40, height: 40, borderRadius: 20, justifyContent: 'center', alignItems: 'center' },
});