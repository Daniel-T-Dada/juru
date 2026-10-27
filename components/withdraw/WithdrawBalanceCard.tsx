

import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@/hooks/use-theme';
import { ThemedText } from '@/components/ThemedText';

interface WithdrawBalanceCardProps {
    balance: number;
    progress: number; // e.g., 85
}

const WithdrawBalanceCard = ({ balance, progress }: WithdrawBalanceCardProps) => {
    const theme = useTheme();
    const [showBalance, setShowBalance] = useState(true);

    return (
        <View style={[styles.card, { backgroundColor: theme.card }]}>
            <View style={styles.topRow}>
                <ThemedText type="muted">Group Balance</ThemedText>
                <TouchableOpacity onPress={() => setShowBalance(!showBalance)} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
                    <Ionicons name={showBalance ? "eye-outline" : "eye-off-outline"} size={20} color={theme.primary} />
                </TouchableOpacity>
            </View>

            <ThemedText style={styles.balanceText} type="defaultSemiBold">
                {showBalance ? `₦${balance.toLocaleString()}` : '••••••••'}
            </ThemedText>

            <View style={[styles.progressBarBg, { backgroundColor: theme.border }]}>
                <View style={[styles.progressBarFill, { backgroundColor: theme.primary, width: `${progress}%` }]} />
            </View>

            <View style={styles.progressTextRow}>
                <ThemedText type="muted" style={{ fontSize: 12 }}>Progress</ThemedText>
                <ThemedText type="defaultSemiBold" style={{ fontSize: 12 }}>{progress}%</ThemedText>
            </View>
        </View>
    );
};

export default WithdrawBalanceCard;

const styles = StyleSheet.create({
    card: { padding: 20, borderRadius: 16, marginBottom: 16, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 4, elevation: 2 },
    topRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 },
    balanceText: { fontSize: 28, letterSpacing: 1, marginBottom: 20 },
    progressBarBg: { height: 8, borderRadius: 4, width: '100%', marginBottom: 8, overflow: 'hidden' },
    progressBarFill: { height: '100%', borderRadius: 4 },
    progressTextRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
});