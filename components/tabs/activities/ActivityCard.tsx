


import { ThemedText } from '@/components/ThemedText';
import { Activity } from '@/constants/activities';
import { useTheme } from '@/hooks/use-theme';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, TouchableOpacity, View, FlatList } from 'react-native'


interface ActivityCardProps {
    onFilterActivities: Activity[];
    onRenderIcon: (type: string) => React.ReactNode;
}

const ActivityCard = ({ onFilterActivities, onRenderIcon }: ActivityCardProps) => {
    const theme = useTheme()
    return (
        <FlatList
            data={onFilterActivities}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.listContent}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => (
                <View style={styles.emptyContainer}>
                    <Ionicons name="receipt-outline" size={48} color={theme.mutedForeground} />
                    <ThemedText type="muted" style={{ marginTop: 12 }}>No recent activity found.</ThemedText>
                </View>
            )}
            renderItem={({ item }) => {
                const isIncoming = item.type === 'payout' || item.type === 'deposit';

                return (
                    <TouchableOpacity
                        onPress={() => console.log('Activity pressed', item.id)}
                        style={[styles.activityCard, { backgroundColor: theme.card }]}
                        activeOpacity={0.7}
                    >

                        <View style={styles.activityLeft}>
                            <View style={[styles.iconContainer, { backgroundColor: isIncoming ? `${theme.success}1A` : `${theme.destructive}1A` }]}>
                                {onRenderIcon(item.type)}
                            </View>

                            <View>
                                <ThemedText type="defaultSemiBold" style={styles.activityTitle}>
                                    {item.title}
                                </ThemedText>
                                <ThemedText type="muted" style={styles.activityDescription}>
                                    {item.description} • {item.date}
                                </ThemedText>
                            </View>
                        </View>

                        <View style={styles.activityRight}>
                            <ThemedText
                                type="defaultSemiBold"
                                style={[
                                    styles.amountText,
                                    { color: isIncoming ? theme.success : theme.foreground }
                                ]}
                            >
                                {isIncoming ? '+' : '-'}₦{item.amount.toLocaleString()}
                            </ThemedText>

                            {item.status === 'failed' && (
                                <View style={[styles.statusBadge, { backgroundColor: `${theme.destructive}20` }]}>
                                    <ThemedText style={{ color: theme.destructive, fontSize: 10, fontWeight: 'bold' }}>Failed</ThemedText>
                                </View>
                            )}
                        </View>

                    </TouchableOpacity>
                );
            }}
        />
    )
}
export default ActivityCard
const styles = StyleSheet.create({

    listContent: {
        paddingHorizontal: 20,
        paddingBottom: 40,
        gap: 12,
    },
    activityCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        borderRadius: 16,
    },
    activityLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        flex: 1,
    },
    iconContainer: {
        width: 44,
        height: 44,
        borderRadius: 22,
        justifyContent: 'center',
        alignItems: 'center',
    },
    activityTitle: {
        fontSize: 15,
        marginBottom: 4,
    },
    activityDescription: {
        fontSize: 12,
    },
    activityRight: {
        alignItems: 'flex-end',
        gap: 4,
    },
    amountText: {
        fontSize: 15,
    },
    statusBadge: {
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 4,
    },

    emptyContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 60,
    }
})