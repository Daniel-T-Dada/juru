import { Text, type TextProps, StyleSheet } from 'react-native';
import { ThemeColor, Fonts } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

export type ThemedTextProps = TextProps & {
      themeColor?: ThemeColor;
  
    type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link' | 'muted';
};

export function ThemedText({
    style,
    themeColor,
    type = 'default',
    ...rest
}: ThemedTextProps) {
    const theme = useTheme();

    let color: string = theme.foreground;

    if (themeColor) {
        color = theme[themeColor];
    } else if (type === 'muted') {
        color = theme.mutedForeground;
    } else if (type === 'link') {
        color = theme.primary;
    }

    return (
        <Text
            style={[
                { color },
                type === 'default' ? styles.default : undefined,
                type === 'title' ? styles.title : undefined,
                type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
                type === 'subtitle' ? styles.subtitle : undefined,
                type === 'link' ? styles.link : undefined,
                type === 'muted' ? styles.muted : undefined,
                style,
            ]}
            {...rest}
        />
    );
}

const styles = StyleSheet.create({
    default: {
        fontSize: 16,
        // lineHeight: 24,
        fontFamily: Fonts.sans,
    },
    defaultSemiBold: {
        fontSize: 16,
        lineHeight: 24,
        fontWeight: '600',
        fontFamily: Fonts.sans,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        lineHeight: 32,
        fontFamily: Fonts.sans,
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: Fonts.sans,
    },
    link: {
        lineHeight: 30,
        fontSize: 16,
        fontWeight: '600',
    },
    muted: {
        fontSize: 14,
        lineHeight: 20,
        fontFamily: Fonts.sans,
    },
});