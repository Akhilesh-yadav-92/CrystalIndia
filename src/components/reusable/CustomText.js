import React from 'react';
import { Text, StyleSheet } from 'react-native';

// CustomText component
const CustomText = ({
  children,
  style,
  fontSize,
  fontWeight,
  color,
  fontFamily,
  textAlign,
  lineHeight,
  letterSpacing,
  numberOfLines,
  ellipsizeMode,
  textTransform,
  textDecoration,
  textShadow,
  padding,
  margin,
  backgroundColor,
  onPress,
  accessible,
  accessibilityLabel,
  testID,
  ...rest
}) => {
  // Combine styles dynamically
  const textStyles = StyleSheet.create({
    text: {
      fontSize,
      fontWeight,
      color,
      textAlign,
      ...(fontFamily && { fontFamily }),
      ...(lineHeight && { lineHeight }),
      ...(letterSpacing && { letterSpacing }),
      ...(textTransform && { textTransform }),
      ...(textDecoration && { textDecorationLine: textDecoration }),
      ...(textShadow && {
        textShadowColor: textShadow.color || 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: textShadow.offset || { width: 1, height: 1 },
        textShadowRadius: textShadow.radius || 3,
      }),
      ...(padding && {
        paddingTop: padding.top || padding,
        paddingRight: padding.right || padding,
        paddingBottom: padding.bottom || padding,
        paddingLeft: padding.left || padding,
      }),
      ...(margin && {
        marginTop: margin.top || margin,
        marginRight: margin.right || margin,
        marginBottom: margin.bottom || margin,
        marginLeft: margin.left || margin,
      }),
      ...(backgroundColor && { backgroundColor }),
    },
  });

  return (
    <Text
      style={[textStyles.text, style]}
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
      onPress={onPress}
      accessible={accessible}
      accessibilityLabel={accessibilityLabel}
      testID={testID}
      {...rest}
    >
      {children}
    </Text>
  );
};

// Default props
CustomText.defaultProps = {
  fontSize: 16,
  fontWeight: 'normal',
  color: '#000000',
  fontFamily: null,
  textAlign: 'left',
  lineHeight: null,
  letterSpacing: null,
  numberOfLines: null,
  ellipsizeMode: 'tail',
  textTransform: 'none',
  textDecoration: 'none',
  textShadow: null,
  padding: 0,
  margin: 0,
  backgroundColor: null,
  onPress: null,
  accessible: true,
  accessibilityLabel: '',
  testID: 'custom-text',
  style: {},
};

export default CustomText;