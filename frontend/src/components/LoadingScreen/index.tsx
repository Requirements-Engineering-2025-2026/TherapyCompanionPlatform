import { ActivityIndicator, View } from 'react-native';
import loadingScreenStyles from './styles';

const LoadingScreen = () => {
    return (
        <View style={loadingScreenStyles.loadingContainer}>
            <ActivityIndicator size="large" />
        </View>
    );
};

export default LoadingScreen;
