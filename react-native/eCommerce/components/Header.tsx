import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import BackArrow from '../assets/icons/back-arrow.svg';
import Menu from '../assets/icons/menu-icon.svg';

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.6}>
        <BackArrow width={30} height={30} />
      </TouchableOpacity>
      <Text style={styles.heading}>Flash Sale</Text>
      <TouchableOpacity activeOpacity={0.6}>
        <Menu width={30} height={30} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexBasis: 50,
    width: '100%',
  },
  heading: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
