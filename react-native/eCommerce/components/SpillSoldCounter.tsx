import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const SpillSoldCounter = () => {
  return (
    <View style={styles.pillContainer}>
      <View style={styles.pillFill} />
      <Text style={styles.pillText}>345 Sold</Text>
    </View>
  );
};

export default SpillSoldCounter;

const styles = StyleSheet.create({
  pillContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 100,
    height: 19,
    padding: 2,
    marginHorizontal: 'auto',
    position: 'relative',
  },
  pillFill: {
    backgroundColor: '#2d2d2d',
    width: 140,
    position: 'absolute',
    top: 0,
    left: 0,
    borderRadius: 100,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
    height: 19,
  },
  pillText: {
    color: 'white',
    fontSize: 10,
  },
});
