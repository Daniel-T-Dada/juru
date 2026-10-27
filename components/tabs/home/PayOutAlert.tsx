


import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView'
import { useTheme } from '@/hooks/use-theme';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { GROUPS } from '@/constants/groups';

const PayOutAlert = () => {
    const theme = useTheme();
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => console.log("PayOutAlert pressed")}
        >
            <ThemedView style={[styles.container, { backgroundColor: theme.primary }]}>
                <View style={{ flexDirection: 'column', gap: 4 }}>
                    <ThemedText style={[styles.groupName, { color: theme.primaryForeground }]}>{GROUPS[0].name}</ThemedText>
                    <ThemedText style={{ color: `${theme.muted}9A` }}>It&apos;s your turn! Cashout now</ThemedText>
                </View>
                <Ionicons name="arrow-up-right-box-outline" size={16} color={theme.primaryForeground} />
            </ThemedView>
        </TouchableOpacity>
    )
}
export default PayOutAlert
const styles = StyleSheet.create({
    container: {
        padding: 20,
        borderRadius: 16,
        marginTop: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    groupName: {
        fontSize: 20,
        fontWeight: "700"
    }
})