


import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme } from '@/hooks/use-theme';
import { ThemedText } from '@/components/ThemedText';
import { Ionicons } from '@expo/vector-icons';

export const WithdrawInfoAlert = () => {
    const theme = useTheme();
    // Using primary with high opacity for the blue/teal info alert style
    return (
        <View style={[styles.alertBox, { backgroundColor: `${theme.primary}1A` }]}>
            <Ionicons name="information-circle" size={20} color={theme.primary} />
            <ThemedText style={[styles.alertText, { color: theme.primary }]}>
                Withdrawals require group members approval before funds are released
            </ThemedText>
        </View>
    );
};

export const WithdrawPendingRequest = () => {
    const theme = useTheme();
    return (
        <View style={styles.pendingContainer}>
            <ThemedText type="defaultSemiBold" style={{ marginBottom: 12 }}>Your Last Request</ThemedText>
            <View style={[styles.pendingCard, { backgroundColor: `${theme.warning}1A` }]}>
                <View style={styles.pendingRow}>
                    <View style={[styles.dot, { backgroundColor: theme.warning }]} />
                    <ThemedText style={{ color: theme.warning, flex: 1, fontWeight: '500' }}>
                        Your withdrawal request is pending group approval
                    </ThemedText>
                </View>
                <ThemedText style={{ color: theme.warning, fontSize: 12, marginLeft: 20, marginTop: 8 }}>
                    ₦25,000 • Requested 2 hours ago
                </ThemedText>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    alertBox: { flexDirection: 'row', alignItems: 'center', padding: 16, borderRadius: 12, marginBottom: 24, gap: 12 },
    alertText: { flex: 1, fontSize: 13, lineHeight: 18, fontWeight: '500' },
    pendingContainer: { marginBottom: 24 },
    pendingCard: { padding: 16, borderRadius: 12 },
    pendingRow: { flexDirection: 'row', alignItems: 'flex-start', gap: 12 },
    dot: { width: 8, height: 8, borderRadius: 4, marginTop: 6 },
});