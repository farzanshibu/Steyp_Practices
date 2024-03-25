import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const SpillCard = (props: {title: string}) => {
  return (
    <TouchableOpacity activeOpacity={0.6}>
      <View style={styles.pillContainer}>
        <Text style={styles.pillText}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SpillCard;

const styles = StyleSheet.create({
  pillContainer: {
    justifyContent: 'center',
    borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: 100,
    padding: 7,
    paddingHorizontal: 15,
  },
  pillText: {
    color: 'black',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
