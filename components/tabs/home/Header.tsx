

import { ThemedText } from '@/components/ThemedText'
import { User } from '@/context/AuthContext'
import { useTheme } from '@/hooks/use-theme'
import { Ionicons } from '@expo/vector-icons'
import { StyleSheet, View } from 'react-native'
import { Avatar } from '../../ui/Avatar'

const Header = ({ user }: { user: User | null }) => {
    const theme = useTheme();
    const greeting = () => {
        const hour = new Date().getHours();
        if (hour < 12) return 'Good morning';
        if (hour < 18) return 'Good afternoon';
        return 'Good evening';
    }

    const username = user?.fullName.split(' ')[0] || 'User';

    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <View style={styles.userInfo}>
                    <Avatar
                        name={user?.fullName || 'User'}
                        size={48}
                    />
                    <View >
                        <ThemedText style={styles.greetingText}>{greeting()} </ThemedText>
                        <ThemedText type='defaultSemiBold' style={styles.usernameText}>{username}</ThemedText>
                    </View>
                </View>

                <View style={[styles.notificationIcon, { backgroundColor: theme.card }]}>
                    <Ionicons name="notifications-outline" size={24} color={theme.foreground} />

                    <View style={[styles.badge, { backgroundColor: theme.destructive }]} />
                </View>
            </View>
        </View>
    )
}
export default Header
const styles = StyleSheet.create({
    container: {
        paddingVertical: 16,
    },
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },

    greetingText: {
        justifyContent: 'center',
        opacity: 0.7,
    },

    usernameText: {
        fontSize: 18,
    },
    notificationIcon: {
        width: 44,
        height: 44,
        borderRadius: 22,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    badge: {
        position: 'absolute',
        top: 10,
        right: 12,
        width: 8,
        height: 8,
        borderRadius: 4,
    },
})