


import { ThemedText } from '@/components/ThemedText';
import { useTheme } from '@/hooks/use-theme';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, TouchableOpacity, View } from 'react-native'


const RecentActivity = () => {
    const theme = useTheme();
    const activities = [
        { id: '1', type: 'payout', title: 'Tech Enthusiasts Circle', amount: 1000000, date: 'Today, 10:42 AM' },
        { id: '2', type: 'contribution', title: 'Juru Savings Circle', amount: 50000, date: 'Yesterday, 2:30 PM' },
        { id: '3', type: 'deposit', title: 'Wallet Top-up', amount: 150000, date: 'Oct 22, 2026' },
    ];
    
    return (
        <View style={styles.sectionContainer}>
            <View style={styles.sectionHeader}>
                <ThemedText style={styles.sectionTitle} type="muted">Recent Activity</ThemedText>
            </View>
            <View style={styles.pulseContainer}>
                {activities.map((item, index) => {
                    const isIncoming = item.type === 'payout' || item.type === 'deposit';
                    return (
                        <TouchableOpacity
                            key={item.id}
                            style={[styles.pulseRow, { borderBottomColor: index === activities.length - 1 ? 'transparent' : theme.border }]}
                            activeOpacity={0.2}
                        >
                            <View style={styles.pulseLeft}>
                                <View style={[styles.pulseIcon, { backgroundColor: isIncoming ? `${theme.success}1A` : `${theme.destructive}1A` }]}>
                                    <Ionicons name={isIncoming ? "arrow-down-circle" : "arrow-up-circle"} size={20} color={isIncoming ? theme.success : theme.destructive} />
                                </View>
                                <View>
                                    <ThemedText type="defaultSemiBold" style={styles.pulseTitle}>{item.title}</ThemedText>
                                    <ThemedText type="muted" style={styles.pulseDate}>{item.date}</ThemedText>
                                </View>
                            </View>
                            <ThemedText type="defaultSemiBold" style={{ color: isIncoming ? theme.success : theme.foreground, fontSize: 14 }}>
                                {isIncoming ? '+' : '-'}₦{item.amount.toLocaleString()}
                            </ThemedText>
                        </TouchableOpacity>
                    );
                })}
            </View>
        </View>
    )
}
export default RecentActivity
const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 10,
        gap: 10
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    sectionTitle: {
        fontSize: 18
    },
    pulseContainer: {
        paddingHorizontal: 4
    },
    pulseRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1
    },
    pulseLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12
    },
    pulseIcon: { 
        width: 40, 
        height: 40, 
        borderRadius: 20, 
        justifyContent: 'center',
        alignItems: 'center'
    },
    pulseTitle: { 
        fontSize: 15,
        marginBottom: 2
    },
    pulseDate: { 
        fontSize: 12 
    },
})