
import { ThemedText } from '@/components/ThemedText'
import { useTheme } from '@/hooks/use-theme';
import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router';
import { StyleSheet, TouchableOpacity, View } from 'react-native'


const GroupHeader = () => {
    const theme = useTheme()
    const router = useRouter()
    return (
        <View style={styles.header}>
            <TouchableOpacity
                onPress={() => router.back()}
                style={[styles.backButton, { backgroundColor: theme.card }]}

            >
                <Ionicons name="chevron-back" size={24} color={theme.foreground} />
            </TouchableOpacity>
            <ThemedText style={styles.headerTitle} type="defaultSemiBold">My Groups</ThemedText>
            <View style={styles.placeholder} />
        </View>
    )
}
export default GroupHeader
const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 16,
    },
    backButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 18,
    },
    placeholder: {
        width: 40,
    },
})