import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../../constants/UIConstants';

const LongWeatherCards = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Wednesday</Text>
        <Text style={styles.date}>21 June</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.temp}>29°</Text>
      </View>
      <Image
        style={styles.image}
        source={require('../../assets/images/rainy-cloud.png')}
      />
    </View>
  );
};

export default LongWeatherCards;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 13,
    backgroundColor: Colors.primaryColor,
    borderRadius: 20,
    width: '95%',
  },
  header: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontFamily: 'Gordita-Medium',
    color: Colors.white,
  },
  date: {
    fontSize: 16,
    fontFamily: 'Gordita-Regular',
    color: Colors.white,
    alignSelf: 'flex-start',
  },
  card: {
    marginLeft: 10,
  },
  temp: {
    fontSize: 44,
    fontFamily: 'Gordita-Bold',
    color: Colors.white,
  },
  image: {
    width: 60,
    height: 60,
  },
});
