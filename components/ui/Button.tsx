

import { useTheme } from '@/hooks/use-theme';
import {
    TouchableOpacity,
    TouchableOpacityProps,
    ActivityIndicator,
    StyleSheet,
    View,
} from 'react-native';
import { ThemedText } from '../ThemedText';


export type ThemedButtonProps = TouchableOpacityProps & { 
    title: string;
    variant?: 'primary' | 'secondary' | 'destructive' | 'outline';
    isLoading?: boolean;
    icon?: React.ReactNode;
};

const Button =({
    title,
    variant = 'primary',
    isLoading = false,
    disabled = false,
    icon,
    style,
    ...rest
}: ThemedButtonProps) => {
    const theme = useTheme();

    let backgroundColor: string;
    let textColor: string;
    let borderColor: string | undefined;

    switch (variant) {
        case 'secondary':
            backgroundColor = theme.secondary;
            textColor = theme.secondaryForeground;
            break;
        case 'destructive':
            backgroundColor = theme.destructive;
            textColor = theme.destructiveForeground;
            break;
        case 'outline':
            backgroundColor = 'transparent';
            textColor = theme.foreground;
            borderColor = theme.border;
            break;
        case 'primary':
        default:
            backgroundColor = theme.primary;
            textColor = theme.primaryForeground;
            break;
    }

    
    if (disabled || isLoading) {
        backgroundColor = theme.muted;
        textColor = theme.mutedForeground;
        if (variant === 'outline') {
            borderColor = theme.muted;
        }
    }

    return (
        <TouchableOpacity
            disabled={disabled || isLoading}
            activeOpacity={0.8}
            style={[
                styles.button,
                { backgroundColor },
                borderColor ? { borderWidth: 1, borderColor } : undefined,
                style,
            ]}
            {...rest}
        >
            {isLoading ? (
                <ActivityIndicator color={textColor} />
            ) : (
                <View style={styles.contentContainer}>
                    {icon && <View style={styles.iconWrapper}>{icon}</View>}
                    <ThemedText
                        style={[styles.text, { color: textColor }]}
                        type="defaultSemiBold"
                    >
                        {title}
                    </ThemedText>
                </View>
            )}
        </TouchableOpacity>
    );
}

export default Button;

const styles = StyleSheet.create({
    button: {
        height: 52,
        borderRadius: 999,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 24,
        width: '100%',
    },
    contentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconWrapper: {
        marginRight: 8,
    },
    text: {
        fontSize: 16,
    },
});