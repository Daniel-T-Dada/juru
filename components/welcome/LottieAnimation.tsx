


import { StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';

interface OnboardingAnimationProps {
    source: any;
}

const OnboardingAnimation = ({
    source,
}: OnboardingAnimationProps) => {
    return (
        <View style={styles.container} >
            <LottieView
                source={source}
                autoPlay
                loop
                style={{ width: '100%', height: '100%' }}
                resizeMode="contain"
            />
        </View>
    );
};

export default OnboardingAnimation;
const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
    },
});