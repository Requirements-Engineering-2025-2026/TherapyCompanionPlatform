// BaseComponent.tsx
import React, { memo, useMemo } from 'react';
import { View} from 'react-native';
import type { ViewStyle, StyleProp } from 'react-native';

type BaseComponentProps = {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

const BaseComponent: React.FC<BaseComponentProps> = ({ children, style }) => {
  const memoizedStyle: StyleProp<ViewStyle> = useMemo(
    () => [
      { flex: 1},
      style,
    ],
    [style]
  );

  return <View style={memoizedStyle}>{children}</View>;
};

export default memo(BaseComponent);
