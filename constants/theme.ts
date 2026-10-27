
import { Platform } from 'react-native';

export const Colors = {
    // Raw tonal scales for charts, avatars, gradients and custom use-cases
    tones: {
        mint: {
            100: '#E6F6F1',
            300: '#B8E8D9',
            500: '#8BD8BD', // Original soft mint
            700: '#287A62', // Stronger brand mint for light mode
            900: '#17483B',
        },
        navy: {
            100: '#D5D9E5',
            300: '#8A96BA',
            500: '#243665',
            700: '#152140',
            900: '#0B1124',
        },
        neutral: {
            100: '#F8FAFC',
            300: '#E2E8F0',
            500: '#94A3B8',
            700: '#334155',
            900: '#0F172A',
        },
    },

    light: {
        // Base Layout
        background: '#F8FAFC',
        foreground: '#243665',

        // Cards & Surfaces
        card: '#FFFFFF',
        cardForeground: '#243665',
        brandSurface: '#F1FAF6',

        // Brand / Primary Actions
        primary: '#287A62',
        primaryForeground: '#FFFFFF',

        // Secondary / Interactive
        secondary: '#243665',
        secondaryForeground: '#FFFFFF',
        accent: '#E6F6F1',
        accentForeground: '#17483B',

        // Muted content
        muted: '#F1F5F9',
        mutedForeground: '#64748B',

        // Structure
        border: '#E2E8F0',
        input: '#F1F5F9',

        // Semantics
        success: '#047857',
        successForeground: '#FFFFFF',

        warning: '#B45309',
        warningForeground: '#FFFFFF',

        destructive: '#DC2626',
        destructiveForeground: '#FFFFFF',
    },

    dark: {
        // Base Layout
        background: '#0B1124',
        foreground: '#F8FAFC',

        // Cards & Surfaces
        card: '#152140',
        cardForeground: '#F8FAFC',
        brandSurface: '#152A2C',

        // Brand / Primary Actions
        primary: '#8BD8BD',
        primaryForeground: '#0B1124',

        // Secondary / Interactive
        secondary: '#1E293B',
        secondaryForeground: '#8BD8BD',
        accent: '#1B3834',
        accentForeground: '#B8E8D9',

        // Muted content
        muted: '#1E293B',
        mutedForeground: '#94A3B8',

        // Structure
        border: '#1E293B',
        input: '#152140',

        // Semantics
        success: '#34D399',
        successForeground: '#0B1124',

        warning: '#FBBF24',
        warningForeground: '#0B1124',

        destructive: '#F87171',
        destructiveForeground: '#0B1124',
    },
} as const;

export type ThemeColor =
    keyof typeof Colors.light & keyof typeof Colors.dark;

export const Fonts = Platform.select({
    ios: {
        sans: 'system-ui',
        serif: 'ui-serif',
        rounded: 'ui-rounded',
        mono: 'ui-monospace',
    },
    default: {
        sans: 'normal',
        serif: 'serif',
        rounded: 'normal',
        mono: 'monospace',
    },
    web: {
        sans: 'var(--font-display)',
        serif: 'var(--font-serif)',
        rounded: 'var(--font-rounded)',
        mono: 'var(--font-mono)',
    },
});

export const Spacing = {
    half: 2,
    one: 4,
    two: 8,
    three: 16,
    four: 24,
    five: 32,
    six: 64,
} as const;

export const BottomTabInset =
    Platform.select({ ios: 50, android: 80 }) ?? 0;

export const MaxContentWidth = 800;
