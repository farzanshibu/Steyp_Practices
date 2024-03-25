import {StyleSheet, Image, Text, View} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Instagram</Text>
      <Image
        source={require('../../assets/alexa.jpeg')}
        style={styles.profileImage}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'space-between',
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'white',
  },
});
