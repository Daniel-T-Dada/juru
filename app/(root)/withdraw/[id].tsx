


import React from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, Platform } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useTheme } from '@/hooks/use-theme';
import { ThemedText } from '@/components/ThemedText';
import { GROUPS } from '@/constants/groups';

import WithdrawHeader from '@/components/withdraw/WithdrawHeader';
import WithdrawBalanceCard from '@/components/withdraw/WithdrawBalanceCard';
import WithdrawAmountInput from '@/components/withdraw/WithdrawAmountInput';
import { WithdrawInfoAlert, WithdrawPendingRequest } from '@/components/withdraw/WithdrawNotices';

const WithdrawScreen = () => {
    const { id } = useLocalSearchParams();
    const theme = useTheme();

    // In a real app, you might fetch specific wallet balance, but we'll use payoutAmount here
    const group = GROUPS.find((g) => g.id === id);

    return (
        <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.background }]}>

            <WithdrawHeader />

            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                <WithdrawBalanceCard
                    balance={group?.payoutAmount || 25000}
                    progress={85}
                />

                <WithdrawAmountInput />

                <WithdrawInfoAlert />

                <WithdrawPendingRequest />
            </ScrollView>

            {/* Sticky Bottom Button */}
            <View style={[styles.footer, { backgroundColor: theme.background, borderTopColor: theme.border }]}>
                <TouchableOpacity
                    style={[styles.submitButton, { backgroundColor: theme.primary }]}
                    activeOpacity={0.8}
                >
                    <ThemedText style={[styles.submitButtonText, { color: theme.primaryForeground }]} type="defaultSemiBold">
                        Request Withdrawal
                    </ThemedText>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    );
};

export default WithdrawScreen;

const styles = StyleSheet.create({
    safeArea: { flex: 1 },
    scrollContent: { paddingHorizontal: 20, paddingBottom: 40, paddingTop: 12 },
    footer: {
        paddingHorizontal: 20,
        paddingTop: 16,
        paddingBottom: Platform.OS === 'ios' ? 0 : 16,
        borderTopWidth: 1,
    },
    submitButton: { width: '100%', paddingVertical: 18, borderRadius: 100, alignItems: 'center', justifyContent: 'center' },
    submitButtonText: { fontSize: 16, letterSpacing: 0.5 },
});