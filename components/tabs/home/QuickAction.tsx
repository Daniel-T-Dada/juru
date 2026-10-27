


import { ThemedText } from '@/components/ThemedText';
import { GROUPS } from '@/constants/groups';
import { useTheme } from '@/hooks/use-theme';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import PayOutAlert from './PayOutAlert';


const QuickAction = () => {
    const theme = useTheme();

    const actions = [
        { id: 1, icon: 'add-circle', label: 'Add' },
        { id: 2, icon: 'arrow-down-circle', label: 'Withdraw' },
        { id: 3, icon: 'arrow-forward-circle', label: 'Transfer' },
        { id: 4, icon: 'arrow-up-circle', label: 'Receive' }
    ];

    const groupActions = [
        { id: 1, icon: 'grid-outline', label: 'Create Group' },
        { id: 2, icon: 'people-outline', label: 'Join Group' }
    ]

    return (
        <View style={styles.container}>
            <View style={styles.actionBtnContainer}>
                {actions.map((action) => (
                    <TouchableOpacity
                        key={action.id}
                        style={[styles.actionBtn, { backgroundColor: theme.card }]}
                        activeOpacity={0.8}
                        onPress={() => console.log(`${action.label} pressed`)}
                    >
                        <Ionicons name={action.icon as any} size={24} color={action.icon === "add-circle" ? theme.primary : theme.foreground} />
                        <ThemedText style={styles.actionText} type="defaultSemiBold">{action.label}</ThemedText>
                    </TouchableOpacity>
                ))}
            </View>
            <View style={styles.actionTextContainer}>
                {/* <ThemedText style={{ marginTop: 20 }} type="muted">Quick Actions</ThemedText> */}

                <View style={styles.actionBtnContainer}>
                    {groupActions.map((action) => (
                        <TouchableOpacity
                            key={action.id}
                            style={[styles.actionTextBtn, { backgroundColor: theme.card }]}
                            activeOpacity={0.8}
                            onPress={() => console.log(`${action.label} pressed`)}
                        >
                            <View style={{ backgroundColor: `${theme.primary}2A`, padding: 8, borderRadius: 8 }}>
                                <Ionicons name={action.icon as any} size={24} color={theme.primary} />
                            </View>
                            <ThemedText style={[styles.actionText, { fontSize: 18, marginTop: 16 }]} type="defaultSemiBold">{action.label}</ThemedText>
                            <ThemedText style={styles.actionText} type="muted">{action.id === 1 ? "Start a safe savings circle" : "Join an existing savings circle"}</ThemedText>
                        </TouchableOpacity>
                    ))}
                </View>

                <PayOutAlert/>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 0 }}>
                    <ThemedText style={{fontSize: 16}} type="muted">My Groups</ThemedText>
                    <Link href="/groups">
                        <ThemedText style={{textDecorationLine: 'underline' }} type="link">See All</ThemedText>
                    </Link>
                </View>

                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={GROUPS}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.flatListContent}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={[styles.groupCard, { backgroundColor: theme.card }]} 
                            activeOpacity={0.8}
                            onPress={() => console.log(`${item.name} pressed`)}
                            >

                            {/* Card Header: Name & Member Count */}
                            <View style={styles.groupCardHeader}>
                                <ThemedText type="defaultSemiBold" style={styles.groupName} numberOfLines={1}>
                                    {item.name}
                                </ThemedText>
                                <View style={[styles.memberBadge, { backgroundColor: `${theme.primary}20` }]}>
                                   
                                    <ThemedText style={{ fontSize: 12, color: theme.primary, fontWeight: 'bold' }}>
                                        {item.plan}
                                    </ThemedText>
                                </View>
                            </View>

                            {/* Card Body: Amounts */}
                            <View style={styles.groupCardBody}>
                                <View>
                                    <ThemedText type="muted" style={styles.cardLabel}>Contribution</ThemedText>
                                    <ThemedText type="defaultSemiBold">₦{item.contributionAmount.toLocaleString()}</ThemedText>
                                </View>
                                <View style={{ alignItems: 'flex-end' }}>
                                    <ThemedText type="muted" style={styles.cardLabel}>Payout</ThemedText>
                                    <ThemedText type="defaultSemiBold" style={{ color: theme.primary }}>
                                        ₦{item.payoutAmount.toLocaleString()}
                                    </ThemedText>
                                </View>
                            </View>

                            {/* Card Footer: Next Payout Info */}
                            <View style={[styles.groupCardFooter, { borderTopColor: theme.border }]}>
                              
                                <ThemedText type="muted" style={styles.footerText}>
                                    Next: <ThemedText style={{ fontSize: 12 }}>{item.nextPayout}</ThemedText>
                                </ThemedText>
                            </View>

                        </TouchableOpacity>
                    )}
                />

            </View>
        </View>
    )
}
export default QuickAction
const styles = StyleSheet.create({
    container: {

    },

    actionBtnContainer: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        marginTop: 10,
        gap: 10,
    },

    actionBtn: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 16,
        borderRadius: 16,
        gap: 8,
    },
    actionText: {
        fontSize: 14,
    },

    actionTextContainer: {
        gap: 10,
    },

    actionTextBtn: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingVertical: 20,
        borderRadius: 16,
        paddingHorizontal: 20,

    },

    groupsHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 16,
        marginBottom: 8,
    },
    flatListContent: {
        gap: 10,
        paddingRight: 20, 
        paddingBottom: 10,
    },

 
    groupCard: {
        width: 260, 
        padding: 16,
        borderRadius: 16,
    },
    groupCardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    groupName: {
        fontSize: 16,
        flex: 1,
        marginRight: 10,
    },
    memberBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 12,
        gap: 4,
    },
    groupCardBody: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    cardLabel: {
        fontSize: 12,
        marginBottom: 4,
    },
    groupCardFooter: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 12,
        borderTopWidth: 1,
        gap: 6,
    },
    footerText: {
        fontSize: 12,
    },
})