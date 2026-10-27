import { useTheme } from '@/hooks/use-theme';
import React, { useState } from 'react';
import {
    TextInput,
    View,
    StyleSheet,
    TouchableOpacity,
    type TextInputProps,
    type StyleProp,
    type ViewStyle,
} from 'react-native';
import { ThemedText } from '../ThemedText';
import { Fonts } from '@/constants/theme';
import { Ionicons } from '@expo/vector-icons';

export type ThemedTextInputProps = TextInputProps & {
    label?: string;
    error?: string;
    helperText?: string;
    leftAccessory?: React.ReactNode;
    rightAccessory?: React.ReactNode;
    containerStyle?: StyleProp<ViewStyle>;
    isPassword?: boolean;
};

export function ThemedTextInput({
    label,
    error,
    helperText,
    leftAccessory,
    rightAccessory,
    containerStyle,
    style,
    onFocus,
    onBlur,
    editable = true,
    isPassword = false,
    secureTextEntry,
    ...rest
}: ThemedTextInputProps) {
    const theme = useTheme();
    const [isFocused, setIsFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleFocus = (e: any) => {
        setIsFocused(true);
        onFocus?.(e);
    };

    const handleBlur = (e: any) => {
        setIsFocused(false);
        onBlur?.(e);
    };

    let borderColor: string = theme.border;
    if (error) {
        borderColor = theme.destructive;
    } else if (isFocused) {
        borderColor = theme.primary;
    }

    const containerOpacity = editable ? 1 : 0.6;

    return (
        <View style={[styles.container, containerStyle, { opacity: containerOpacity }]}>
            {/* 1. Optional Input Label */}
            {label && (
                <ThemedText style={styles.label} type="defaultSemiBold">
                    {label}
                </ThemedText>
            )}

            {/* 2. Input Box Area */}
            <View
                style={[
                    styles.inputWrapper,
                    {
                        backgroundColor: theme.input,
                        borderColor,
                        borderWidth: isFocused || error ? 1.5 : 1,
                    },
                ]}
            >
                {leftAccessory && <View style={styles.leftAccessory}>{leftAccessory}</View>}

                <TextInput
                    style={[
                        styles.input,
                        {
                            color: theme.foreground,
                            fontFamily: Fonts.sans,
                        },
                        style,
                    ]}
                    placeholderTextColor={theme.mutedForeground}
                    selectionColor={theme.primary}
                    editable={editable}
                    secureTextEntry={isPassword ? !showPassword : secureTextEntry}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    {...rest}
                />

                {/* Dynamic Right Accessory / Password Visibility Toggle */}
                {isPassword ? (
                    <TouchableOpacity
                        style={styles.rightAccessory}
                        onPress={() => setShowPassword((prev) => !prev)}
                        activeOpacity={0.7}
                    >
                        <Ionicons
                            name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                            size={20}
                            color={theme.mutedForeground}
                        />
                    </TouchableOpacity>
                ) : (
                    rightAccessory && <View style={styles.rightAccessory}>{rightAccessory}</View>
                )}
            </View>

            {/* 3. Error or Helper Text */}
            {error ? (
                <ThemedText themeColor="destructive" style={styles.messageText}>
                    {error}
                </ThemedText>
            ) : helperText ? (
                <ThemedText type="muted" style={styles.messageText}>
                    {helperText}
                </ThemedText>
            ) : null}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginVertical: 6,
    },
    label: {
        fontSize: 14,
        marginBottom: 6,
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 52,
        borderRadius: 999,
        paddingHorizontal: 14,
    },
    input: {
        flex: 1,
        height: '100%',
        fontSize: 16,
        paddingVertical: 0,
    },
    leftAccessory: {
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    rightAccessory: {
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    messageText: {
        fontSize: 12,
        marginTop: 4,
        marginLeft: 2,
    },
});