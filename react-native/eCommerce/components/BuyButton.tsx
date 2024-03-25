import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Bag from '../assets/icons/bag.svg';
const BuyButton = () => {
  return (
    <TouchableOpacity activeOpacity={0.6} style={styles.button}>
      <Bag width={20} height={20} />
      <Text style={{color: 'white', marginLeft: 10}}>Buy</Text>
    </TouchableOpacity>
  );
};

export default BuyButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2d2d2d',
    color: 'white',
    paddingVertical: 10,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 50,
  },
});
