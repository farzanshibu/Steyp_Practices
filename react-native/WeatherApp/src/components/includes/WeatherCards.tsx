import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../../constants/UIConstants';

const WeatherCards = ({index}: {index: number}) => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor:
            index === 0 ? Colors.gradientLightBlue : Colors.primaryColor,
        },
      ]}>
      <Image
        source={require('../../assets/images/rainy-cloud.png')}
        style={styles.image}
      />
      <View style={styles.card}>
        <Text style={styles.time}>14:00</Text>
        <Text style={styles.temp}>32°</Text>
      </View>
    </View>
  );
};

export default WeatherCards;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 3,
    borderRadius: 20,
  },
  image: {
    width: 60,
    height: 60,
  },
  card: {
    marginLeft: 10,
    alignItems: 'center',
  },
  time: {
    fontSize: 16,
    fontFamily: 'Gordita-Regular',
    color: 'lightgray',
  },
  temp: {
    fontSize: 24,
    fontFamily: 'Gordita-Medium',
    textAlign: 'center',
    color: Colors.white,
  },
});
