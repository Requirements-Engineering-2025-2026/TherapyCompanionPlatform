import React, { useMemo } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import type { GestureResponderEvent, TextStyle, ViewStyle } from 'react-native';
import COLORS from '../../constants/colors';
import styles from './styles';

type ButtonProps = {
    onPress: (event: GestureResponderEvent) => void;
    title: string;
    color?: string;
    accessibilityLabel?: string;
    accessibilityHint?: string;
    style?: ViewStyle;
    textStyle?: TextStyle;
} & React.ComponentProps<typeof TouchableOpacity>;

const Button: React.FC<ButtonProps> = ({
    onPress,
    title,
    color = COLORS.DARKBLUE,
    accessibilityLabel,
    accessibilityHint,
    style,
    textStyle,
    ...rest
}) => {
    const buttonStyle = useMemo(
        () => [styles.button, { backgroundColor: color }, style],
        [color, style],
    );

    const textStyles = useMemo(() => [styles.text, textStyle], [textStyle]);

    return (
        <TouchableOpacity
            onPress={onPress}
            accessibilityLabel={accessibilityLabel}
            accessibilityHint={accessibilityHint}
            accessibilityRole="button"
            style={buttonStyle}
            activeOpacity={0.7}
            {...rest}
        >
            <Text style={textStyles}>{title}</Text>
        </TouchableOpacity>
    );
};

export default Button;
