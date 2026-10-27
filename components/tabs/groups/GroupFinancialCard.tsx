

import { StyleSheet, View } from 'react-native';
import { useTheme } from '@/hooks/use-theme';
import { ThemedText } from '@/components/ThemedText';

interface GroupFinanceCardProps {
    plan: string;
    contributionAmount: number;
    payoutAmount: number;
}

const GroupFinanceCard = ({ plan, contributionAmount, payoutAmount }: GroupFinanceCardProps) => {
    const theme = useTheme();

    return (
        <View style={styles.section}>
            <ThemedText type="defaultSemiBold" style={styles.sectionTitle}>Financials</ThemedText>
            
            <View style={[styles.financeCard, { backgroundColor: theme.card }]}>
                <View style={styles.financeRow}>
                    <ThemedText style={styles.financeLabel}>Contribution ({plan})</ThemedText>
                    <ThemedText style={styles.financeValue}>₦{contributionAmount.toLocaleString()}</ThemedText>
                </View>
                <View style={styles.financeDivider} />
                <View style={styles.financeRow}>
                    <ThemedText style={styles.financeLabel}>Total Payout</ThemedText>
                    <ThemedText style={[styles.financeValue, { fontSize: 18 }]}>₦{payoutAmount.toLocaleString()}</ThemedText>
                </View>
            </View>
        </View>
    );
};

export default GroupFinanceCard;

const styles = StyleSheet.create({
    section: { gap: 12 },
    sectionTitle: { fontSize: 18 },
    financeCard: { padding: 20, borderRadius: 16 },
    financeRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
    financeLabel: { color: '#FFFFFF', opacity: 0.8 },
    financeValue: { color: '#FFFFFF', fontWeight: 'bold' },
    financeDivider: { height: 1, backgroundColor: 'rgba(255,255,255,0.2)', marginVertical: 12 },
});