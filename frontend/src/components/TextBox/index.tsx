import React, { useMemo, useState } from 'react';
import {TextInput,TouchableOpacity,View,} from 'react-native';
import type { TextInputProps,TextStyle,ViewStyle, } from 'react-native';
import EyeIcon from '../../assets/icons/eye.svg';
import EyeOffIcon from '../../assets/icons/eye_off.svg';
import COLORS from '../../constants/colors';

import styles from './styles';

type CustomTextBoxProps = {
    placeholder: string;
    containerStyle?: ViewStyle;
    inputStyle?: TextStyle | TextStyle[];
    required?: boolean;
    leftIcon?: React.ReactNode;
};

type TextBoxProps = CustomTextBoxProps & TextInputProps;

const TextBox: React.FC<TextBoxProps> = ({
    placeholder,
    value,
    onChangeText,
    containerStyle,
    inputStyle,
    required = false,
    leftIcon,
    accessibilityLabel,
    accessibilityHint,
    secureTextEntry = false,
    keyboardType = 'default',
    autoComplete = 'off',
    autoCapitalize = 'sentences',
    ...textInputProps
}) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const finalPlaceholder = useMemo(
        () => (required ? `${placeholder}*` : placeholder),
        [placeholder, required],
    );

    const finalAccessibilityLabel = useMemo(
        () => accessibilityLabel || finalPlaceholder,
        [accessibilityLabel, finalPlaceholder],
    );

    const showToggleButton = useMemo(() => secureTextEntry, [secureTextEntry]);
    const isSecure = useMemo(
        () => secureTextEntry && !isPasswordVisible,
        [secureTextEntry, isPasswordVisible],
    );

    const containerStyles = useMemo(
        () => [styles.container, containerStyle],
        [containerStyle],
    );

    const inputStyles = useMemo(
        () => [
            styles.input,
            showToggleButton && styles.inputWithToggle,
            leftIcon ? styles.inputWithLeftIcon : null,
            inputStyle,
        ],
        [showToggleButton, leftIcon, inputStyle],
    );

    const toggleAccessibilityLabel = useMemo(
        () => (isPasswordVisible ? 'Hide password' : 'Show password'),
        [isPasswordVisible],
    );

    return (
        <View style={containerStyles}>
            <View style={styles.inputContainer}>
                {leftIcon && (
                    <View style={styles.leftIconContainer}>{leftIcon}</View>
                )}

                <TextInput
                    value={value}
                    onChangeText={onChangeText}
                    placeholder={finalPlaceholder}
                    placeholderTextColor={COLORS.GREY_PLACEHOLDER}
                    accessibilityLabel={finalAccessibilityLabel}
                    accessibilityHint={accessibilityHint}
                    secureTextEntry={isSecure}
                    keyboardType={keyboardType}
                    autoComplete={autoComplete}
                    autoCapitalize={autoCapitalize}
                    style={inputStyles}
                    {...textInputProps}
                />

                {showToggleButton && (
                    <TouchableOpacity
                        onPress={togglePasswordVisibility}
                        style={styles.toggleButton}
                        accessibilityRole="button"
                        accessibilityLabel={toggleAccessibilityLabel}
                    >
                        
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

export default TextBox;
