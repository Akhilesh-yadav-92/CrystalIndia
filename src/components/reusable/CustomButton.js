import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const CustomButton = ({
  title = 'Click Me',
  onPress,
  backgroundColor = '#4CAF50',
  textColor = '#fff',
  padding = 12,
  borderRadius = 8,
  fontSize = 16,
  width = '80%',
  alignSelf = 'center'
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor,
        padding,
        borderRadius,
        alignItems: 'center',
        justifyContent: 'center',
        width,
        alignSelf
      }}
    >
      <Text style={{ color: textColor, fontSize, fontWeight: '600' }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
