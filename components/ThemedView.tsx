

import { View, type ViewProps } from 'react-native';
import { ThemeColor } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';


export type ThemedViewProps = ViewProps & {
    /** 
     * Maps directly to the keys in your Colors.light / Colors.dark objects.
     * @default 'background'
     */
    themeColor?: ThemeColor;
};

const ThemedView = ({
    style,
    themeColor = 'background',
    ...otherProps
}: ThemedViewProps) => {
    const theme = useTheme();
    const backgroundColor = theme[themeColor];

    return (
        <View
            style={[{ backgroundColor }, style]}
            {...otherProps}
        />
    );
}

export { ThemedView };