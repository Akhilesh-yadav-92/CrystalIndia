/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import Rootnavigation from './src/navigations/Rootnavigation';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text,IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
<IconRegistry icons={EvaIconsPack} />
  <ApplicationProvider {...eva} theme={eva.light}>
    <Rootnavigation/>
  </ApplicationProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
