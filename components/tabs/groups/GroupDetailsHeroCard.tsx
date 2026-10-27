


import { StyleSheet, View } from 'react-native';
import { useTheme } from '@/hooks/use-theme';
import { ThemedText } from '@/components/ThemedText';
import { Group } from '@/constants/groups';

interface GroupHeroCardProps {
    group: Group;
}

const GroupHeroCard = ({ group }: GroupHeroCardProps) => {
    const theme = useTheme();

    return (
        <View style={[styles.heroCard, { backgroundColor: theme.card }]}>
            <ThemedText type="defaultSemiBold" style={styles.heroTitle}>{group.name}</ThemedText>
            <ThemedText type="muted" style={styles.heroDesc}>{group.description}</ThemedText>

            <View style={[styles.heroStatsRow, { borderTopColor: theme.border }]}>
                <View style={styles.statBox}>
                    <ThemedText type="muted" style={styles.statLabel}>Cycle</ThemedText>
                    <ThemedText type="defaultSemiBold">{group.cycle}</ThemedText>
                </View>
                <View style={styles.statBox}>
                    <ThemedText type="muted" style={styles.statLabel}>Status</ThemedText>
                    <ThemedText type="defaultSemiBold" style={{ color: theme.success }}>{group.status}</ThemedText>
                </View>
            </View>
        </View>
    );
};

export default GroupHeroCard;

const styles = StyleSheet.create({
    heroCard: {
        padding: 20,
        borderRadius: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2
    },
    heroTitle: {
        fontSize: 24,
        marginBottom: 8
    },
    heroDesc: { 
        fontSize: 14,
        marginBottom: 16,
        lineHeight: 20
    },
    heroStatsRow: { 
        flexDirection: 'row',
        gap: 20,
        paddingTop: 16,
        borderTopWidth: 1
    },
    statBox: { flex: 1 },
    statLabel: { 
        fontSize: 12,
        marginBottom: 4
    },
});