


import { ThemedView } from '@/components/ThemedView'
import { useTheme } from '@/hooks/use-theme';
import { Image } from 'expo-image'
import { Alert, Keyboard, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { ThemedText } from '@/components/ThemedText';
import { ThemedTextInput } from '@/components/ui/ThemedTextInput';
import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { Ionicons } from '@expo/vector-icons';
import Button from '@/components/ui/Button';
import { signupSchema } from '@/utils/validations';
import { router } from 'expo-router';
const signup = () => {
    const theme = useTheme();
    const { signup, isLoading } = useAuth()
    const [showPassword, setShowPassword] = useState(false);
    const [form, setForm] = useState({
        fullName: '',
        email: '',
        password: '',
    })
    const [errors, setErrors] = useState({
        fullName: '',
        email: '',
        password: '',
    });

    const onSignUpPress = async () => {
        if (isLoading) return; 

        const isValid = signupSchema.safeParse(form);
        if (!isValid.success) {
            const formattedErrors = isValid.error.format();
            setErrors({
                fullName: formattedErrors.fullName?._errors[0] || '',
                email: formattedErrors.email?._errors[0] || '',
                password: formattedErrors.password?._errors[0] || '',
            });
            return;
        }
        setErrors({ fullName: '', email: '', password: '' }); 
        try {
            await signup(isValid.data.email, isValid.data.password, isValid.data.fullName);

            router.replace("/(root)/(tabs)/home");
        } catch (error) {
            console.error('Error signing up:', error);
            Alert.alert('Sign Up Failed', 'An error occurred while signing up. Please try again.');
        }
    };

    const handleInputChange = (field: string, value: string) => {
        setForm((prevForm) => ({
            ...prevForm,
            [field]: value,
        }));

        if (errors[field as keyof typeof errors]) {
            setErrors((prev) => ({ ...prev, [field]: '' }));
        }
    }

   

    return (
        <ThemedView style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.keyboardAvoid}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <ScrollView
                        contentContainerStyle={styles.scrollContent}
                        bounces={false}
                        showsVerticalScrollIndicator={false}
                    >
                        <View style={styles.imgContainer}>
                            <Image
                                source={require('@/assets/images/auth/Savings.png')}
                                // style={styles.image}
                                style={styles.image}
                                contentFit="cover"
                            />

                            <LinearGradient
                                colors={['rgba(0,0,0,0.1)', 'rgba(0,0,0,0.4)', theme.background]}
                                locations={[0, 0.5, 1]}
                                style={styles.gradientOverlay}
                            />

                            <ThemedText style={styles.title}>Create Your Account</ThemedText>
                        </View>
                        <View style={styles.contentContainer}>

                            <ThemedText style={styles.headerSubtitle}>Join Juru to start saving towards your goals safely</ThemedText>

                            <ThemedTextInput
                                label="Full Name"
                                placeholder="John Doe"
                                value={form.fullName}
                                onChangeText={(value) => handleInputChange('fullName', value)}
                                error={errors.fullName}
                                leftAccessory={
                                    <Ionicons name="person-outline" size={20} color={theme.mutedForeground} />
                                }
                            />
                            <ThemedTextInput
                                label="Email"
                                placeholder="john.doe@example.com"
                                value={form.email}
                                onChangeText={(value) => handleInputChange('email', value)}
                                error={errors.email}
                                leftAccessory={
                                    <Ionicons name="mail-outline" size={20} color={theme.mutedForeground} />
                                }
                            />
                            <ThemedTextInput
                                label="Password"
                                placeholder="••••••••"
                                value={form.password}
                                onChangeText={(value) => handleInputChange('password', value)}
                                error={errors.password}
                                leftAccessory={
                                    <Ionicons name="lock-closed-outline" size={20} color={theme.mutedForeground} />
                                }
                                rightAccessory={
                                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                                        <Ionicons
                                            name={showPassword ? 'eye-outline' : 'eye-off-outline'}
                                            size={20}
                                            color={theme.mutedForeground}
                                        />
                                    </TouchableOpacity>
                                }
                                secureTextEntry={!showPassword}
                            />

                            <Button
                                variant='primary'
                                title={isLoading ? "Signing Up..." : "Sign Up"}
                                style={{ marginTop: 20 }}
                                onPress={onSignUpPress}
                            />
                            <View style={styles.dividerContainer}>
                                <View style={[styles.divider, { borderColor: theme.border }]} />
                                <ThemedText style={{ color: theme.mutedForeground }}>Or</ThemedText>
                                <View style={[styles.divider, { borderColor: theme.border }]} />
                            </View>

                            <View style={styles.socialButtonsContainer}>
                                <Button
                                    icon={<Ionicons name="logo-google" size={20} color={theme.primary} />}
                                    variant='secondary'
                                    title="Continue with Google"
                                />
                            </View>

                            <View style={styles.footer}>
                                <ThemedText style={{ color: theme.mutedForeground }}>
                                    Already have an account?{' '}
                                </ThemedText>
                                <TouchableOpacity onPress={() => { router.replace("/(auth)/signin") }}>
                                    <ThemedText style={{ fontWeight: 800 }} themeColor="primary">
                                        Sign in
                                    </ThemedText>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </ScrollView>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </ThemedView>
    )
}
export default signup
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    keyboardAvoid: {
        flex: 1,
    },

    scrollContent: {
        flexGrow: 1,
    },
    imgContainer: {
        position: "relative",
        width: "100%",
        height: 250
    },
    image: {
        zIndex: 1,
        width: "100%",
        height: "100%",
    },

    gradientOverlay: {
        ...StyleSheet.absoluteFill,
        zIndex: 2,
    },

    title: {
        position: "absolute",
        zIndex: 3,
        bottom: 20,
        left: 20,
        right: 20,
        fontSize: 28,
        fontWeight: "bold",
    },

    contentContainer: {
        flex: 1,
        padding: 20,
        paddingBottom: 40,
        zIndex: 3,
        marginTop: -20,
        gap: 10,
    },

    headerSubtitle: {
        fontSize: 14,
        opacity: 0.7,
        marginBottom: 20,
    },

    dividerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center', 
        marginVertical: 10,
        gap: 20
    },

    divider: {
        height: 1,
        width: "40%",
        borderWidth: 1,
    },
    socialButtonsContainer: {
        flexDirection: 'column',
        gap: 10,
    },

    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 6
    }
})