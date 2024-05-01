import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../../constants/UIConstants';
import {weatherIcon} from '../../utilities/WeatherBasedIcon';
import type {WeatherCodeType} from '../../constants/WeatherCode';

type LongWeatherCardsProps = {
  weather_code: WeatherCodeType;
  date: string;
  temperature_max: number;
  temperature_min: number;
};

const LongWeatherCards = ({
  weather_code,
  date,
  temperature_max,
  temperature_min,
}: LongWeatherCardsProps) => {
  const avgTemp = (temperature_max + temperature_min) / 2;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          {new Date(date).toLocaleDateString('en-US', {
            weekday: 'long',
          })}
        </Text>
        <Text style={styles.date}>
          {new Date(date).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
          })}
        </Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.temp}>{avgTemp.toFixed(1)}°</Text>
      </View>
      <Image
        style={styles.image}
        source={{
          uri: weatherIcon(date, weather_code),
        }}
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
