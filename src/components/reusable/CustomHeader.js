import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Icon, TopNavigation, TopNavigationAction, Text } from '@ui-kitten/components';
import { colors } from '../../constants';

// Left back icon
const BackIcon = (props) => (
  <Icon {...props} name='arrow-back' />
);

// Right action icon (e.g., settings)
const SettingsIcon = (props) => (
  <Icon {...props} name='settings-outline' />
);

// Create action buttons
const CustomHeader = ({ title, onBackPress, onRightPress }) => {

  const renderBackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={onBackPress} />
  );

  const renderRightAction = () => (
    <TopNavigationAction icon={SettingsIcon} onPress={onRightPress} />
  );

  return (
    <TopNavigation
      alignment='center'
      title={title}
      accessoryLeft={renderBackAction}
      accessoryRight={renderRightAction}
      style={styles.header}
    />
  );
};

const styles = StyleSheet.create({
  header: {
    elevation: 4,
    backgroundColor:colors.light_theme,
  
  },
});

export default CustomHeader;
