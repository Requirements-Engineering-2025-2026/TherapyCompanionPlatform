import AsyncStorage from '@react-native-async-storage/async-storage';

export const getValueFromLocalStorage = async (
    key: string,
): Promise<string | null> => {
    try {
        return await AsyncStorage.getItem(key);
    } catch (e) {
        if (__DEV__) {
            console.error(`AsyncStorage error in getValueFromLocalStorage:`, e);
        }
        return null;
    }
};

export const setValueInLocalStorage = async (
    key: string,
    value: string,
): Promise<void> => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (e) {
        if (__DEV__) {
            console.error(`AsyncStorage error in setValueInLocalStorage:`, e);
        }
    }
};

export const deleteValueFromLocalStorage = async (
    key: string,
): Promise<void> => {
    try {
        await AsyncStorage.removeItem(key);
    } catch (e) {
        if (__DEV__) {
            console.error(
                `AsyncStorage error in deleteValueFromLocalStorage:`,
                e,
            );
        }
    }
};
