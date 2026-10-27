


import React from 'react';
import { StyleSheet, TouchableOpacity, View, Platform } from 'react-native';
import { useTheme } from '@/hooks/use-theme';
import { ThemedText } from '@/components/ThemedText';

interface GroupCashOutButtonProps {
    onPress?: () => void;
}

const GroupCashOutButton = ({ onPress }: GroupCashOutButtonProps) => {
    const theme = useTheme();

    return (
        <View style={[styles.container, { backgroundColor: theme.background, borderTopColor: theme.border }]}>
            <TouchableOpacity
                style={[styles.button, { backgroundColor: theme.primary }]}
                activeOpacity={0.8}
                onPress={onPress}
            >
                <ThemedText style={[styles.buttonText, { color: theme.primaryForeground }]} type="defaultSemiBold">
                    Cash Out
                </ThemedText>
            </TouchableOpacity>
        </View>
    );
};

export default GroupCashOutButton;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingTop: 16,
        paddingBottom: Platform.OS === 'ios' ? 0 : 16, // SafeAreaView handles iOS bottom padding natively
        borderTopWidth: 1,
    },
    button: {
        width: '100%',
        paddingVertical: 18,
        borderRadius: 100, // Forces the extreme pill shape from your image
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 16,
        letterSpacing: 0.5,
    }
});