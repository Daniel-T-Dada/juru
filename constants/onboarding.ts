

export interface OnboardingSlide {
    id: string;
    title: string;
    description: string;
    animationUrl: any; 
}

export const onboardingSlides: OnboardingSlide[] = [
    {
        id: '1',
        title: 'Thrift Saving, Reimagined',
        description: 'Join secure Ajo cycles with friends, colleagues, or vetted community members. Hit your financial goals faster by saving together.',
        animationUrl: require('@/assets/images/onboarding/piggy.json'),
    },
    {
        id: '2',
        title: 'Zero Default Anxiety',
        description: 'No more chasing people for contributions. With strict BVN verification and automated direct debits, your money is safe and guaranteed.',
        animationUrl: require('@/assets/images/onboarding/trust.json'),
    },
    {
        id: '3',
        title: 'Instant Automated Payouts',
        description: 'When it is your turn on the seat, your bulk payout lands instantly in your bank account. No stories, just credit alerts.',
        animationUrl: require('@/assets/images/onboarding/payment.json'),
    }
];