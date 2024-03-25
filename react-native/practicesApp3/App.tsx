import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import RegistrationScreen from './src/components/screens/RegistrationScreen';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.sectionContainer}>
      <RegistrationScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingVertical: 24,
  },
});

export default App;
