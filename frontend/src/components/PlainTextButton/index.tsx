import React from 'react';
import {Text,TouchableOpacity} from 'react-native';
import type { GestureResponderEvent, TextStyle, ViewStyle } from 'react-native';
import styles from './styles';

type PlainTextButtonProps = {
    onPress: (event: GestureResponderEvent) => void;
    children: React.ReactNode;
    style?: TextStyle;
    containerStyle?: ViewStyle;
    disabled?: boolean;
};

const PlainTextButton: React.FC<PlainTextButtonProps> = ({
    onPress,
    children,
    style,
    containerStyle,
    disabled = false,
}) => (
    <TouchableOpacity
        onPress={onPress}
        style={containerStyle}
        disabled={disabled}
        activeOpacity={0.6}
        accessibilityRole="button"
    >
        <Text style={[styles.text, style]}>{children}</Text>
    </TouchableOpacity>
);

export default PlainTextButton;
