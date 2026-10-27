


import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { useTheme } from '@/hooks/use-theme';
import { ThemedText } from '@/components/ThemedText';
import { Ionicons } from '@expo/vector-icons';

const WithdrawAmountInput = () => {
    const theme = useTheme();

    return (
        <View style={[styles.card, { backgroundColor: theme.card }]}>
            <ThemedText type="defaultSemiBold" style={{ marginBottom: 16 }}>Withdrawal Amount</ThemedText>

            <View style={[styles.inputWrapper, { backgroundColor: theme.input }]}>
                <View style={styles.currencyPrefix}>
                    <ThemedText style={{ fontSize: 20 }}>🇳🇬</ThemedText>
                    <Ionicons name="chevron-down" size={16} color={theme.mutedForeground} style={{ marginHorizontal: 4 }} />
                </View>

                <ThemedText style={styles.nairaSymbol}>₦</ThemedText>
                <TextInput
                    style={[styles.input, { color: theme.foreground }]}
                    placeholder="0.00"
                    placeholderTextColor={theme.mutedForeground}
                    keyboardType="numeric"
                />
            </View>
        </View>
    );
};

export default WithdrawAmountInput;

const styles = StyleSheet.create({
    card: {
        padding: 20,
        borderRadius: 16,
        marginBottom: 16
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 12,
        paddingHorizontal: 16,
        height: 60
    },
    currencyPrefix: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRightWidth: 1,
        borderRightColor: '#CBD5E1',
        paddingRight: 12,
        marginRight: 12
    },
    nairaSymbol: {
        fontSize: 18,
        fontWeight: 'bold',
        marginRight: 4
    },
    input: {
        flex: 1,
        fontSize: 18,
        fontWeight: '600'
    },
});