


import { StyleSheet, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useAuth } from '@/context/AuthContext'
import { ThemedView } from '@/components/ThemedView'
import { router } from 'expo-router';
import ProfileHeader from '@/components/tabs/profile/Header';
import Button from '@/components/ui/Button';


const ProfileScreen = () => {
  const { user, updateUser, signout, isLoading } = useAuth();

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission Denied', 'Sorry, we need camera roll permissions to upload an avatar.');
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.5,
    });

    if (!result.canceled) {
      await updateUser({ avatarUrl: result.assets[0].uri });
    }
  };

  const signOutPress = () => {
    Alert.alert(
      'Sign out',
      'Are you sure you want to sign out?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Sign Out',
          style: 'destructive',
          onPress: async () => {
            try {
              await signout();
              router.replace('/(auth)/welcome');
            } catch (error) {
              console.error('Unable to sign out:', error);
              Alert.alert('Sign out failed', 'Please try again.');
            }
          },
        },
      ],
    );
  };

  return (
    <ThemedView style={styles.container}>

      <ProfileHeader
        user={user}
        onEditAvatar={pickImage}
      />

      <Button
        title="Sign Out"
        onPress={signOutPress}
        isLoading={isLoading}
      />
    </ThemedView>
  );
}

export default ProfileScreen;

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 20, paddingTop: 20 },
  header: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  avatarWrapper: {
    position: 'relative',
    marginBottom: 16,
  },
});