

import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import { useTheme } from '@/hooks/use-theme';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native'


const TotalBanner = () => {
    const [eyeVisible, setEyeVisible] = useState<boolean>(true);
    const theme = useTheme();
    return (
        <ThemedView style={[styles.container, { backgroundColor: theme.primary }]}>
            <ThemedText style={[styles.title, { color: `${theme.muted}9A` }]}>
                Total Balance
            </ThemedText>

            <View style={styles.balanceContainer}>
                <ThemedText style={[styles.totalBalance, { color: theme.primaryForeground }]}>
                    {eyeVisible ? '₦15,345.67' : '******'}
                </ThemedText>

                <Pressable onPress={() => setEyeVisible(!eyeVisible)}
                    hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                >
                    <Ionicons
                        name={eyeVisible ? 'eye' : 'eye-off'}
                        size={24}
                        color={theme.primaryForeground}
                    />
                </Pressable>
            </View>



            <View style={[styles.footerContainer, { backgroundColor: '#B8E8D9', alignSelf: 'flex-start' }]}>
                <ThemedText style={[styles.footerText, { color: theme.secondary }]} >Your earning from 3 groups</ThemedText>
                <Ionicons name="arrow-down" size={16} color={theme.secondary} />
            </View>
        </ThemedView>
    )
}
export default TotalBanner
const styles = StyleSheet.create({
    container: {
        paddingVertical: 30,
        borderRadius: 16,
        paddingHorizontal: 20,
        marginTop: 20,
    },

    title: {
        fontSize: 16,
        fontWeight: '600',
    },

    balanceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 6,
    },

    totalBalance: {
        fontSize: 32,
        fontWeight: '700',
        marginTop: 4,
    },
    footerContainer:{
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        borderRadius: 16,
        paddingVertical: 8,
        paddingHorizontal: 12,
    },
    footerText: {
        fontSize: 14,
        opacity: 0.7,
    }
})