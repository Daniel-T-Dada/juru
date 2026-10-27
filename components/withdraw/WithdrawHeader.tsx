


import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@/hooks/use-theme';
import { ThemedText } from '@/components/ThemedText';

const WithdrawHeader = () => {
    const theme = useTheme();
    const router = useRouter();

    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={() => router.back()} style={[styles.closeButton, { backgroundColor: theme.card }]}>
                <Ionicons name="close" size={24} color={theme.foreground} />
            </TouchableOpacity>
            <ThemedText style={styles.headerTitle} type="defaultSemiBold">Withdraw</ThemedText>
            <View style={styles.placeholder} />
        </View>
    );
};

export default WithdrawHeader;

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 16
    },
    closeButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerTitle: {
        fontSize: 18
    },
    placeholder: {
        width: 40
    },
});