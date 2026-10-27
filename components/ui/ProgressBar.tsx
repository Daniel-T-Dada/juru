

import { ThemeColor } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet, type ViewStyle, type StyleProp } from 'react-native';


export type ProgressBarProps = {
    progress: number;
    height?: number;
    fillColor?: ThemeColor;
    trackColor?: ThemeColor;
    style?: StyleProp<ViewStyle>;
    animated?: boolean;
};

export function ProgressBar({
    progress,
    height = 8,
    fillColor = 'primary',
    trackColor = 'muted',
    style,
    animated = true,
}: ProgressBarProps) {
    const theme = useTheme();

   
    const clampedProgress = Math.min(Math.max(progress, 0), 100);

    const animatedValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        if (animated) {
            Animated.timing(animatedValue, {
                toValue: clampedProgress,
                duration: 600, 
                useNativeDriver: false, 
            }).start();
        } else {
            animatedValue.setValue(clampedProgress);
        }
    }, [clampedProgress, animated]);

   
    const widthInterpolation = animatedValue.interpolate({
        inputRange: [0, 100],
        outputRange: ['0%', '100%'],
    });

    return (
        <View
            style={[
                styles.track,
                {
                    height,
                    backgroundColor: theme[trackColor],
                    borderRadius: height / 2,
                },
                style,
            ]}
        >
            <Animated.View
                style={[
                    styles.fill,
                    {
                        width: widthInterpolation,
                        backgroundColor: theme[fillColor],
                        borderRadius: height / 2,
                    },
                ]}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    track: {
        width: '100%',
        overflow: 'hidden',
    },
    fill: {
        height: '100%',
        position: 'absolute',
        left: 0,
        top: 0,
    },
});