

import { Ionicons } from '@expo/vector-icons'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import {ThemedText} from '@/components/ThemedText'
import { Avatar } from '@/components/ui/Avatar'
import { useTheme } from "@/hooks/use-theme"



const ProfileHeader = ({ user, onEditAvatar }) => {
const theme = useTheme()
    return (
        <View style={styles.header}>

            <TouchableOpacity onPress={onEditAvatar} style={styles.avatarWrapper}>
               
                <Avatar
                    name={user?.fullName}
                    uri={user?.avatarUrl}
                    size={100}
                />

                <View style={[styles.editBadge, { backgroundColor: theme.primary, borderColor: theme.foreground }]}>
                    <Ionicons name="camera" size={16} color={theme.secondary} />
                </View>
            </TouchableOpacity>

            <ThemedText style={styles.nameText} type="defaultSemiBold">
                {user?.fullName}
            </ThemedText>
            <ThemedText style={styles.emailText} type="muted">
                {user?.email}
            </ThemedText>

        </View>
    )
}
export default ProfileHeader

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        paddingVertical: 40,
    },
    avatarWrapper: {
        position: 'relative',
        marginBottom: 16,
    },
    editBadge: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: 32,
        height: 32,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3,
    },
})