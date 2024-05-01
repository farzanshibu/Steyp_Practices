import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../../constants/UIConstants';
import {weatherIcon} from '../../utilities/WeatherBasedIcon';
import type {WeatherCodeType} from '../../constants/WeatherCode';

const WeatherCards = ({
  index,
  time,
  temperature,
  weather_code,
}: {
  index: number;
  time: string;
  temperature: number;
  weather_code: WeatherCodeType;
}) => {
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
        source={{
          uri: weatherIcon(time, weather_code),
        }}
        style={styles.image}
      />
      <View style={styles.card}>
        <Text style={styles.time}>
          {new Date(time).toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
          })}{' '}
        </Text>
        <Text style={styles.temp}>{temperature}°</Text>
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
