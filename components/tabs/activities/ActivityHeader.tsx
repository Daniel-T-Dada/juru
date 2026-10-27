



import { ThemedText } from '@/components/ThemedText'
import { useTheme } from '@/hooks/use-theme'
import { Ionicons } from '@expo/vector-icons'
import { StyleSheet, TouchableOpacity, View } from 'react-native'


const ActivityHeader = () => {
    const theme = useTheme()
    return (
        <View style={styles.header}>
            <ThemedText style={styles.headerTitle} type="defaultSemiBold">Activity</ThemedText>
            <TouchableOpacity style={[styles.searchButton, { backgroundColor: theme.card }]}>
                <Ionicons name="search-outline" size={20} color={theme.foreground} />
            </TouchableOpacity>
        </View>
    )
}
export default ActivityHeader
const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 16,
    },
    headerTitle: {
        fontSize: 24,
    },
    searchButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
})