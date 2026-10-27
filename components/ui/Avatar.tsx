import { Colors } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import React from 'react';
import { View, Image, StyleSheet, type StyleProp, type ViewStyle, type TextStyle } from 'react-native';
import { ThemedText } from '../ThemedText';


export type AvatarProps = {
    name?: string;
    uri?: string;
    size?: 'sm' | 'md' | 'lg' | number;
    containerStyle?: StyleProp<ViewStyle>;
};


function getInitials(name: string): string {
    if (!name) return '?';

    const parts = name.trim().split(/\s+/);
    if (parts.length === 1) {
        return parts[0].substring(0, 2).toUpperCase();
    }

    const first = parts[0]?.[0] || '';
    const last = parts[parts.length - 1]?.[0] || '';
    return `${first}${last}`.toUpperCase();
}


function getDeterministicBg(name: string): string {
    if (!name) return Colors.tones.navy[100];

    const charSum = name.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
    const colorPool = [
        Colors.tones.mint[300],
        Colors.tones.navy[100],
        Colors.tones.mint[100],
        Colors.tones.navy[300],
        '#E2E8F0',
        '#CBD5E1'
    ];

    return colorPool[charSum % colorPool.length];
}

export function Avatar({ name = '', uri, size = 'md', containerStyle }: AvatarProps) {
    const theme = useTheme();

    let sizeVal = 40;
    if (typeof size === 'number') {
        sizeVal = size;
    } else if (size === 'sm') {
        sizeVal = 28;
    } else if (size === 'lg') {
        sizeVal = 72;
    }

    const initials = getInitials(name);
    const dynamicBackground = getDeterministicBg(name);

    const textSize: TextStyle = {
        fontSize: sizeVal * 0.42,
        fontWeight: 'bold',
        color: dynamicBackground === '#0B1124' || dynamicBackground === '#152140' ? '#FFFFFF' : theme.foreground,
    };

    return (
        <View
            style={[
                styles.container,
                {
                    width: sizeVal,
                    height: sizeVal,
                    borderRadius: sizeVal / 2,
                    backgroundColor: dynamicBackground,
                },
                containerStyle,
            ]}
        >
            {uri ? (
                <Image
                    source={{ uri }}
                    style={[styles.image, { borderRadius: sizeVal / 2 }]}
                    resizeMode="cover"
                />
            ) : (
                <ThemedText style={textSize}>{initials}</ThemedText>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
    },
});