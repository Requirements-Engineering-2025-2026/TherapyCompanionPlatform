

import type { TextStyle } from 'react-native';


export const Fonts = {
    regular: 'Brother_Regular',
    bold: 'Brother_Bold',
    extraBold: 'Brother_Extra_bold',
    italic: 'Brother_Black_Italic',
    medium: 'Brother_Medium',
    light: 'Brother_Light',
};

export const fontSize = {
    xxs: 10, // Small information
    xs: 12, //   Small labels, navigation labels
    s: 14, //    Pills, body information
    m: 16, //     Buttons, labels
    base: 18, //  Used for any font that is not specified otherwise
    ml: 20, // Medium-large text
    l: 24, //     Secondary headings
    xl: 26, //    Page titles
    xxl: 36, //    Large headings
};

export const typography: Record<string, TextStyle> = {
    // XXS
    bodyXxsRegular: {
        fontFamily: Fonts.regular,
        fontWeight: 'normal',
        fontSize: fontSize.xxs,
        lineHeight: 10,
    },
    bodyXxsBold: {
        fontFamily: Fonts.bold,
        fontWeight: 'bold',
        fontSize: fontSize.xxs,
        lineHeight: 10,
    },
    bodyXxsMedium: {
        fontFamily: Fonts.bold,
        fontWeight: '500',
        fontSize: fontSize.xxs,
        lineHeight: 10,
    },

    // XS
    bodyXsRegular: {
        fontFamily: Fonts.medium,
        fontWeight: 'normal',
        fontSize: fontSize.xs,
        lineHeight: 12,
    },
    bodyXsMedium: {
        fontFamily: Fonts.bold,
        fontWeight: '500',
        fontSize: fontSize.xs,
        lineHeight: 12,
    },
    bodyXsBold: {
        fontFamily: Fonts.bold,
        fontWeight: 'bold',
        fontSize: fontSize.xs,
        lineHeight: 12,
    },

    bodyXsSlim: {
        fontFamily: Fonts.regular,
        fontWeight: '300',
        fontSize: fontSize.s,
        lineHeight: 12,
    },

    // S
    bodySRegular: {
        fontFamily: Fonts.regular,
        fontWeight: 'normal',
        fontSize: fontSize.s,
        lineHeight: 16,
    },
    bodySMid: {
        fontFamily: Fonts.extraBold,
        fontWeight: '500',
        fontSize: fontSize.m,
        lineHeight: 16,
    },
    bodySBold: {
        fontFamily: Fonts.bold,
        fontWeight: 'bold',
        fontSize: fontSize.s,
        lineHeight: 16,
    },
    bodySExtra: {
        fontFamily: Fonts.extraBold,
        fontWeight: '800',
        fontSize: fontSize.s,
        lineHeight: 16,
    },
    bodySMedium: {
        fontFamily: Fonts.medium,
        fontWeight: 'normal',
        fontSize: fontSize.s,
        lineHeight: 16,
    },

    // M
    bodyMRegular: {
        fontFamily: Fonts.regular,
        fontWeight: 'normal',
        fontSize: fontSize.m,
        lineHeight: 20,
    },
    bodyMBold: {
        fontFamily: Fonts.bold,
        fontWeight: 'bold',
        fontSize: fontSize.m,
        lineHeight: 20,
    },
    bodyMMedium: {
        fontFamily: Fonts.medium,
        fontWeight: '500',
        fontSize: fontSize.m,
        lineHeight: 20,
    },

    // BASE
    bodyBaseRegular: {
        fontFamily: Fonts.regular,
        fontWeight: 'normal',
        fontSize: fontSize.base,
        lineHeight: 24,
    },
    bodyBaseBold: {
        fontFamily: Fonts.bold,
        fontWeight: 'bold',
        fontSize: fontSize.base,
        lineHeight: 24,
    },
    bodyBaseMedium: {
        fontFamily: Fonts.medium,
        fontWeight: '500',
        fontSize: fontSize.base,
        lineHeight: 24,
    },

    // ML
    bodyPart: {
        fontFamily: Fonts.light,
        fontWeight: '300',
        fontSize: fontSize.ml,
        lineHeight: 24,
    },

    bodyPartRegular: {
        fontFamily: Fonts.regular,
        fontWeight: 'normal',
        fontSize: fontSize.ml,
        lineHeight: 24,
    },
    bodyPartMedium: {
        fontFamily: Fonts.medium,
        fontWeight: '500',
        fontSize: fontSize.ml,
        lineHeight: 24,
    },
    bodyPartBold: {
        fontFamily: Fonts.bold,
        fontWeight: 'bold',
        fontSize: fontSize.ml,
        lineHeight: 24,
    },
    bodyPartExtraBold: {
        fontFamily: Fonts.extraBold,
        fontWeight: '800',
        fontSize: fontSize.ml,
        lineHeight: 24,
    },

    // L
    smallHeadlineRegular: {
        fontFamily: Fonts.regular,
        fontWeight: 'normal',
        fontSize: fontSize.l,
        lineHeight: 28,
    },
    smallHeadlineBold: {
        fontFamily: Fonts.bold,
        fontWeight: 'bold',
        fontSize: fontSize.l,
        lineHeight: 28,
    },
    smallHeadlineExtra: {
        fontFamily: Fonts.extraBold,
        fontWeight: '800',
        fontSize: fontSize.l,
        lineHeight: 28,
    },

    // XL
    pageTitleRegular: {
        fontFamily: Fonts.regular,
        fontWeight: 'normal',
        fontSize: fontSize.xl,
        lineHeight: 32,
    },
    pageTitleBold: {
        fontFamily: Fonts.bold,
        fontWeight: 'bold',
        fontSize: fontSize.xl,
        lineHeight: 32,
    },

    // XXL
    headlineRegular: {
        fontFamily: Fonts.regular,
        fontWeight: 'normal',
        fontSize: fontSize.xxl,
        lineHeight: 40,
    },
    headlineBold: {
        fontFamily: Fonts.bold,
        fontWeight: 'bold',
        fontSize: fontSize.xxl,
        lineHeight: 40,
    },
    headlineExtra: {
        fontFamily: Fonts.extraBold,
        fontWeight: '800',
        fontSize: fontSize.xxl,
        lineHeight: 40,
    },
};

export type TypographyKey = keyof typeof typography;
